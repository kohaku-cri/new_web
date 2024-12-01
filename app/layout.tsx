import localFont from "next/font/local";
import "./globals.css";

const NotoSansJPBold = localFont({
  src: "./fonts/NotoSansJP-SemiBold.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const NotoSansJPReg = localFont({
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
        {children}
      </body>
    </html>
  );
}
