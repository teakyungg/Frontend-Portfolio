import { TextStrong } from "@/component/TextStrong/TextStrong";
import styles from "./ModalDefaultStyle.module.css";
import { ProjectModal } from "@/component/ProjectModal/ProjectModal";
import { ModalDefaultType } from "../ModalType";

export function StarbucksModal({ setModal, src }: ModalDefaultType) {
  return (
    <ProjectModal closeFn={setModal}>
      <div className={styles.modalInner}>
        {/* 메인 이미지 */}
        <div className={styles.imageInner} style={{ backgroundImage: `url(${src})` }}>
          {/* 노션 링크 */}
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
                  <summary>캐러셀을 직접 구현하지 않고 Swiper를 도입하신 이유가 있나요?</summary>
                  <p className={styles.solution}>
                    {`초기에 바닐라 자바스크립트로 캐러셀을 구현했으나, 터치 제스처·무한 루프·접근성·반응형 등 필수 기능을 안정적으로 모두 커버하기 어렵고 
                    개발·테스트 비용이 과도하다고 판단했습니다. 

                    따라서 검증된 라이브러리인 Swiper를 도입해 핵심 화면 품질을 빠르게 확보하고, 커스터마이징 범위 내에서 요구 기능을 안정적으로 구현했습니다. 
                    그 결과 구현 기간을 단축하고 회귀 버그를 줄였습니다.`}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>스크롤 위치에 따라 인터랙션을 제어할 때 어떤 접근을 하셨나요?</summary>
                  <p className={styles.solution}>
                    {`정밀한 트리거 제어와 성능을 위해 GSAP + ScrollTrigger를 도입했습니다. 
                    단순 스크롤 값 계산보다 선언적으로 기준점과 애니메이션을 정의할 수 있어 유지보수성이 높아졌고, 스크롤 진행도에 맞춘 자연스러운 전환 효과를 구현했습니다.`}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>
                    백그라운드 탭에서 캐러셀이 계속 동작해 리소스를 소모하던 문제는 어떻게 해결하셨나요?
                  </summary>
                  <p className={styles.solution}>
                    {`document.visibilitychange 이벤트로 탭 상태를 감지하여, 비활성화 시 swiper.autoplay.stop(), 활성화 시 start()를 호출하도록 구성했습니다. 
                   불필요한 연산이 줄어 모바일 배터리 효율과 브라우저 자원 사용률이 개선되었습니다.`}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>접근성과 시멘틱 측면에서는 어떤 조치를 하셨나요?</summary>
                  <p className={styles.solution}>
                    {`이미지·비주얼 중심 페이지 특성상 보조기기 사용성을 고려해 시멘틱 마크업과 alt, aria-label, sr-only 등을 적용했습니다. 
                   Landmark 구조를 명확히 하고 인터랙티브 요소의 포커스 이동을 점검하여 스크린리더 호환성과 SEO 신뢰도를 동시에 높였습니다.`}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary>다양한 해상도에서 배경 영상과 레이아웃 비율이 틀어지는 문제는 어떻게 대응하셨나요?</summary>
                  <p className={styles.solution}>
                    <span>
                      {`aspect-ratio, object-fit, 미디어 쿼리를 조합해 컨테이너 기준의 반응형 레이아웃을 설계했습니다. 
                      해상도 변화에도 영상·이미지 비율을 유지하고, 크롭·왜곡을 최소화해 시각적 일관성을 확보했습니다.`}
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
