"use client";

import { NotionLink } from "./component/NotionLink/NotionLink";
import styles from "./StudyLog.module.css";

export function StudyLog() {
  // 노션 링크 데이터
  const linkData = [
    {
      title: "Browser의 동작",
      link: "https://florentine-soy-ff3.notion.site/Browser-262abb3b12b6805fa812d710f4ca1082?source=copy_link",
    },
    {
      title: "Browser의 동작 흐름",
      link: "https://florentine-soy-ff3.notion.site/Browser-262abb3b12b680d8a1d7c97e660499c8?source=copy_link",
    },
    {
      title: "float",
      link: "https://florentine-soy-ff3.notion.site/float-297abb3b12b680bea5d3fe991fa3d6ec?source=copy_link",
    },
    { title: "position", link: "https://florentine-soy-ff3.notion.site/position-29babb3b12b6805e8bd2f74165803ffb" },
    {
      title: "z-index",
      link: "https://florentine-soy-ff3.notion.site/z-index-2bbabb3b12b6808eaa40f099a66acd32?pvs=73",
    },
    { title: "box-sizing", link: "https://florentine-soy-ff3.notion.site/box-sizing-2beabb3b12b6800fa2cfd1225d682023" },
    {
      title: "display",
      link: "https://florentine-soy-ff3.notion.site/display-2bfabb3b12b680a3ad3ee4d8dbfb82d0#2bfabb3b12b680d38819d0f1352c5df2",
    },
    {
      title: "Pseudo selectors",
      link: "https://florentine-soy-ff3.notion.site/pseudo-class-pseudo-element-2c2abb3b12b68011961ce80240287678?source=copy_link",
    },
    { title: "this", link: "https://florentine-soy-ff3.notion.site/this-2d1abb3b12b680e48e77e10bfc5b8083" },
    {
      title: "React",
      link: "https://florentine-soy-ff3.notion.site/React-2a1abb3b12b68016a562f274b8491b89?source=copy_link",
    },
  ];

  const linkEl = linkData.map((value) => <NotionLink key={value.title} title={value.title} link={value.link} />);

  return (
    <section className={styles.studyLog} id="StudyLog">
      <div className={styles.studyLogInner}>
        <h2 className={styles.title}>StudyLog</h2>
        <p className={styles.info}>
          <span>학습 과정과 실험 내용을 정리한</span> <span>Notion 페이지입니다.</span>
        </p>
        <div className={styles.studyLogLink}>{linkEl}</div>
      </div>
    </section>
  );
}
