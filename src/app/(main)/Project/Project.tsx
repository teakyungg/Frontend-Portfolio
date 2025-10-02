"use client";

import { useEffect, useState } from "react";
import styles from "./Project.module.scss";
import ProjectItem from "@/component/ProjectItem/ProjectItem";

export function Project() {
  const [nowProjectTitle, setNowProjectTitle] = useState("");

  /* 이거 프로젝트 컴포넌트 font-family 정하기 */

  function categroyClick(item: string) {
    setNowProjectTitle(item);
    sessionStorage.setItem("categroyType", item);
  }

  /* project list title */
  const titleText = ["All", "Next.js", "React", "Sub"];
  const titleEl = titleText.map((item) => (
    <li
      key={item}
      className={nowProjectTitle === item ? styles.nowProjectTitle : ""}
      onClick={() => {
        categroyClick(item);
      }}
    >
      {item}
    </li>
  ));

  /* project list */
  const projectList = [
    /* karly */
    <ProjectItem
      key="karly item"
      src="/karly.png"
      alt="karly image"
      title="karly"
      link="karly"
      titleColor="purple"
      titleFontFamily=""
      data-categroy={["All", "Sub"]}
    />,

    /* 2048 */
    <ProjectItem
      key="2048 item"
      src="/game_2048.png"
      alt="2048 image"
      title="2048"
      link="2048"
      titleColor="rgb(44, 62, 80)"
      titleFontFamily=""
      data-categroy={["All", "Sub"]}
    />,

    /* starbuck */
    <ProjectItem
      key="starbuck item"
      src="/starbucks.png"
      alt="starbucks image"
      title="starbucks"
      link="starbucks"
      titleColor="green"
      titleFontFamily=""
      data-categroy={["All", "Sub"]}
    />,

    /* fundream */
    <ProjectItem
      key="fundream item"
      src="/fundream.png"
      alt="fundream image"
      title="fundream"
      link="fundream"
      titleColor="rgb(9, 31, 176)"
      titleFontFamily=""
      data-categroy={["All", "Next.js"]}
    />,

    /* portfolio */
    <ProjectItem
      key="portfolio item"
      src="/portfolio.png"
      alt="portfolio image"
      title="portfolio"
      link="protfolio"
      titleColor="black"
      titleFontFamily=""
      data-categroy={["All", "Next.js"]}
    />,
  ];

  /* project list item 추출 */
  const projectItem = projectList.filter((item) => item.props["data-categroy"].includes(nowProjectTitle));

  useEffect(() => {
    let lastcategroy = sessionStorage.getItem("categroyType");
    if (!lastcategroy) lastcategroy = "All";
    setNowProjectTitle(lastcategroy);
  }, []);

  return (
    <div className={styles.project}>
      {/* project */}
      <h2 className={styles.title}>Project</h2>

      <div>
        {/* project list title */}
        <ul className={styles.projectTitle}>{titleEl}</ul>

        {/* project list */}
        <ul className={styles.projectList}>{projectItem}</ul>
      </div>
    </div>
  );
}
