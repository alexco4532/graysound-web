import { useEffect } from 'react';
import useChatwootStore from '@/hooks/use-chatwoot-store';

export const useChatwootEvent = () => {
  const setChatwootIsReady = useChatwootStore((state) => state.setIsReady);

  useEffect(() => {
    const handleChatwootReady = () => {
      setChatwootIsReady();
    };
    window.addEventListener('chatwoot:ready', handleChatwootReady);
    return () => {
      window.removeEventListener('chatwoot:ready', handleChatwootReady);
    };
  }, []);
};
