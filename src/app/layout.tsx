import "./globals.css";
import Header from "@/component/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "portfolio",
  description: "Next.js frontend portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Style = "bg-background text-basecolor";

  return (
    <html lang="ko">
      <body className={Style}>
        <Header />
        {children}
      </body>
    </html>
  );
}
