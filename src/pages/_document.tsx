import Navbar from "@/components/sections/navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="65eac2d6-81a4-4a72-9272-9710402a045e" data-blockingmode="auto" type="text/javascript" async></script>
      </Head>

      <body className="bg-bodyBg text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
