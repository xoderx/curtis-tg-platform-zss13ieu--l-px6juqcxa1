import { create } from 'zustand';
interface UIState {
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;
}
export const useUIStore = create<UIState>((set) => ({
  chatOpen: false,
  setChatOpen: (open: boolean) => set({ chatOpen: open }),
}));