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
          {/* 사용 기술 */}
          <div className={styles.techStackInner}>
            <span>사용 기술 :</span>
            <ul className={styles.stackList}>
              <li>
                <TextStrong>Git</TextStrong>
              </li>
              <li>
                <TextStrong>GitHub</TextStrong>
              </li>

              <li>
                <TextStrong>Swiper</TextStrong>
              </li>

              <li>
                <TextStrong>GSAP</TextStrong>
              </li>

              <li>
                <TextStrong>Vite</TextStrong>
              </li>

              <li>
                <TextStrong>Prettier</TextStrong>
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
                    프로젝트 개발 중 캐러셀(Carousel)을 구현해야 하는 상황에서, 직접 자바스크립트로 제작하려다 개발에
                    과도한 시간이 소요되는 문제가 발생
                  </summary>
                  <p className={styles.solution}>
                    직접 캐러셀을 구현할 경우 개발 효율이 떨어진다고 판단하여, 검증된 라이브러리인 Swiper를
                    도입했습니다. 이를 통해 불필요한 구현 시간을 줄였습니다.
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>
                    일정 스크롤 위치에서 이벤트를 발생시켜야 하는 부분에서, 바닐라 자바스크립트로 구현할 경우 개발에
                    많은 시간이 소요되고 스크롤 값을 일일이 지정해야 하는 비효율적인 문제가 발생
                  </summary>
                  <p className={styles.solution}>
                    <span>
                      이를 해결하기 위해 정밀한 스크롤 제어와 부드러운 애니메이션 성능을 제공하는 GSAP 라이브러리를
                      도입했습니다.
                    </span>
                    <span>
                      그 결과, 원하는 요소에 맞게 자연스럽게 동작하는 스크롤 이벤트를 효율적으로 구성할 수 있었습니다.
                    </span>
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>
                    작업을 진행하면서 코드의 안정적인 유지보수를 위해 체계적인 버전 관리의 필요성을 느낌
                  </summary>
                  <p className={styles.solution}>
                    Git을 통해 체계적으로 버전을 관리하고, GitHub에 원격 백업을 수행함으로써 코드 손실 위험을 최소화하고
                    안정적인 개발 환경을 유지했습니다.
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
