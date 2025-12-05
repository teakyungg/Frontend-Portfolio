"use client";

import style from './layout.module.css';
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();
 
  return (
   <>
   <div className={style.projectHeader} >
    <div className={style.backButton} onClick={() => router.back()}>← Back</div>
   </div>
   {children}
   </>
  );
}
