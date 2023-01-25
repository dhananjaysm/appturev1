import create from 'zustand';

interface ScrollState {
  scroll: boolean;
  scrolling: (scroll: boolean) => void;
}

export const useScrollStore = create<ScrollState>()((set) => ({
  scroll: false,
  scrolling: (scroll) => set((state) => ({ scroll: scroll })),
}));
