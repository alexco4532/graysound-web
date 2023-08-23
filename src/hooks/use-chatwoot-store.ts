import { create } from 'zustand';

interface ChatwootState {
  isReady: boolean;
  setIsReady: () => void;
  setIsNotReady: () => void;
}

const useChatwootStore = create<ChatwootState>((set) => ({
  isReady: false,
  setIsReady: () => set({ isReady: true }),
  setIsNotReady: () => set({ isReady: false })
}));

export default useChatwootStore;
