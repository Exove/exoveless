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
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
      </Head>
      <body className="text-black ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
