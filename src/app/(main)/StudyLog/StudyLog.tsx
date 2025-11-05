"use client";

import { NotionLink } from "@/component/NotionLink/NotionLink";
import styles from "./StudyLog.module.scss";

export function StudyLog() {
  return (
    <section>
      <div className={styles.skills}>
        <h2 className={styles.title}>StudyLog</h2>
        <span className={styles.titleExplanation}>학습 과정과 실험 내용을 정리한 Notion 페이지입니다.</span>

        <div className={styles.NotionLinkBox}>
          {/* Browser의 동작 */}
          <NotionLink
            title="Browser의 동작"
            link="https://florentine-soy-ff3.notion.site/Browser-262abb3b12b6805fa812d710f4ca1082?source=copy_link"
          />

          {/* Browser의 동작 흐름 */}
          <NotionLink
            title="Browser의 동작 흐름"
            link="https://florentine-soy-ff3.notion.site/Browser-262abb3b12b680d8a1d7c97e660499c8?source=copy_link"
          />

          {/* float 속성 정리 페이지 */}
          <NotionLink
            title="float"
            link="https://florentine-soy-ff3.notion.site/float-297abb3b12b680bea5d3fe991fa3d6ec?source=copy_link"
          />

          {/* position 속성 정리 페이지 */}
          <NotionLink
            title="position"
            link="https://florentine-soy-ff3.notion.site/position-29babb3b12b6805e8bd2f74165803ffb"
          />

          {/* React 속성 정리 페이지 */}
          <NotionLink
            title="React"
            link="https://florentine-soy-ff3.notion.site/React-2a1abb3b12b68016a562f274b8491b89?source=copy_link"
          />
        </div>
      </div>
    </section>
  );
}
