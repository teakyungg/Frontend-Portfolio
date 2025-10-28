"use client";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderContent />
    </header>
  );
}

function HeaderContent() {
  const linkName = ["Project", "Skill", "StudyLog", "About"];
  const scrollLoction = [800, 1700, 2250, 2750];

  const scrollToCustomPosition = (i: number) => {
    window.scrollTo({
      top: scrollLoction[i],
      behavior: "smooth", // 부드럽게 이동
    });
  };

  const linkEl = linkName.map((i, index) => (
    <li
      key={i}
      onClick={() => {
        scrollToCustomPosition(index);
      }}
    >
      {i}
    </li>
  ));

  return (
    <div className={styles.content}>
      <Link href={"/"} className={styles.title}>
        PORTFOLIO
      </Link>

      <ul className={styles.list}>{linkEl}</ul>
    </div>
  );
}
