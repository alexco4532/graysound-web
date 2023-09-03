import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script'
import ToastContainerWrapper from '@/components/toast/toast-container';
import ChatwootWidget from './../components/chatwoot/chatwoot-widget';


//<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="65eac2d6-81a4-4a72-9272-9710402a045e" data-blockingmode="auto" type="text/javascript"></script>

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <ChatwootWidget />
    <Component {...pageProps} />
    <Analytics />
    <ToastContainerWrapper />
  </>
}
