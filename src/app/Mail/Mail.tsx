"use client";

import { useRef } from "react";
import styles from "./Mail.module.scss";

/* 메일 클립 보드에 복사하는 기능 넣기 */

export function Mail() {
  const mailAddress = useRef<null | HTMLDivElement>(null);

  const copyAddress = async () => {
    if (mailAddress.current) {
      try {
        await navigator.clipboard.writeText("rlaxorud8532@gmail.com");
        alert("클립 보드에 복사되었습니다!");
      } catch {
        alert("복사에 실패하였습니다. 다시 시도해 주세요");
      }
    }
  };

  return (
    <aside className={styles.mailInner}>
      {/* 메일 바로 보내기 */}
      <div className={styles.list}>
        <a
          className={`${styles.mailLink} ${styles.mailLinkImage}`}
          href="mailto:rlaxorud8532@gmail.com"
          target="_blank"
        ></a>
        <span className={styles.title}>메일 바로 보내기</span>
      </div>

      {/* 메일 클립 보드 복사하기 */}
      <div className={styles.list}>
        <div className={`${styles.mailLink} ${styles.mailImage}`} ref={mailAddress} onClick={copyAddress}></div>
        <span className={styles.title}>메일 주소 복사하기</span>
      </div>
    </aside>
  );
}
