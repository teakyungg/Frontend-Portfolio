import { TextStrong } from "@/component/TextStrong/TextStrong";
import styles from "./PortfolioModal.module.scss";
import { ProjectModal } from "@/component/ProjectModal/ProjectModal";

interface PortfolioModal {
  setModal: () => void;
}

/* 이거 모달 공통된 부분 공용 컴포넌트로 분리하기 */

export function PortfolioModal({ setModal }: PortfolioModal) {
  return (
    <ProjectModal closeFn={setModal}>
      <div className={styles.modalInner}>
        {/* 메인 이미지 */}
        <div className={styles.imageInner}>
          <a href="https://frontend-portfolio-six-pied.vercel.app/" target="blank" className={styles.linkInner}>
            <span className={styles.linkButton}>바로가기</span>
          </a>
        </div>

        {/* 내용 */}
        <div className={styles.textInner}>
          {/* 사용 기술 */}
          <div className={styles.techStackInner}>
            <span>사용 기술 :</span>
            <ul className={styles.stackList}>
              <li>
                <TextStrong>SCSS</TextStrong>
              </li>
              <li>
                <TextStrong>Prettier</TextStrong>
              </li>
              <li>
                <TextStrong>TypeScirpt</TextStrong>
              </li>
              <li>
                <TextStrong>React</TextStrong>
              </li>
              <li>
                <TextStrong>Next.js</TextStrong>
              </li>
              <li>
                <TextStrong>개인 프로젝트</TextStrong>
              </li>
            </ul>
          </div>

          {/* 개발 시 발생한 문제점 및 해결방안*/}
          <div className={styles.issueSolutionPairs}>
            <span className={styles.title}>개발 시 발생한 문제점 및 해결 방안</span>

            <ul className={styles.questionInner}>
              <li>
                <details open>
                  <summary>현재 프로젝트를 Next.js로 개발하신 이유가 있을까요?</summary>
                  <p className={styles.solution}>
                    {`프로젝트가 장기적으로 운영될 것으로 예상되어, 유지보수성과 확장성을 고려해 React 라이브러리를 사용했습니다. 
                    또한, 일관된 구조와 효율적인 개발 환경을 위해 프레임워크인 Next.js를 선택하여 작업을 진행했습니다.`}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>CSS의 구조는 어떤 방식으로 작성하였고, 그렇게 작성하신 이유가 있나요?</summary>
                  <p
                    className={styles.solution}
                  >{`반복되는 스타일이 많아 유지보수성과 재사용성을 높이기 위해 SCSS를 사용했습니다.
                     이를 통해 스타일을 보다 구조적이고 효율적으로 관리할 수 있었습니다.`}</p>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectModal>
  );
}
