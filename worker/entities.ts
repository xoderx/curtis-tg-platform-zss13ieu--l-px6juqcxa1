import { IndexedEntity } from "./core-utils";
import type { User, Chat, ChatMessage, Lead, SiteContent } from "@shared/types";
import { MOCK_CHAT_MESSAGES, MOCK_CHATS, MOCK_USERS } from "@shared/mock-data";
import { TEAM_MEMBERS, SERVICES, PORTFOLIO_DETAILS, CLIENT_LOGOS } from "@shared/content";
export class UserEntity extends IndexedEntity<User> {
  static readonly entityName = "user";
  static readonly indexName = "users";
  static readonly initialState: User = { id: "", name: "" };
  static seedData = MOCK_USERS;
}
export type ChatBoardState = Chat & { messages: ChatMessage[] };
const SEED_CHAT_BOARDS: ChatBoardState[] = MOCK_CHATS.map(c => ({
  ...c,
  messages: MOCK_CHAT_MESSAGES.filter(m => m.chatId === c.id),
}));
export class ChatBoardEntity extends IndexedEntity<ChatBoardState> {
  static readonly entityName = "chat";
  static readonly indexName = "chats";
  static readonly initialState: ChatBoardState = { id: "", title: "", messages: [] };
  static seedData = SEED_CHAT_BOARDS;
  async listMessages(): Promise<ChatMessage[]> {
    const { messages } = await this.getState();
    return messages;
  }
  async sendMessage(userId: string, text: string): Promise<ChatMessage> {
    const msg: ChatMessage = { id: crypto.randomUUID(), chatId: this.id, userId, text, ts: Date.now() };
    await this.mutate(s => ({ ...s, messages: [...s.messages, msg] }));
    return msg;
  }
}
export class LeadEntity extends IndexedEntity<Lead> {
  static readonly entityName = "lead";
  static readonly indexName = "leads";
  static readonly initialState: Lead = {
    id: "",
    name: "",
    email: "",
    organization: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    source: "direct",
    createdAt: 0
  };
}
export class ContentEntity extends IndexedEntity<SiteContent & { id: string }> {
  static readonly entityName = "content";
  static readonly indexName = "site-content";
  static readonly initialState: SiteContent & { id: string } = {
    id: "global-content",
    team: [],
    services: [],
    portfolio: [],
    clients: [],
    aiConfig: {
      dialoraClientKey: "wdgt_o2z1u7gklff7gy9cmnqe25zn",
      dialoraPhone: "(314) 314-0511",
      noemChatPrompt: "St. Louis Infrastructure Intelligence Engine",
      noemEmbedCode: ""
    }
  };
  static seedData = [{
    id: "global-content",
    team: TEAM_MEMBERS,
    services: SERVICES,
    portfolio: PORTFOLIO_DETAILS,
    clients: CLIENT_LOGOS,
    aiConfig: {
      dialoraClientKey: "wdgt_o2z1u7gklff7gy9cmnqe25zn",
      dialoraPhone: "(314) 314-0511",
      noemChatPrompt: "St. Louis Infrastructure Intelligence Engine",
      noemEmbedCode: ""
    }
  }];
}