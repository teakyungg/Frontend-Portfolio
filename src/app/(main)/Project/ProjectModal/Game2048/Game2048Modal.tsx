import { TextStrong } from "@/component/TextStrong/TextStrong";
import styles from "./Game2048Modal.module.scss";
import { ProjectModal } from "@/component/ProjectModal/ProjectModal";

interface Game2048 {
  setModal: () => void;
}

export function Game2048Modal({ setModal }: Game2048) {
  return (
    <ProjectModal closeFn={setModal}>
      <div className={styles.modalInner}>
        {/* 이미지 */}
        <div className={styles.imageInner}>
          <a href="https://3lines-2048.netlify.app/" target="blank" className={styles.linkInner}>
            <span className={styles.linkButton}>바로가기</span>
          </a>
        </div>

        {/* 내용 */}
        <div className={styles.textInner}>
          <p>
            팀 프로젝트를 진행하며 <TextStrong>Git</TextStrong>과 <TextStrong>GitHub</TextStrong>를 활용해 체계적인 버전
            관리와 협업을 수행하였습니다.
          </p>
          <p>
            <TextStrong>TypeScript</TextStrong>를 도입하여 코드의 안정성과 유지보수성을 높이고, 타입 오류를 사전에
            방지하였습니다.
          </p>
          <p>바닐라 JavaScript로 주요 기능을 구현하며 언어에 대한 이해도와 실무 감각을 향상시켰습니다.</p>
          <p className={styles.notion}>
            <span>
              <TextStrong>Notion</TextStrong>을 활용해 작업 진행 상황을 공유하고 문서화하여 효율적인 커뮤니케이션을
              유지하였습니다.
            </span>
            <a href="https://www.notion.so/1ed73873401a80d2b800c9fabd692937" target="blank" className={styles.link}>
              👉 노션 바로가기
            </a>
          </p>
        </div>
      </div>
    </ProjectModal>
  );
}
