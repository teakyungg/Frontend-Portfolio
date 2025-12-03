"use client";

import { useRef } from "react";
import styles from "./Mail.module.css";

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
      <div className={styles.mailItem}>
        <a
          className={styles.mailLink}
          style={{backgroundImage: 'url("/mailSend.png")'}}
          href="mailto:rlaxorud8532@gmail.com"
          target="_blank"
        ></a>
        <span className={styles.title}>메일 바로 보내기</span>
      </div>

      <div className={styles.mailItem}>
        <div 
          className={styles.mailLink} 
          ref={mailAddress} 
          onClick={copyAddress}
          style={{backgroundImage: 'url("/mail.png")', backgroundSize: "70%", cursor: "pointer"}}
          ></div>
        <span className={styles.title}>메일 주소 복사하기</span>
      </div>
    </aside>
  );
}
