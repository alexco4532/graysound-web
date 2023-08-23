import { create } from 'zustand';

interface PlayerState {
  isOpen: boolean;
  audioIndex: number;
  openPlayer: () => void;
  closePlayer: () => void;
  setAudioIndex: (newIndex: number) => void;
}

const usePlayerStore = create<PlayerState>((set) => ({
  isOpen: false,
  audioIndex: 0,
  openPlayer: () => set({ isOpen: true }),
  closePlayer: () => set({ isOpen: false }),
  setAudioIndex: (newIndex) => set((state) => ({ audioIndex: newIndex }))
}));

export default usePlayerStore;
