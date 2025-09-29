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
  const linkName = ["Home", "About", "Skills", "Projects", "Contact"];
  const linkEl = linkName.map((i) => <li key={i}>{i}</li>);

  return (
    <div className={styles.content}>
      <Link href={"/"} className={styles.title}>
        PORTFOLIO
      </Link>

      <ul className={styles.list}>{linkEl}</ul>
    </div>
  );
}
