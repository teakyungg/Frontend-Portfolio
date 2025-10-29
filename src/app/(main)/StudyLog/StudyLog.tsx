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
        </div>
      </div>
    </section>
  );
}
