"use client";

import { useEffect, useState } from "react";
import styles from "./ProjectList/Project.module.css";
import { projectList } from "./ProjectList/ProjectList";
import ProjectItem from "@/component/ProjectItem/ProjectItem";

export function Project() {
  const [selectedCategory, setSelectedCategory] = useState(""); /* 현재 클릭된 프로젝트 카테고리 */

  /* 마지막으로 클릭한 카테고리 저장 */
  const clickCategory = (item: string) => {
    setSelectedCategory(item);
    sessionStorage.setItem("categroyType", item);
  };

  /* 프로젝트 카테고리 컴포넌트 */
  const titleText = ["All", "Team", "Personal"]; /* 프로젝트 카테고리에 들어갈 항목 */
  const titleEl = titleText.map((item) => (
    <li
      key={item}
      onClick={() => {
        clickCategory(item);
      }}
      className={styles.projectTitle}
    >
      <span>{item}</span>
      <div className={selectedCategory === item ? styles.nowProjectTitle : styles.defaultProjectTitle}></div>
    </li>
  ));

  // 현재 카테고리에 맞는 데이터만 분리
  const filteredProjects = projectList.filter((category) => category.dataCategory.includes(selectedCategory));
  const projectItems = filteredProjects.map((data) => (
    <ProjectItem
      key={data.title}
      imageSrc={data.src}
      imageAlt={data.alt}
      projectTitle={data.title}
      titleTextColor={data.titleColor}
      titleFontFamily={data.titleFontFamily}
    />
  ));

  useEffect(() => {
    // 마지막으로 클릭한 카테고리 불러오기
    let lastcategroy = sessionStorage.getItem("categroyType");
    if (!lastcategroy) lastcategroy = "All";
    setSelectedCategory(lastcategroy);
  }, []);

  return (
    <section id="Project">
      <div className={styles.project}>
        {/* 프로젝트 */}
        <h1 className={styles.title}>Project</h1>

        {/* 프로젝트 카테고리 */}
        <ul className={styles.projectCategory}>{titleEl}</ul>

        {/* 프로젝트 항목 */}
        <ul className={styles.projectList}>{projectItems}</ul>
      </div>
    </section>
  );
}
