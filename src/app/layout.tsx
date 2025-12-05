import "./globals.css";
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
 
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
