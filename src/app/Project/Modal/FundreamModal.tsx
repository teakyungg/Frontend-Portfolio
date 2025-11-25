import { TextStrong } from "@/component/TextStrong/TextStrong";
import styles from "./ModalDefaultStyle.module.scss";
import { ProjectModal } from "@/component/ProjectModal/ProjectModal";
import { ModalDefaultType } from "./ModalDefaultType";

export function FundreamModal({ setModal, src }: ModalDefaultType) {
  return (
    <ProjectModal closeFn={setModal}>
      <div className={styles.modalInner}>
        {/* 메인 이미지 */}
        <div className={styles.imageInner} style={{ backgroundImage: `url(${src})` }}>
          {/* 노션 링크 */}
          <a href="https://final-11-cutie.vercel.app/" target="blank" className={styles.linkInner}>
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
              <li>
                <TextStrong>팀 프로젝트</TextStrong>
              </li>
            </ul>
          </div>

          {/* 개발 시 발생한 문제점 및 해결방안*/}
          <div className={styles.issueSolutionPairs}>
            <span className={styles.title}>프로젝트 개발 중 고민한 부분과 해결 방식</span>

            <ul className={styles.questionInner}>
              <li>
                <details open>
                  <summary>현재 프로젝트를 Next.js로 개발하신 이유가 있을까요?</summary>
                  <p className={styles.solution}>
                    {`현재 프로젝트는 쇼핑몰 웹사이트 구축을 목표로 하고 있으며,
                      제품 노출과 트래픽 확보를 위해 검색 엔진 최적화(SEO)가 중요한 핵심 요구사항이었습니다.

                     일반적인 React SPA(Client-Side Rendering) 방식은 초기 로딩 시 HTML이 비어 있는 상태로 전달되기 때문에, SEO부분에서 불리합니다.
                     그렇기에 SSR(Server-Side Rendering)를 사용하는 Next.js를 이용하여 SEO에 최적화된 프로젝트를 만들기로 결정하였습니다.
                      `}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>
                    현재 프로젝트에서 가장 개발 시간이 많이 소요된 부분은 무엇이며, 어떤 방식으로 해결하셨나요?
                  </summary>
                  <p className={styles.solution}>
                    {`프로젝트에서 가장 개발 시간이 오래 걸린 부분은 상품 등록 시 사용하는 에디터 기능 구현이었습니다.
                      단순한 텍스트 입력만이 아니라, 글꼴 변경 / 이미지 삽입 / 서식 편집 등 다양한 리치 텍스트 기능을 제공해야 했기 때문입니다.

                      처음에는 해당 기능을 직접 구현하려고 시도했지만,
                      텍스트 입력 기능과 이미지 삽입 기능을 포함한 WYSIWYG 에디터를 단기간 내에 완성하는 것은 현실적으로 어렵다고 판단했습니다.

                      그 과정에서 대체 방안을 검토하던 중, ReactQuill이라는 라이브러리를 발견해 적용하게 되었고
                      이를 통해 제한된 기간 안에 요구 기능을 구현할 수 있었습니다.

                      다만 이후에 확인해보니 ReactQuill은 업데이트가 중단된 라이브러리였고,
                      이번 프로젝트에서는 문제없이 사용했지만,
                      향후에는 라이브러리 선택 시 유지관리 상태와 문서 지원 여부를 더 꼼꼼히 확인해야 한다는 점을 배웠습니다.
                      `}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>프로젝트에서 상태 관리 라이브러리로 Zustand를 사용하신 이유가 무엇인가요?</summary>
                  <p className={styles.solution}>
                    {`프로젝트 규모가 크지 않아 복잡한 상태관리 라이브러리가 필요하지 않았고, 간결한 API로 전역 상태를 관리할 수 있는 Zustand가 가장 적합하다고 판단해 도입했습니다.`}
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
