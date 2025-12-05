import { TextStrong } from "@/component/Highlight/Highlight";
import styles from "../ModalStyle.module.css";
import { ProjectModal } from "@/component/ProjectModal/ProjectModal";
import { ModalDefaultType } from "../ModalType";

export function WonLabModal({ setModal, src }: ModalDefaultType) {

  // 사용 기술
  const skills = ['Git', 'GitHub', 'Packery', '개인 프로젝트'];
  const skillEl = skills.map((skill) => <li key={skill}><TextStrong>{skill}</TextStrong></li>);

  return (
    <ProjectModal closeFn={setModal}>
      <div className={styles.modalInner}>
        {/* 메인 이미지 */}
        <div className={styles.mainImage} style={{ backgroundImage: `url(${src})` }}>
          <a href="https://teakyungg.github.io/web-1-03-scss/" target="blank">
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
                  <summary className={styles.question}>SCSS 설계를 어떤 기준으로 구조화하셨나요?</summary>
                  <p className={styles.solution}>
                    {`초기에는 섹션마다 필요한 스타일을 바로 작성했지만, 색상·여백·폰트 크기 같은 값들이 여기저기 흩어져 유지보수에 불리하다고 판단했습니다.
                      그래서 *.vars.scss 파일에 섹션별 설정을 Sass map으로 정의하고, 실제 스타일 파일에서 map.get으로 꺼내 쓰는 방식으로 구조를 바꿨습니다. 
                      그 결과, 디자인 값 수정 시 맵만 고치면 여러 구역이 한 번에 반영되어 일관성과 수정 비용을 동시에 줄일 수 있었습니다.`}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary className={styles.question}>헤더·푸터처럼 공통 컴포넌트 스타일은 어떻게 재사용 가능하게 구현하셨나요?</summary>
                  <p className={styles.solution}>
                    {`헤더와 푸터는 모든 페이지에서 반복되기 때문에, header.vars.scss / footer.vars.scss에 구조를 맵으로 정의하고, 
                      @forward와 @use를 통해 각 페이지 SCSS에서 공통 컴포넌트를 불러오는 방식으로 구성했습니다.
                      이렇게 분리하니 HTML은 그대로 두고도 SCSS 레벨에서만 공통 스타일을 관리할 수 있어, 페이지 추가·수정 시에도 공통 레이아웃을 안전하게 재사용할 수 있었습니다.`}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary className={styles.question}>절대 위치(absolute)로 배치되는 요소들의 스타일 중복은 어떻게 줄이셨나요?</summary>
                  <p className={styles.solution}>
                    {`제목, 보조 텍스트, 주소 같은 요소들은 top/right/bottom/left 값이 각각 달라 반복 코드를 많이 만들어내는 문제가 있었습니다.
                      이를 해결하기 위해, 각 요소의 위치 정보를 맵 안에 abs-pos: (top: …, left: …) 형태로 넣고, 
                      SCSS에서 @each 루프로 순회하면서 #{$key}: $value를 한 번에 뿌리는 패턴을 사용했습니다. 
                      덕분에 absolute 위치 속성은 맵에서만 관리하게 되어, 나중에 좌표를 조정할 때도 SCSS 코드를 거의 건드리지 않고 수정할 수 있었습니다.`}
                  </p>
                </details>
              </li>

              <li>
                <details open>
                  <summary className={styles.question}>고정 헤더(header: fixed) 때문에 본문 콘텐츠가 가려지는 문제는 어떻게 해결하셨나요?</summary>
                  <p className={styles.solution}>
                    {`헤더를 position: fixed로 올려두다 보니, 스크롤 최상단에서 본문 첫 섹션이 헤더 뒤에 가려지는 문제가 생겼습니다.
                      갤러리 페이지 SCSS에서는 header.vars에 정의된 inner.height 값을 가져와 .gallery 섹션에 padding-top으로 적용하는 식으로, 헤더 높이에 연동되는 상단 여백을 주었습니다. 
                      그 결과, 헤더 디자인이 바뀌어 높이가 달려도 콘텐츠가 가려지지 않고, 레이아웃을 하드코딩 숫자에 덜 의존하게 됐습니다.`}
                  </p>
                </details>
              </li>

               <li>
                <details open>
                  <summary className={styles.question}>코드를 직접 보거나 정리한 부분을 볼 수 있을까요?</summary>
                  <p className={styles.solution}>
                    <a href="https://florentine-soy-ff3.notion.site/WON-LAB-2b2abb3b12b680dbb8d8d788b9570459?pvs=74" target="_blank">자세한 코드를 보고 싶다면 현재 글을 클릭해주세요 <TextStrong>(노션 링크)</TextStrong></a> 
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
