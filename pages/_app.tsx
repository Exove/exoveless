import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import "styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Dark mode is turned off for this example
    <ThemeProvider enableSystem={false} attribute="class">
      <div className={`${montserrat.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
