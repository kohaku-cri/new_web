import localFont from "next/font/local";
import "./globals.css";
import style from "@/components/Footer/Footer.module.css";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import nextConfig from "../next.config";
import GoatCounterTracker from "@/components/GoatCounterTracker";
const BASE_PATH = nextConfig.basePath || "";

const NotoSansJP = localFont({
  src: "./fonts/NotoSansJP-SemiBold.ttf",
  variable: "--NotoSansJP",
  display: "swap",
});
const Potta = localFont({
  src: "./fonts/PottaOne-Regular.ttf",
  variable: "--Potta",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${NotoSansJP.className} ${Potta.className}`}>
      <head>
        <link rel="icon" href={`${BASE_PATH}/img/favicon.svg`} />
        {/* <script
          data-goatcounter="https://kohaku-cri.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script> */}
        <GoatCounterTracker />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <p className={style.copyRight}>
          © 2024–2025 <cite translate="no"> こはく kohaku</cite>
        </p>
      </body>
    </html>
  );
}
