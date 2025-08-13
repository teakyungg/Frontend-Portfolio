import './globals.css';
import Header from '@/component/Header';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'portfolio',
  description: 'Next.js frontend portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className='bg-background text-basecolor'>
        <Header/>
        {children}
      </body>
    </html>
  );
}
