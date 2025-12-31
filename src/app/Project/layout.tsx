"use client";

import { ProjectHeader } from "./Component/ProjectHeader/ProjectHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProjectHeader />
      {children}
    </>
  );
}
