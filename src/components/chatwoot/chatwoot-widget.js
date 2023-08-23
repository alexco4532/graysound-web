import { useEffect } from 'react';

const ChatwootWidget = () => {
  useEffect(() => {
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right',
      locale: 'pl',
      useBrowserLanguage: false,
      darkMode: 'light',
      type: 'expanded_bubble',
      launcherTitle: 'Live Chat'
    };

    (function (d, t) {
      var BASE_URL = 'https://app.chatwoot.com';
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + '/packs/js/sdk.js';
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: `${process.env.NEXT_PUBLIC_CHATWOOT_KEY}`,
          baseUrl: BASE_URL
        });
      };
    })(document, 'script');
  }, []);

  return null;
};

export default ChatwootWidget;
