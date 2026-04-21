import { create } from 'zustand';
import { api } from '@/lib/api-client';
import type { SiteContent } from '@shared/types';
import { TEAM_MEMBERS, SERVICES, PORTFOLIO_DETAILS, CLIENT_LOGOS } from '@shared/content';
interface ContentState {
  content: SiteContent;
  loading: boolean;
  error: string | null;
  fetchContent: () => Promise<void>;
  updateContent: (newContent: SiteContent) => Promise<void>;
  setLocalContent: (newContent: SiteContent) => void;
  getProjectById: (id: string) => SiteContent['portfolio'][number] | undefined;
}
const DEFAULT_CONTENT: SiteContent = {
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
};
export const useContentStore = create<ContentState>((set, get) => ({
  content: DEFAULT_CONTENT,
  loading: false,
  error: null,
  fetchContent: async () => {
    set({ loading: true });
    try {
      const data = await api<SiteContent>('/api/content');
      if (data && typeof data === 'object' && Object.keys(data).length > 0) {
        // Ensure standard structure is present before setting
        const validContent = {
          ...DEFAULT_CONTENT,
          ...data,
          // Re-ensure nested objects are present
          aiConfig: { ...DEFAULT_CONTENT.aiConfig, ...(data.aiConfig || {}) }
        };
        set({ content: validContent, loading: false, error: null });
      } else {
        console.warn('Persistence layer returned empty/invalid content, staying with defaults');
        set({ loading: false });
      }
    } catch (err) {
      console.warn('Persistence layer hydration failed, using fallback content:', err);
      set({ error: (err as Error).message, loading: false });
    }
  },
  updateContent: async (newContent: SiteContent) => {
    set({ loading: true });
    try {
      await api<SiteContent>('/api/content', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer curtis-admin-2025' },
        body: JSON.stringify({ ...newContent, id: 'global-content' }),
      });
      // Sync local state immediately after success
      set({ content: newContent, loading: false, error: null });
      // Re-fetch to ensure persistence integrity
      const refreshed = await api<SiteContent>('/api/content');
      if (refreshed) {
        set({ content: refreshed });
      }
    } catch (err) {
      set({ error: (err as Error).message, loading: false });
      throw err;
    }
  },
  setLocalContent: (newContent: SiteContent) => set({ content: newContent }),
  getProjectById: (id: string) => {
    const portfolio = get().content.portfolio;
    return portfolio.find(p => p.id === id);
  }
}));