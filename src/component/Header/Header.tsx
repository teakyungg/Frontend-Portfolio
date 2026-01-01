"use client";
import Link from "next/link";
import styles from "./Header.module.css";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const linkName = ["Project", "Skill", "StudyLog", "About"]; // 링크 제목

  const scrollToTarget = (id: string) => {
    const headerEl = document.querySelector("header"); // 또는 너의 헤더 클래스 선택자
    const headerH = headerEl ? headerEl.getBoundingClientRect().height : 0;

    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: `#${id}`, offsetY: headerH, autoKill: true },
      ease: "power2.out",
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={"/"} className={styles.title}>
          PORTFOLIO
        </Link>
        <ul className={styles.list}>
          {linkName.map((i) => (
            <li
              key={i}
              onClick={() => {
                scrollToTarget(i);
              }}
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
