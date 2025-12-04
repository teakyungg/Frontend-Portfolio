import { TextStrong } from "@/component/TextStrong/TextStrong";
import styles from "../ModalStyle.module.css";
import { ProjectModal } from "@/component/ProjectModal/ProjectModal";
import { ModalDefaultType } from "../ModalType";

export function KarlyModal({ setModal, src }: ModalDefaultType) {

   // 사용한 기술
  const skills = ['Vite', 'TailWind CSS', 'Git', 'GitHub', 'Prettier', 'Notion', '팀 프로젝트'];
  const skillEl = skills.map((skill) => <li key={skill}><TextStrong>{skill}</TextStrong></li>);

  return (
    <ProjectModal closeFn={setModal}>
      <div className={styles.modalInner}>
        {/* 메인 이미지 */}
        <div className={styles.mainImage} style={{ backgroundImage: `url(${src})` }}>
          <a href="https://vision-karly.netlify.app/src/item/main" target="blank">
            <span className={styles.linkButton}>바로가기</span>
          </a>
        </div>

        {/* 내용 */}
        <div className={styles.contentInner}>
          {/* 사용 기술 */}
          <div>
            <span>사용 기술 :</span>
            <ul className={styles.stackList}>{skillEl}</ul>
          </div>

          {/* 개발 시 발생한 문제점 및 해결방안*/}
          <div>
            <span className={styles.title}>개발 시 발생한 문제점 및 해결 방안</span>

            <ul className={styles.qna}>
              <li>
                <details open>
                  <summary className={styles.question}>
                    팀 프로젝트에서 스타일 단위가 제각각이 되어 UI 일관성이 떨어질 가능성이 있었는데, 어떻게 해결하셨나요?
                  </summary>
                  <p className={styles.solution}>
                    {`초기 회의 단계에서, 팀원마다 사용하는 px/rem/em 단위 및 여백·폰트 크기 기준이 달라질 경우 UI 전체의 일관성이 무너질 수 있다는 문제를 파악했습니다. 
                      이를 해결하기 위해 Tailwind CSS를 도입하여 스타일 규칙을 프리셋 기반으로 통일했고, 결과적으로 디자인 일관성 확보와 개발 속도 개선 효과를 얻었습니다.`}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary className={styles.question}>작업물을 병합하는 과정에서 발생하는 문제는 어떻게 해결하셨나요?</summary>
                  <p className={styles.solution}>
                    {`수동으로 파일을 공유하고 병합하던 방식은 충돌 위험이 크고 작업 이력 관리가 어렵다는 문제가 있었습니다. 
                    이를 해결하기 위해 Git + GitHub 기반 버전 관리 체계를 구축하여 각자 브랜치에서 작업 후 병합하는 방식으로 협업 구조를 정립했습니다. 
                    또한 GitHub 저장소를 백업 저장소로 두어 예기치 못한 문제 발생 시에도 안정적인 복구가 가능하도록 대비했습니다.`}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary className={styles.question}>GitHub 사용 중, 코드 변경 이력에 불필요한 차이가 발생한 문제는 어떻게 해결하셨나요?</summary>
                  <p className={styles.solution}>
                    {`줄바꿈·들여쓰기 차이 등 사소한 코드 스타일 차이가 변경 이력에 포함되면서 Git conflict가 자주 발생하는 문제가 있었습니다. 
                    이를 해결하기 위해 프로젝트 시작 단계에서 Prettier를 적용해 모든 팀원의 코드 스타일을 통일했고, 그 결과 코드 비교 및 병합 과정이 훨씬 간소화되었습니다.`}
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
