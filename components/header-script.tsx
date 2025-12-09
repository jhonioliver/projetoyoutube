import Script from "next/script";

const idList: Record<string, string> = {
  kim: "691e6c43d55a0071a20f4ce0",
  elon: "691e6c43d55a0071a20f4ce0",
  shakira: "691e6c43d55a0071a20f4ce0",
};

export default function HeaderScript({ content }: { content: string }) {

  const pixelId = idList[content];

  if (!pixelId) return null;

  return (
    <>
      <Script
        id="utmify-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.pixelId=${JSON.stringify(pixelId)};`,
        }}
      />
      <Script
        id="utmify-pixel"
        src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
        strategy="afterInteractive"
      />
      <Script
        id="utmify-utms"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-subids
        strategy="afterInteractive"
      />
    </>
  );
  
};