import { TextStrong } from "@/component/TextStrong/TextStrong";
import styles from "../ModalStyle.module.css";
import { ProjectModal } from "@/component/ProjectModal/ProjectModal";
import { ModalDefaultType } from "../ModalType";

export function PortfolioModal({ setModal, src }: ModalDefaultType) {

  // 사용 기술
  const skills = ['Next.js', 'React', 'TypeScirpt', 'Git', 'GitHub', 'GSAP', 'Swiper','Zustand', '개인 프로젝트'];
  const skillEl = skills.map((skill) => <li key={skill}><TextStrong>{skill}</TextStrong></li>);

  return (
    <ProjectModal closeFn={setModal}>
      <div className={styles.modalInner}>
        {/* 메인 이미지 */}
        <div className={styles.mainImage} style={{ backgroundImage: `url(${src})` }}>
          <a href="https://frontend-portfolio-six-pied.vercel.app/" target="blank">
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
            <span className={styles.title}>프로젝트 개발 중 고민한 부분과 해결 방식</span>

            <ul className={styles.qna}>
              <li>
                <details open>
                  <summary className={styles.question}>현재 프로젝트를 Next.js로 개발하신 이유가 있을까요?</summary>
                  <p className={styles.solution}>
                    {`프로젝트가 장기적으로 운영될 것으로 예상되어, 유지보수성과 확장성을 고려해 React 라이브러리를 사용했습니다. 
                    또한, 일관된 구조와 효율적인 개발 환경을 위해 프레임워크인 Next.js를 선택하여 작업을 진행했습니다.`}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary className={styles.question}>사용자 경험(UX)을 개선하기 위해 시도한 부분이 있나요?</summary>
                  <p
                    className={styles.solution}
                  >{`사용자가 특정 프로젝트나 섹션을 선택한 뒤 다른 화면으로 이동했다가 다시 돌아오는 경우, 이전에 보던 상태를 유지하는 것이 더 자연스러운 경험이라고 판단했습니다.
                     이를 위해 프로젝트 필터 선택값을 sessionStorage에 저장하여 새로고침 또는 재방문 시에도 직전 상태를 복원하도록 했습니다.
                     또한, 연락처 복사가 필요한 구간에는 Clipboard API를 적용해 별도의 드래그나 우클릭 없이 버튼 한 번으로 복사할 수 있도록 함으로써 사용자 조작 단계를 최소화했습니다.`}</p>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectModal>
  );
}
