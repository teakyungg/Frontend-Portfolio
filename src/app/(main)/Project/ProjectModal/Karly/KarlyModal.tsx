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
          {/* 사용 기술 */}
          <div className={styles.techStackInner}>
            <span>사용 기술 :</span>
            <ul className={styles.stackList}>
              <li>
                <TextStrong>TailWind CSS</TextStrong>
              </li>
              <li>
                <TextStrong>Prettier</TextStrong>
              </li>
              <li>
                <TextStrong>Vite</TextStrong>
              </li>
              <li>
                <TextStrong>Git</TextStrong>
              </li>
              <li>
                <TextStrong>GitHub</TextStrong>
              </li>
              <li>
                <TextStrong>팀 프로젝트</TextStrong>
              </li>
            </ul>
          </div>

          {/* 개발 시 발생한 문제점 및 해결방안*/}
          <div className={styles.issueSolutionPairs}>
            <span className={styles.title}>개발 시 발생한 문제점 및 해결 방안</span>

            <ul className={styles.questionInner}>
              <li>
                <details open>
                  <summary>
                    프로젝트 초기 회의에서, 팀 프로젝트 진행 시 스타일 단위와 크기가 제각각일 경우 일관성 저하 및 개발
                    효율 저하 문제를 발견
                  </summary>
                  <p className={styles.solution}>
                    해결 방안으로 Tailwind CSS를 도입하여, 사전에 정의된 스타일 크기와 단위를 사용함으로써 UI 일관성을
                    확보하고 개발 시간을 단축했습니다.
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>프로젝트 초기 회의에서 팀원들의 작업물을 통합하는 과정에서 문제가 발생</summary>
                  <p className={styles.solution}>
                    Git을 활용해 작업 버전을 체계적으로 관리하고, GitHub에 각 팀원의 작업을 백업하여 예기치 못한
                    상황에서도 안정적으로 프로젝트를 유지할 수 있도록 대비했습니다
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>
                    GitHub를 활용한 버전 관리는 유용했으나, 사소한 줄바꿈에도 내용 변경으로 인식되어 버전 관리 과정에서
                    문제가 발생했습니다.
                  </summary>
                  <p className={styles.solution}>
                    Prettier를 활용해 프로젝트 시작 전 팀원들의 코드 줄바꿈을 통일하여, 버전 관리 과정을 보다 수월하게
                    진행했습니다.
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
