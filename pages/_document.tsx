import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="React UI component library." />
        {/* <meta
          property="og:image"
          content="https://kriteeripankki.fi/og_placeholder.png"
        /> */}
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
      </Head>
      <body className="border-gray-500 text-neutral-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
