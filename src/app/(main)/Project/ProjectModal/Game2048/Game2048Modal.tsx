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
          {/* 사용 기술 */}
          <div className={styles.techStackInner}>
            <span>사용 기술 :</span>
            <ul className={styles.stackList}>
              <li>
                <TextStrong>Prettier</TextStrong>
              </li>
              <li>
                <TextStrong>TypeScript</TextStrong>
              </li>
              <li>
                <TextStrong>Git</TextStrong>
              </li>
              <li>
                <TextStrong>GitHub</TextStrong>
              </li>

              <li>
                <TextStrong>Notion</TextStrong>
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
                    바닐라 자바스크립트 팀 프로젝트에서, 팀원들이 작성한 함수를 사용할 때 매개변수의 타입을 알 수 없어
                    개발 과정에서 어려움이 발생
                  </summary>
                  <p className={styles.solution}>
                    이를 해결하기 위해 TypeScript를 도입하여, 타입 안정성을 확보하고 팀원 간 협업 효율을 높였습니다.
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>프로젝트 초기 회의에서 팀원들의 작업물을 통합하는 위한 버전 관리 필요성을 느낌</summary>
                  <p className={styles.solution}>
                    Git을 활용해 작업 버전을 체계적으로 관리하고, GitHub에 각 팀원의 작업을 백업하여 예기치 못한
                    상황에서도 안정적으로 프로젝트를 유지할 수 있도록 대비했습니다.
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>
                    작업할 때마다 필요한 함수를 그때그때 작성하는 방식으로 개발했으나, 이로 인해 개발 속도가 지나치게
                    느려지는 문제가 발생
                  </summary>
                  <p className={styles.solution}>
                    이를 해결하기 위해 import, export, default를 활용한 모듈화를 적용하여, 필요한 변수와 함수를 언제든지
                    바로 불러올 수 있도록 구조를 개선했습니다.
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>
                    프로젝트를 진행하면서 팀원들의 현재 작업, 아직 완료되지 않은 작업, 우선순위가 높은 작업 등을
                    체계적으로 정리할 필요성을 느낌.
                  </summary>
                  <p className={styles.solution}>
                    Notion을 활용해 작업 우선순위를 정리하고, 매일 회의록을 작성하여 현재 작업 진행도를 확인했습니다.
                    또한 PM이 팀원들에게 남은 작업을 할당함으로써 효율적으로 프로젝트를 진행했습니다.
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
