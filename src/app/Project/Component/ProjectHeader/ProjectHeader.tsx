"use client";

import style from "./ProjectHeader.module.css";
import { useRouter } from "next/navigation";

export function ProjectHeader() {
  const router = useRouter();

  return (
    <div className={style.projectHeader}>
      <div className={style.backButton} onClick={() => router.back()}>
        ← Back
      </div>
    </div>
  );
}
