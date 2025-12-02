import { TextStrong } from "@/component/TextStrong/TextStrong";
import styles from "./ModalDefaultStyle.module.css";
import { ProjectModal } from "@/component/ProjectModal/ProjectModal";
import { ModalDefaultType } from "../ModalType";

export function Game2048Modal({ setModal, src }: ModalDefaultType) {
  return (
    <ProjectModal closeFn={setModal}>
      <div className={styles.modalInner}>
        {/* 메인 이미지 */}
        <div className={styles.imageInner} style={{ backgroundImage: `url(${src})` }}>
          {/* 노션 링크 */}
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
                  <summary>JavaSctipt를 사용한 프로젝트라면 타입 오류가 있었을 텐데 어떻게 대응하셨나요?</summary>
                  <p className={styles.solution}>
                    {`위 문제를 해결하기 위해 TypeScript를 도입해 타입을 명시적으로 정의했고, 결과적으로 코드 안정성과 협업 효율이 모두 향상되었습니다.`}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>버전 관리 측면에서 어떤 방식을 적용하셨나요?</summary>
                  <p className={styles.solution}>
                    {`팀원별 작업물을 수동으로 병합하던 방식은 충돌 위험이 크고 변경 이력 추적이 어렵다는 문제가 있었습니다. 
                    이에 Git을 활용해 기능 단위 브랜치 전략을 적용하고, GitHub를 백업 저장소로 운영하여 작업 충돌 방지 및 이력 관리 체계를 구축했습니다. 
                    덕분에 예기치 않은 이슈 발생 시에도 복구와 대응이 용이했습니다.`}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>함수 재사용성과 개발 속도 문제는 어떻게 개선하셨나요?</summary>
                  <p className={styles.solution}>
                    {`필요할 때마다 함수를 개별적으로 작성하다 보니 중복 코드가 증가하고 개발 속도가 저하되는 문제가 있었습니다. 
                    이를 해결하기 위해 JavaScript 모듈 시스템(import/export)을 적용해 공통 함수와 변수를 모듈화했으며, 재사용성과 유지보수성이 크게 개선되었습니다.`}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>작업 진행 상황을 체계적으로 관리하기 위해 어떤 도구를 사용하셨나요?</summary>
                  <p className={styles.solution}>
                    {`개발 진행 중 작업 우선순위와 담당자 정보가 명확하지 않아 일정 관리가 비효율적이라는 문제가 있었습니다. 
                      이를 해결하기 위해 Notion을 활용해 작업 현황, 우선순위, 담당자, 회의록을 한 곳에서 관리했고, 
                      PM이 이를 기반으로 남은 작업을 분배하여 프로젝트 진행 흐름이 안정적으로 유지되었습니다.`}
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
