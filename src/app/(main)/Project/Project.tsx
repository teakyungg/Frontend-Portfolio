"use client";

import { useEffect, useState } from "react";
import styles from "./Project.module.scss";
import ProjectData from "./ProjectData";

export function Project() {
  const [nowProjectTitle, setNowProjectTitle] = useState("");

  function categroyClick(item: string) {
    setNowProjectTitle(item);
    sessionStorage.setItem("categroyType", item);
  }

  /* project list title */
  const titleText = ["All", "Next.js", "React", "Sub"];
  const titleEl = titleText.map((item) => (
    <li
      key={item}
      // 이거 border-bottom을 조정하는걸 말고 따로 하나 만들어서 조정을 해야할거 같은데
      // className={nowProjectTitle === item ? styles.nowProjectTitle : styles.defaultProjectTitle}
      onClick={() => {
        categroyClick(item);
      }}
    >
      {item}
      <div className={nowProjectTitle === item ? styles.nowProjectTitle : styles.defaultProjectTitle}></div>
    </li>
  ));

  /* project list */
  const projectList = ProjectData();

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
      <h1 className={styles.title}>Project</h1>

      <div>
        {/* project list title */}
        <ul className={styles.projectTitle}>{titleEl}</ul>

        {/* project list */}
        <ul className={styles.projectList}>{projectItem}</ul>
      </div>
    </div>
  );
}
