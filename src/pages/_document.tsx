import { Html, Head, Main, NextScript } from 'next/document';
// https://github.com/vercel/next.js/blob/canary/packages/next/pages/_document.tsx
const Document = () => (
  <Html>
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon.png" />
      <meta name="theme-color" content="#fff" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
