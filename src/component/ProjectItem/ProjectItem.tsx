import React, { useEffect } from "react";
import styles from "./ProjectItem.module.scss";
import Image from "next/image";

interface ProjectItem {
  children?: React.ReactNode;
  src: string;
  alt: string;
  title: string;
  titleColor?: string;
  titleFontFamily: string;
  modal?: boolean;
  setModal?: () => void;
}

export default function ProjectItem({
  children,
  src,
  alt,
  title,
  titleColor = "black",
  titleFontFamily,
  modal,
  setModal,
}: ProjectItem) {
  /* 모달창 클릭 시 스크롤 제어 */
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modal]);

  return (
    <li>
      <figure className={styles.projectItem} onClick={setModal}>
        <Image className={styles.image} src={src} alt={alt} width={350} height={100} />
        <figcaption className={styles.title} style={{ color: titleColor, fontFamily: titleFontFamily }}>
          {title}
        </figcaption>
      </figure>
      {modal ? children : null}
    </li>
  );
}
