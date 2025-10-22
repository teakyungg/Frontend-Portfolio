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
                    프로모션 영역을 토글할 때마다 페이지 전체의 높이가 바뀌면서 ScrollTrigger 애니메이션이 깨지거나,
                    화면이 UI가 망가지는 문제가 발생
                  </summary>
                  <p className={styles.solution}>
                    <span>
                      ScrollTrigger 인스턴스를 섹션별로 배열에 저장하고, 레이아웃 변경 시 refresh()를 호출하여
                      애니메이션 기준점을 재계산하도록 했습니다.
                    </span>
                    <span>또한 transition 시간이 끝난 뒤 DOM 높이를 재조정하도록 setTimeout을 추가했습니다.</span>
                    <span>
                      그 결과 레이아웃 변화에도 애니메이션이 정상적으로 작동하여 시각적 안정성과 페이지 전환 부드러움이
                      개선되었습니다.
                    </span>
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>
                    탭이 백그라운드 상태에서도 Swiper 캐러셀이 계속 동작해 CPU 점유율과 배터리 소모가 불필요하게
                    증가하는 문제 발생
                  </summary>
                  <p className={styles.solution}>
                    <span>
                      document.visibilitychange 이벤트를 활용해, 탭이 비활성화되면 swiper.autoplay.stop()을, 다시
                      활성화되면 start()를 호출하도록 구현했습니다.
                    </span>
                    <span>
                      불필요한 연산이 줄어 모바일 배터리 효율이 향상되고, 브라우저 리소스 점유율이 감소해 체감 성능이
                      개선되었습니다.
                    </span>
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>
                    스타벅스 사이트 특성상 이미지와 시각적 콘텐츠가 많아 시멘틱 구조와 접근성이 부족할 경우, 시각
                    장애인이나 스크린리더 사용자의 접근이 어려운 문제 발생
                  </summary>
                  <p className={styles.solution}>
                    <span>sr-only, alt, aria-label 등을 사용해 시멘틱한 구조와 접근성 보조 요소를 추가했습니다.</span>
                    <span>
                      스크린리더 지원이 강화되어 접근성 점수가 향상되었고, 웹 표준 및 SEO 관점에서도 긍정적인 효과를
                      얻었습니다.
                    </span>
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>다양한 해상도에서 영상 배경과 레이아웃이 비율을 잃거나 잘리는 문제 발생</summary>
                  <p className={styles.solution}>
                    <span>
                      CSS aspect-ratio, object-fit, @media 쿼리를 사용해 해상도별 비율을 자동 보정하고, 컨테이너
                      기반으로 반응형 구조를 설계했습니다.
                    </span>
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
