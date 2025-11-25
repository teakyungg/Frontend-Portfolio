"use client";
import Link from "next/link";
import styles from "./Header.module.scss";


export default function Header() {
  const linkName = ["Project", "Skill", "StudyLog", "About"]; // 링크 제목
  const scrollLoction = [800, 1700, 2250, 2750]; // 버튼 클릭 시 스크롤 포지션

  const scrollToCustomPosition = (i: number) => {
    window.scrollTo({
      top: scrollLoction[i],
      behavior: "smooth", // 부드럽게 이동
    });
  };

  const linkEl = linkName.map((i, index) => (
    <li key={i} onClick={() => { scrollToCustomPosition(index);}}>{i}</li>
  ));

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={"/"} className={styles.title}>PORTFOLIO</Link>
        <ul className={styles.list}>{linkEl}</ul>
      </div>
    </header>
  );
}
