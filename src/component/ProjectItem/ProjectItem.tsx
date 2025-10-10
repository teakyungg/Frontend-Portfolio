import Link from "next/link";
import styles from "./ProjectItem.module.scss";
import Image from "next/image";

interface ProjectItem {
  src: string;
  alt: string;
  title: string;
  link: string;
  titleColor?: string;
  titleFontFamily: string;
}

export default function ProjectItem({ src, alt, title, titleColor = "black", titleFontFamily, link }: ProjectItem) {
  return (
    <li>
      <Link href={link}>
        <figure className={styles.projectItem}>
          <Image className={styles.image} src={src} alt={alt} width={350} height={100} />
          <figcaption className={styles.title} style={{ color: titleColor, fontFamily: titleFontFamily }}>
            {title}
          </figcaption>
        </figure>
      </Link>
    </li>
  );
}
