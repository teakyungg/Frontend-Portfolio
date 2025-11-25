import { TextStrong } from "@/component/TextStrong/TextStrong";
import styles from "./ModalDefaultStyle.module.scss";
import { ProjectModal } from "@/component/ProjectModal/ProjectModal";
import Image from "next/image";
import { ModalDefaultType } from "./ModalDefaultType";

export function PortfolioModal({ setModal, src }: ModalDefaultType) {
  return (
    <ProjectModal closeFn={setModal}>
      <div className={styles.modalInner}>
        {/* 메인 이미지 */}
        <div className={styles.imageInner} style={{ backgroundImage: `url(${src})` }}>
          {/* 노션 링크 */}
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
                <TextStrong>GSAP</TextStrong>
              </li>
              <li>
                <TextStrong>Swiper</TextStrong>
              </li>
              <li>
                <TextStrong>개인 프로젝트</TextStrong>
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
                     특히 변수, mixin 문법을 사용하여 코드의 재사용성을 높혔습니다.`}</p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>사용자 경험(UX)을 개선하기 위해 시도한 부분이 있나요?</summary>
                  <p
                    className={styles.solution}
                  >{`사용자가 특정 프로젝트나 섹션을 선택한 뒤 다른 화면으로 이동했다가 다시 돌아오는 경우, 이전에 보던 상태를 유지하는 것이 더 자연스러운 경험이라고 판단했습니다.
                     이를 위해 프로젝트 필터 선택값을 sessionStorage에 저장하여 새로고침 또는 재방문 시에도 직전 상태를 복원하도록 했습니다.
                     또한, 연락처 복사가 필요한 구간에는 Clipboard API를 적용해 별도의 드래그나 우클릭 없이 버튼 한 번으로 복사할 수 있도록 함으로써 사용자 조작 단계를 최소화했습니다.`}</p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>유지보수성과 확장성에 대하여 고려한 부분이 있나요?</summary>
                  <Image
                    src={"/component.png"}
                    width={400}
                    height={300}
                    alt="component example"
                    style={{ padding: "10px 0px" }}
                  />
                  <p
                    className={styles.solution}
                  >{`공통으로 사용하는 컴포넌트는 별도의 디렉터리에서 일괄적으로 관리하였으며, 컴포넌트 단위로 .tsx(구조) / .scss(스타일) 파일을 분리하여 유지보수성을 높였습니다.
                     또한 새로운 기능이 추가되더라도 기존 구조를 변경하지 않고 컴포넌트 추가만으로 확장이 가능하도록 설계했습니다.`}</p>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectModal>
  );
}
