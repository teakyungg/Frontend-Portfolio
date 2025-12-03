"use client";

import { NotionLink } from "./component/NotionLink/NotionLink";
import styles from "./StudyLog.module.css";

export function StudyLog() {

  // 노션 링크 데이터
  const linkData = [
    {title: "Browser의 동작", link: "https://florentine-soy-ff3.notion.site/Browser-262abb3b12b6805fa812d710f4ca1082?source=copy_link"},
    {title: "Browser의 동작 흐름", link: "https://florentine-soy-ff3.notion.site/Browser-262abb3b12b680d8a1d7c97e660499c8?source=copy_link"},
    {title: "float", link: "https://florentine-soy-ff3.notion.site/float-297abb3b12b680bea5d3fe991fa3d6ec?source=copy_link"},
    {title: "position", link: "https://florentine-soy-ff3.notion.site/position-29babb3b12b6805e8bd2f74165803ffb"},
    {title: "React", link: "https://florentine-soy-ff3.notion.site/React-2a1abb3b12b68016a562f274b8491b89?source=copy_link"},
    {title: "Z-index", link: "https://florentine-soy-ff3.notion.site/z-index-2bbabb3b12b6808eaa40f099a66acd32?pvs=73"},
  ];

  const linkEl = linkData.map(value => <NotionLink key={value.title} title={value.title} link={value.link}/>)

  return (
    <section>
      <div className={styles.studyLogInner}>
        <h2 className={styles.title}>StudyLog</h2>
        <p className={styles.info}>학습 과정과 실험 내용을 정리한 Notion 페이지입니다.</p>
        <div className={styles.studyLogLink}>{linkEl}</div>
      </div>
    </section>
  );
}
