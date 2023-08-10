import { create } from 'zustand';

interface PlayerState {
  isOpen: boolean;
  trackIndex: number;
  openPlayer: () => void;
  closePlayer: () => void;
  setTrackIndex: (newIndex: number) => void;
}

const usePlayerStore = create<PlayerState>((set) => ({
  isOpen: false,
  trackIndex: 0,
  openPlayer: () => set({ isOpen: true }),
  closePlayer: () => set({ isOpen: false }),
  setTrackIndex: (newIndex) => set((state) => ({ trackIndex: newIndex }))
}));

export default usePlayerStore;
