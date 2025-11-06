"use client";

import { useEffect, useState } from "react";
import styles from "./Project.module.scss";
import { projectData } from "./ProjectData";
import ProjectItem from "@/component/ProjectItem/ProjectItem";

export function Project() {
  const [nowProjectTitle, setNowProjectTitle] = useState(""); /* 현재 프로젝트 카테고리 */
  const [modal, setModal] = useState(Array(projectData.length).fill(false)); /* project 항목 */

  const titleText = ["All", "Next.js", "React", "Sub"]; /* 프로젝트 카테고리에 들어갈 항목 */

  /* 프로젝트 카테고리 클릭 시 저장함수 */
  const categroyClick = (item: string) => {
    setNowProjectTitle(item);
    sessionStorage.setItem("categroyType", item);
  };

  /* 모달창 열기/닫힘 함수 */
  const clickModal = (index: number) => {
    setModal((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  /* 프로젝트 카테고리 컴포넌트 */
  const titleEl = titleText.map((item) => (
    <li
      key={item}
      onClick={() => {
        categroyClick(item);
      }}
    >
      <span className={styles.projectTitleText}>{item}</span>
      <div className={nowProjectTitle === item ? styles.nowProjectTitle : styles.defaultProjectTitle}></div>
    </li>
  ));

  /* 프로젝트 데이터를 참고해서 컴포넌트들을 가져옴 */
  const projectList = projectData.map((data, index) => (
    <ProjectItem
      key={data.key}
      src={data.src}
      alt={data.alt}
      title={data.title}
      titleColor={data.titleColor}
      titleFontFamily={data.titleFontFamily}
      data-category={data.dataCategory}
      modal={modal[index]}
      setModal={() => clickModal(index)}
    >
      <data.ModalComponent setModal={() => clickModal(index)} src={data.src} />
    </ProjectItem>
  ));

  /* 가져온 컴포넌트의 data-category를 탐색해서 현재 카테고리에 맞는 컴포넌트만 추출  */
  const projectItemEl = projectList.filter((item) => item.props["data-category"].includes(nowProjectTitle));

  useEffect(() => {
    let lastcategroy = sessionStorage.getItem("categroyType");
    if (!lastcategroy) lastcategroy = "All";
    setNowProjectTitle(lastcategroy);
  }, []);

  return (
    <section>
      <div className={styles.project}>
        {/* 프로젝트 */}
        <h1 className={styles.title}>Project</h1>

        <div>
          {/* 프로젝트 카테고리 */}
          <ul className={styles.projectTitle}>{titleEl}</ul>

          {/* 프로젝트 항목 */}
          <ul className={styles.projectList}>{projectItemEl}</ul>
        </div>
      </div>
    </section>
  );
}
