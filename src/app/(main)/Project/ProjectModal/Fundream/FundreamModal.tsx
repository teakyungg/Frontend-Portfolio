import { TextStrong } from "@/component/TextStrong/TextStrong";
import styles from "./FundreamModal.module.scss";
import { ProjectModal } from "@/component/ProjectModal/ProjectModal";

interface FundreamModal {
  setModal: () => void;
}

/* 이거 모달 공통된 부분 공용 컴포넌트로 분리하기 */

export function FundreamModal({ setModal }: FundreamModal) {
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
          <p>펀드림</p>
        </div>
      </div>
    </ProjectModal>
  );
}
