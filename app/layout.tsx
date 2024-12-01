import localFont from "next/font/local";
import "./globals.css";
import {Snow} from "../components/Snow";
import style from "../components/Footer/Footer.module.css"
import { Footer } from "../components/Footer/Footer";

const NotoSansJP = localFont({
  src: "./fonts/NotoSansJP-SemiBold.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const NotoserifJP = localFont({
  src: "./fonts/NotoSerifJP-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const Potta = localFont({
  src: "./fonts/PottaOne-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Snow />
        {children}
        <Footer />
        <p className={style.copyRight}>© 2024 <cite translate="no"> こはく kohaku</cite></p>
        </body>
    </html>
  );
}
