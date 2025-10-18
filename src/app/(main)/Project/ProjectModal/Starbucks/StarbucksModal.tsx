import { TextStrong } from "@/component/TextStrong/TextStrong";
import styles from "./StarbucksModal.module.scss";
import { ProjectModal } from "@/component/ProjectModal/ProjectModal";

interface Starbucks {
  setModal: () => void;
}

export function StarbucksModal({ setModal }: Starbucks) {
  return (
    <ProjectModal closeFn={setModal}>
      <div className={styles.modalInner}>
        <div className={styles.imageInner}>
          <a href="https://startbycks-teaktung.netlify.app/" target="blank" className={styles.linkInner}>
            <span className={styles.linkButton}>바로가기</span>
          </a>
        </div>

        {/* 내용 */}
        <div className={styles.textInner}>
          <p>
            <TextStrong>Vite</TextStrong>를 활용하여 빠른 개발 환경 구축 및 웹 페이지 빌드 테스트를 진행하였습니다.
          </p>
          <p>
            <TextStrong>GSAP 라이브러리</TextStrong>를 사용해 스크롤 애니메이션을 효율적으로 구현하였습니다.
          </p>
          <p>
            <TextStrong>Swiper 라이브러리</TextStrong>를 활용해 캐러셀 기능을 빠르고 직관적으로 구현하였습니다.
          </p>
          <p>CSS 리셋을 적용하여 브라우저 간 스타일 일관성을 유지하였습니다.</p>
        </div>
      </div>
    </ProjectModal>
  );
}
