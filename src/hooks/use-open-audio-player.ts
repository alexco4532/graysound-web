import { useCallback } from 'react';
import usePlayerStore from '@/hooks/use-player-store';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import projectsListAudio from '@/data/project-list-audio';

export const useOpenAudioPlayer = () => {
  const { load, stop, playing } = useGlobalAudioPlayer();
  const setAudioIndex = usePlayerStore((state) => state.setAudioIndex);
  const openPlayer = usePlayerStore((state) => state.openPlayer);

  const openAudioPlayer = useCallback(
    (index: number) => {
      const link = `${process.env.NEXT_PUBLIC_CDN_URL}${projectsListAudio[index].audioUrl}`;
      if (playing) {
        stop();
      }
      setAudioIndex(index);
      load(link, {
        autoplay: true,
        html5: true,
        format: 'mp3',
        initialVolume: 1
      });
      return openPlayer();
    },
    [load, stop, playing, setAudioIndex, openPlayer]
  );

  return openAudioPlayer;
};
