import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Example description." />
        {/* <meta
          property="og:image"
          content="https://kriteeripankki.fi/og_placeholder.png"
        /> */}
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <body className="text-black bg-stone-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
