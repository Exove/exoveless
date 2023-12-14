import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Inter } from 'next/font/google';

import "styles/globals.css";

// Built-in self hosted font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <div className={`${inter.variable}`}>
          <Component {...pageProps} />
        </div>
    </ThemeProvider>
  );
}
