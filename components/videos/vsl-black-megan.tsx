import { useEffect } from "react";

export default function VSLBlackMegan() {
  useEffect(() => {
    const ensurePerformanceAssets = () => {
      const head = document.head;

      if (!document.querySelector('script[data-vturb-perf="691e6ce2fa3f799e41cc7ce3"]')) {
        const perfScript = document.createElement("script");
        perfScript.setAttribute("data-vturb-perf", "691e6ce2fa3f799e41cc7ce3");
        perfScript.innerHTML = '!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);';
        head.appendChild(perfScript);
      }

      const linkConfigs = [
        {
          rel: "preload",
          href: "https://scripts.converteai.net/1c3bcfc5-8544-4f0a-9e4c-0927e07f2e22/players/691e6ce2fa3f799e41cc7ce3/v4/player.js",
          as: "script",
        },
        {
          rel: "preload",
          href: "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js",
          as: "script",
        },
        {
          rel: "preload",
          href: "https://cdn.converteai.net/1c3bcfc5-8544-4f0a-9e4c-0927e07f2e22/691e6c457cc713fc76f44fb6/main.m3u8",
          as: "fetch",
          crossOrigin: "anonymous",
        },
        { rel: "dns-prefetch", href: "https://cdn.converteai.net" },
        { rel: "dns-prefetch", href: "https://scripts.converteai.net" },
        { rel: "dns-prefetch", href: "https://images.converteai.net" },
        { rel: "dns-prefetch", href: "https://api.vturb.com.br" },
      ];

      linkConfigs.forEach(({ rel, href, as, crossOrigin }) => {
        if (!document.querySelector(`link[rel="${rel}"][href="${href}"]`)) {
          const link = document.createElement("link");
          link.rel = rel;
          link.href = href;
          if (as) link.as = as;
          if (crossOrigin) link.crossOrigin = crossOrigin;
          head.appendChild(link);
        }
      });
    };

    const loadPlayerScript = () => {
      if (document.querySelector('script[src*="691e6ce2fa3f799e41cc7ce3"]')) return;
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/1c3bcfc5-8544-4f0a-9e4c-0927e07f2e22/players/691e6ce2fa3f799e41cc7ce3/v4/player.js";
      script.async = true;
      script.onload = () => {
        console.log("Player script loaded successfully");
      };
      script.onerror = () => {
        console.error("Failed to load player script");
      };
      document.head.appendChild(script);
    };

    ensurePerformanceAssets();
    loadPlayerScript();

    return () => {
      const existingScript = document.querySelector('script[src*="691e6ce2fa3f799e41cc7ce3"]');
      if (existingScript) {
        existingScript.remove();
      };
    };
  }, []);

  return (
    // @ts-expect-error - Player script is not defined in the global scope
    <vturb-smartplayer 
      id="vid-691e6ce2fa3f799e41cc7ce3" 
      style={{ 
        width: "100%",
        margin: "0 auto", 
        display: "block",
        "--player-border-radius": "20px",
        "--player-box-shadow": "0 5px 5px 0 rgba(0, 0, 0, 0.2)",
      }} 
    />
  );

};