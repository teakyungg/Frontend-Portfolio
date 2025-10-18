import { TextStrong } from "@/component/TextStrong/TextStrong";
import styles from "./KarlyModal.module.scss";
import { ProjectModal } from "@/component/ProjectModal/ProjectModal";

interface KarlyModal {
  setModal: () => void;
}

export function KarlyModal({ setModal }: KarlyModal) {
  return (
    <ProjectModal closeFn={setModal}>
      <div className={styles.modalInner}>
        {/* karly 이미지 */}
        <div className={styles.imageInner}>
          <a href="https://vision-karly.netlify.app/src/item/main" target="blank" className={styles.linkInner}>
            <span className={styles.linkButton}>바로가기</span>
          </a>
        </div>

        {/* 내용 */}
        <div className={styles.textInner}>
          <p>
            팀 프로젝트에서 <TextStrong>Git과</TextStrong>과 <TextStrong>GitHub</TextStrong>를 활용해 버전 관리 및
            협업을 체계적으로 진행하였습니다.
          </p>
          <p>
            <TextStrong>Tailwind CSS</TextStrong>를 사용하여 일관된 디자인과 효율적인 스타일링을 구현했습니다.
          </p>
          <p>각 UI 요소를 컴포넌트 단위로 분리하여 유지보수성과 재사용성을 높였습니다.</p>
          <p>
            <TextStrong>Vite</TextStrong>를 통해 빠른 개발 환경 구성과 빌드 속도 향상을 달성했습니다.
          </p>
          <p className={styles.notion}>
            <span>
              <TextStrong>Notion</TextStrong>을 활용하여 작업 진행 상황과 기술 문서를 체계적으로 정리했습니다.
            </span>
            <a href="https://www.notion.so/7-1b573873401a805fadd0cc885aa819d7" target="blank" className={styles.link}>
              👉 노션 바로가기
            </a>
          </p>
        </div>
      </div>
    </ProjectModal>
  );
}
