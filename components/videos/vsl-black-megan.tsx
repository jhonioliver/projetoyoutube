import { useEffect } from "react";

export default function VSLBlackMegan() {
  useEffect(() => {
    const loadPlayerScript = () => {
      // Evita carregar o script duas vezes
      if (document.querySelector('script[src*="691e6ce2fa3f799e41cc7ce3"]')) return;

      const script = document.createElement("script");
      script.src =
        "https://scripts.converteai.net/1c3bcfc5-8544-4f0a-9e4c-0927e07f2e22/players/691e6ce2fa3f799e41cc7ce3/v4/player.js";
      script.async = true;

      script.onload = () => {
        console.log("Player script loaded successfully");
      };

      script.onerror = () => {
        console.error("Failed to load player script");
      };

      document.head.appendChild(script);
    };

    loadPlayerScript();

    return () => {
      // Remover script ao desmontar o componente
      const existingScript = document.querySelector(
        'script[src*="691e6ce2fa3f799e41cc7ce3"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    // @ts-expect-error - Player script não existe no escopo global, é carregado dinamicamente
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
}
