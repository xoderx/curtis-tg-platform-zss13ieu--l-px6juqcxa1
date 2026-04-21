import { Hono } from "hono";
import type { Env } from './core-utils';
import { UserEntity, ChatBoardEntity, LeadEntity, ContentEntity } from "./entities";
import { ok, bad, notFound, isStr } from './core-utils';
import type { Lead, SiteContent } from "@shared/types";
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  app.get('/api/test', (c) => c.json({ success: true, data: { name: 'Curtis TG API' }}));
  // CONTENT CMS
  app.get('/api/content', async (c) => {
    await ContentEntity.ensureSeed(c.env);
    const content = new ContentEntity(c.env, 'global-content');
    return ok(c, await content.getState());
  });
  app.post('/api/content', async (c) => {
    const auth = c.req.header('Authorization');
    // Simple administrative check - in production use secure secrets
    if (auth !== 'Bearer curtis-admin-2025') return bad(c, 'Unauthorized');
    const body = (await c.req.json()) as SiteContent;
    const content = new ContentEntity(c.env, 'global-content');
    await content.save({ ...body, id: 'global-content' });
    return ok(c, body);
  });
  // LEADS
  app.post('/api/leads', async (c) => {
    const body = (await c.req.json()) as Partial<Lead>;
    if (!body.name || !body.email || !body.organization) {
      return bad(c, 'Required fields missing');
    }
    const lead: Lead = {
      id: crypto.randomUUID(),
      name: body.name,
      email: body.email,
      organization: body.organization,
      projectType: body.projectType || 'General Inquiry',
      budget: body.budget || 'Undisclosed',
      timeline: body.timeline || 'TBD',
      message: body.message || '',
      source: body.source || 'direct',
      createdAt: Date.now()
    };
    const created = await LeadEntity.create(c.env, lead);
    return ok(c, created);
  });
  app.get('/api/leads', async (c) => {
    const page = await LeadEntity.list(c.env, c.req.query('cursor'), 50);
    return ok(c, page);
  });
  // USERS & CHATS
  app.get('/api/users', async (c) => {
    await UserEntity.ensureSeed(c.env);
    const page = await UserEntity.list(c.env, c.req.query('cursor'), 20);
    return ok(c, page);
  });
  app.get('/api/chats', async (c) => {
    await ChatBoardEntity.ensureSeed(c.env);
    const page = await ChatBoardEntity.list(c.env, c.req.query('cursor'), 20);
    return ok(c, page);
  });
  app.get('/api/chats/:chatId/messages', async (c) => {
    const chat = new ChatBoardEntity(c.env, c.req.param('chatId'));
    if (!await chat.exists()) return notFound(c, 'chat not found');
    return ok(c, await chat.listMessages());
  });
  app.post('/api/chats/:chatId/messages', async (c) => {
    const { userId, text } = (await c.req.json()) as { userId?: string; text?: string };
    if (!isStr(userId) || !text?.trim()) return bad(c, 'userId and text required');
    const chat = new ChatBoardEntity(c.env, c.req.param('chatId'));
    if (!await chat.exists()) return notFound(c, 'chat not found');
    return ok(c, await chat.sendMessage(userId, text.trim()));
  });
}