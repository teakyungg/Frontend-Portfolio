import React, { useEffect } from "react";
import styles from "./ProjectItem.module.scss";
import Image from "next/image";

interface ProjectItem {
  /** 모달창 안에 들어갈 내용 */ children?: React.ReactNode;
  /** 현재 모달 클릭 상태 */ openModal?: boolean;
  /** 프로젝트 아이템 메인 이미지 주소 */ imageSrc: string;
  /** 프로젝트 아이템 메인 이미지 설명 */ imageAlt: string;
  /** 프로젝트 아이템에 들어갈 제목 */ projectTitle: string;
  /** 프로젝트 아이템 제목 색깔 */ titleTextColor?: string;
  /** 프로젝트 아이템 제목 폰트 */ titleFontFamily: string;
  /** 모달창 닫는 함수 */ setModal?: () => void;
}

// 프로젝트 리스트의 기본 양식
export default function ProjectItem({
  children,
  imageSrc,
  imageAlt,
  projectTitle,
  titleTextColor = "black",
  titleFontFamily,
  openModal,
  setModal,
}: ProjectItem) {
  /* 모달창 클릭 시 스크롤 제어 */
  useEffect(() => {
    // 모달이 열렸다면
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openModal]);

  return (
    <li>
      <figure className={styles.projectItem} onClick={setModal}>
        <Image className={styles.image} src={imageSrc} alt={imageAlt} width={350} height={100} />
        <figcaption className={styles.title} style={{ color: titleTextColor, fontFamily: titleFontFamily }}>
          {projectTitle}
        </figcaption>
      </figure>
      {openModal ? children : null}
    </li>
  );
}
