import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script'
import ToastContainerWrapper from '@/components/toast/toast-container';
import ChatwootWidget from './../components/chatwoot/chatwoot-widget';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <ChatwootWidget />
    <Component {...pageProps} />
    <Analytics />
    <ToastContainerWrapper />
  </>
}
