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
          <a href="https://final-11-cutie.vercel.app/" target="blank" className={styles.linkInner}>
            <span className={styles.linkButton}>바로가기</span>
          </a>
        </div>

        {/* 여기 부분 부터 
        
          다 새롭게 적기
        
          
        */}

        {/* 내용 */}
        <div className={styles.textInner}>
          {/* 사용 기술 */}
          <div className={styles.techStackInner}>
            <span>사용 기술 :</span>
            <ul className={styles.stackList}>
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
                <TextStrong>Zustand</TextStrong>
              </li>
            </ul>
          </div>

          {/* 개발 시 발생한 문제점 및 해결방안*/}
          <div className={styles.issueSolutionPairs}>
            <span className={styles.title}>개발 시 발생한 문제점 및 해결 방안</span>

            <ul className={styles.questionInner}>
              <li>
                <details open>
                  <summary>React 단독으로 개발할 경우, SEO 최적화가 제대로 적용되지 않는 문제가 발생</summary>
                  <p className={styles.solution}>
                    이를 해결하기 위해 Next.js를 도입하여 메타 데이터를 작성함으로써 SEO를 최적화하고, 동시에 React의
                    개발 편의성도 유지할 수 있었습니다
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>
                    상품 설명 영역을 구현하는 과정에서, 일반 CSS와 JavaScript만으로 작업할 경우 개발에 과도한 시간이
                    소요될 것으로 예상되는 문제가 발생
                  </summary>
                  <p className={styles.solution}>
                    메인 작업에서 React와 호환되는 라이브러리를 탐색하던 중, React 환경에 최적화된 ReactQuill을 도입하여
                    개발 효율을 높이고 작업 시간을 단축했습니다.
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>
                    React 프로젝트에서 여러 컴포넌트가 공통으로 사용하는 Hook 상태를 매개변수로 전달해야 하는 문제가
                    발생
                  </summary>
                  <p className={styles.solution}>
                    위 문제를 해결하기 위해, 프로젝트 규모가 크지 않다는 점을 고려하여 Zustand를 도입해 React Hook
                    상태를 전역적으로 관리하여 문제를 해결하였습니다.
                  </p>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectModal>
  );
}
