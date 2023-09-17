import "./globals.css";
import { Lato } from "next/font/google";
import { Layouts } from "@/commons/layouts";
import ThemeProviderContext from "@/context/theme";

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
      <body className={lato.className}>
        <ThemeProviderContext>
          <Layouts>{children}</Layouts>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
