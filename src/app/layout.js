import "./globals.css";
import { Lato } from "next/font/google";
import { Layouts } from "@/commons/layouts";
import ThemeProviderContext from "@/context/theme";
import NextTopLoader from "nextjs-toploader";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Welcome to my personal web",
  description: "Inspired by codebayu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </head>
      <body className={lato.className}>
        <NextTopLoader
          color="#4b95de"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <ThemeProviderContext>
          <Layouts>{children}</Layouts>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
