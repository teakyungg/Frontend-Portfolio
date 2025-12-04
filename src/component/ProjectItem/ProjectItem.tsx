import styles from "./ProjectItem.module.css";
import Image from "next/image";
import Link from "next/link";

interface ProjectItem {
  /** 프로젝트 아이템 메인 이미지 주소 */ imageSrc: string;
  /** 프로젝트 아이템 메인 이미지 설명 */ imageAlt: string;
  /** 프로젝트 아이템에 들어갈 제목 */ projectTitle: string;
  /** 프로젝트 아이템 제목 색깔 */ titleTextColor?: string;
  /** 프로젝트 아이템 제목 폰트 */ titleFontFamily: string;
}

// 프로젝트 리스트의 기본 양식
export default function ProjectItem({
  imageSrc,
  imageAlt,
  projectTitle,
  titleTextColor = "black",
  titleFontFamily,
}: ProjectItem) {

  return (
    <li>
      <Link href={projectTitle} className={styles.projectItem}>
        <Image src={imageSrc} alt={imageAlt} width={235} height={134} />
        <p className={styles.title} style={{ color: titleTextColor, fontFamily: titleFontFamily }}>
          {projectTitle}
        </p>
      </Link>
    </li>
  );
}
