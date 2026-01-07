import style from "../page.module.css";
import { ProjectPreviewCard } from "../../Component/ProjectPreviewCard/ProjectPreviewCard";
import { ProjectCard } from "../../Component/ProjectCard/ProjectCard";
import { ProjectSkill } from "../../Component/ProjectSkill/ProjectSkill";
import { ProjectDescCard } from "../../Component/ProjectDesc/ProjectDescCard";

export default function Starbucks() {
  // 제작 기술
  const skillData = [
    "Vite",
    "Vanilla JavaScript",
    "CSS(중첩/Nesting, 반응형)",
    "GSAP + ScrollTrigger(스크롤 애니메이션)",
    "Swiper(슬라이더)",
    "웹 접근성(sR-only/label/alt 등)",
    "SEO(사이트 소유 확인 메타)",
    "Git",
    "GitHub",
    "개인 프로젝트",
  ];

  // 초기 설계
  const basicDesignData = [
    {
      title: `마크업 구조(시맨틱) 우선 설계`,
      content: `클론 프로젝트라도 “처음 보는 사람이 구조를 이해할 수 있는 HTML”이 중요하다고 판단했습니다.
                그래서 header/nav/section 단위로 콘텐츠를 구획하고, 화면에는 보이지 않지만 문서 구조를 설명하는 sr-only 제목(h1/h2/h3)과 label/alt를 함께 배치하는 방향으로 설계했습니다.`,
    },
    {
      title: `UI를 “섹션 단위”로 분리하는 구조 결정`,
      content: `한 페이지 안에 섹션이 많아지면 유지보수가 어려워지기 때문에, 섹션별로 CSS/JS 파일을 분리하고(예: event, notice, season-menu 등), Vite의 import.meta.glob을 이용해 섹션 스크립트를 자동 로드하는 구조로 결정했습니다.`,
    },
    {
      title: `사용자 경험 기준(움직임/전환) 설계`,
      content: `이 프로젝트는 섹션별로 슬라이더, 스크롤 등장, 프로모션 접기·펼치기처럼 화면이 동적으로 변하는 구간이 많았습니다. 그래서 구현 전에 “어떤 구간에서 화면이 바뀌는지”를 먼저 정의하고, 애니메이션(보여주기)과 레이아웃(높이 변화/스크롤 기준)이 충돌하지 않도록 구현 순서를 설계했습니다.`,
    },
  ];

  // 구현 도구 선택
  const toolData = [
    {
      title: `Vite 선택 근거`,
      content: `이미지 리소스가 많고(배너/아이콘/패턴 등), 개발 중 미세한 CSS/JS 수정이 반복되는 프로젝트 특성상 빠른 개발 서버(HMR)와 빌드 속도가 필요했습니다. Vite를 기반으로 개발/빌드 흐름을 단순화하고, 정적 자산을 번들 환경에서 안정적으로 다루는 것을 목표로 했습니다.`,
    },
    {
      title: `정적 페이지에서도 “모듈화”를 선택한 이유`,
      content: `한 파일에 모든 CSS/JS가 쌓이면 수정이 느려지고 실수가 늘어납니다. 그래서 섹션 단위로 파일을 나눠 변경 범위를 좁히고, 기능 단위로 개선/디버깅하기 쉬운 구조를 유지했습니다.`,
    },
  ];

  // 라이브러리/구현 방식 선택
  const libraryChoiceData = [
    {
      title: `Swiper 선택 근거(슬라이더 UI)`,
      content: `공지 영역(세로 롤링)과 이벤트/어워즈 영역(가로 슬라이드)처럼 서로 다른 형태의 슬라이더 UI가 동시에 필요했습니다.

                직접 구현할 경우 autoplay(자동 재생), navigation(이전/다음 버튼), pagination(페이지 표시), 터치/드래그, 반응형 분기까지 모두 별도로 처리해야 해 구현·테스트 비용이 커진다고 판단했습니다. 
                
                따라서 위 기능을 옵션 조합으로 안정적으로 제공하는 Swiper를 적용해, 요구 UI를 빠르게 재현하고 유지보수 비용을 줄였습니다.`,
    },

    {
      title: `GSAP + ScrollTrigger 선택 근거(스크롤 등장 애니메이션)`,
      content: `스크롤 위치에 따라 요소를 “등장/퇴장”시키는 UX가 핵심이었기 때문에, 스크롤 기준(start)과 재생/역재생(toggleActions)을 명확하게 제어할 수 있는 ScrollTrigger를 사용했습니다.`,
    },
    {
      title: `섹션 스크립트 자동 로드(import.meta.glob)`,
      content: `섹션이 늘어날 때마다 import를 수동으로 추가하면 누락이 발생하기 쉽습니다. 그래서 section 폴더 하위의 JS/CSS를 glob으로 자동 로드해 “파일 추가 = 자동 반영” 구조로 유지보수성을 높였습니다.`,
    },
  ];

  // 이슈 1) 프로모션 토글 이후 스크롤 기준(트리거) 불일치
  const promotionTriggerIssueData = [
    {
      title: `[문제]`,
      content: `프로모션 영역을 접기/펼치기 하면 페이지 높이가 바뀌는데, 이 상태에서 스크롤 등장 애니메이션(ScrollTrigger)의 기준이 갱신되지 않아 애니메이션이 너무 빨리/늦게 실행되는 문제가 발생했습니다.`,
    },
    {
      title: `[해결]`,
      content: `각 섹션에서 생성한 ScrollTrigger를 배열로 관리한 뒤, 프로모션 토글로 인해 레이아웃 변경이 완료되는 시점에 triggers.refresh()를 한 번에 호출해 모든 스크롤 기준을 다시 계산하도록 처리했습니다.`,
    },

    {
      title: `[결과]`,
      content: `프로모션 접기/펼치기 이후에도 스크롤 애니메이션이 의도한 구간에서 정상 동작했고, 레이아웃 변화로 인한 UX 불안정(타이밍 어긋남)이 해소되었습니다.`,
    },
  ];

  // 이슈 2) 탭 비활성화 상태에서도 autoplay가 계속 동작
  const autoplayPerfIssueData = [
    {
      title: `[문제]`,
      content: `공지 영역 슬라이더가 autoplay로 동작하는데, 사용자가 다른 탭으로 이동해 화면이 보이지 않는 상태에서도 autoplay가 계속 실행되어 불필요한 리소스 사용이 발생할 수 있었습니다.`,
    },
    {
      title: `[해결]`,
      content: `document.visibilitychange 이벤트를 활용해, 탭이 hidden 상태일 때는 autoplay.stop(), 다시 visible이 되면 autoplay.start()로 제어했습니다.`,
    },
    {
      title: `[결과]`,
      content: `보이지 않는 상태에서의 불필요한 동작을 줄여, 사용자 환경에 따라 발생할 수 있는 성능 낭비를 예방했습니다.`,
    },
  ];

  // 이슈 3) 정적 자산 경로 오타로 이미지 로드 실패
  const assetPathIssueData = [
    {
      title: `[문제]`,
      content: `정적 이미지 경로에 공백이 포함되는 등 사소한 오타 때문에 특정 이미지가 로드되지 않는 문제가 발생했습니다. 정적 페이지에서는 이런 문제도 “화면 완성도”를 크게 떨어뜨린다고 판단했습니다.`,
    },
    {
      title: `[해결]`,
      content: `문제가 발생한 img src 경로를 실제 파일 경로 기준으로 재점검하고, 공백/오타를 제거해 올바른 경로로 수정했습니다.`,
    },
    {
      title: `[결과]`,
      content: `이미지 누락이 해소되어 섹션 UI가 의도한 형태로 정상 렌더링되었고, 배포 환경에서도 동일하게 동작하는 것을 확인했습니다.`,
    },
  ];

  // 이슈 4) 이벤트 슬라이더 네비게이션 hover 시 화살표 색상 미반영
  const eventArrowIssueData = [
    {
      title: `[문제]`,
      content: `이벤트 슬라이더에서 “버튼 영역에 hover” 했을 때 배경은 바뀌지만, 내부 화살표(svg)의 색상이 기대대로 바뀌지 않아 시각적 피드백이 약했습니다.`,
    },
    {
      title: `[해결]`,
      content: `버튼 hover 상태에서 내부 화살표(.arrow)의 fill을 함께 변경하도록 CSS를 “버튼:hover 내부 요소” 구조로 수정해, hover 적용 범위를 명확히 했습니다.`,
    },
    {
      title: `[결과]`,
      content: `버튼 hover 시 배경/아이콘 색상이 함께 변하면서 사용자가 “눌러도 되는 요소”임을 더 명확히 인지할 수 있게 개선되었습니다.`,
    },
  ];

  // 이슈 5) 유튜브 섹션 반응형에서 영상 크롭/정렬 문제
  const youtubeResponsiveIssueData = [
    {
      title: `[문제]`,
      content: `유튜브 배경 영상 영역은 화면 비율에 따라 위아래가 과도하게 잘리거나, 반대로 빈 공간이 생기는 문제가 발생했습니다.`,
    },
    {
      title: `[해결]`,
      content: `데스크톱 구간에서는 영상을 absolute로 배치해 top 값을 조정하여 안정적으로 크롭되도록 하고, 특정 폭 이하에서는 top을 0으로 되돌려 작은 화면에서도 영상이 자연스럽게 보이도록 반응형 분기를 추가했습니다.`,
    },
    {
      title: `[결과]`,
      content: `화면 크기에 따라 영상의 위치/크롭이 안정화되어, 섹션의 시각적 완성도가 개선되었습니다.`,
    },
  ];

  return (
    <div className={style.project}>
      {/* 메인 이미지, 바로가기 링크 */}
      {/* bgURL은 포트폴리오 public 경로에 맞게 교체 */}
      <ProjectPreviewCard bgURL="/starbucks.png" projectLink="https://startbycks-teaktung.netlify.app/" />

      <div className={style.projectDesc}>
        {/* 프로젝트 제목, 깃허브 링크 */}
        <ProjectCard
          title="STARBUCKS"
          gitHubLink="https://github.com/teakyungg/Starbucks"
          projectDesc={`스타벅스 코리아 메인 페이지를 클론한 프로젝트로, 실제 서비스 중인 웹 페이지의 구조와 인터랙션을 최대한 유사하게 구현하는 것을 목표로 제작했습니다.`}
        />

        {/* 프로젝트 스킬 */}
        <ProjectSkill skillData={skillData} />

        <ProjectDescCard>
          <div className={style.descTitle}>초기 설계</div>
          <div className={style.descContent}>
            <p>- 시맨틱 마크업 + sr-only 구조로 “문서 의미”가 보이도록 설계했습니다.</p>
            <p>- 섹션별 CSS/JS를 분리하고 자동 로드 구조로 유지보수성을 확보했습니다.</p>
          </div>

          {basicDesignData.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>구현 도구 선택: Vite</div>
          <div>
            <p>- 리소스가 많은 정적 페이지에서 빠른 개발/빌드 흐름이 필요해 Vite를 선택했습니다.</p>
          </div>

          {toolData.map((value, index) => (
            <details key={`toolData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>라이브러리/구현 방식 선택: Swiper · GSAP</div>
          <div>
            <p>- 슬라이더 UI는 Swiper로, 스크롤 기반 등장 애니메이션은 GSAP/ScrollTrigger로 구현했습니다.</p>
            <p>- 섹션 단위 모듈 자동 로드로( import.meta.glob ) 추가/수정 비용을 줄였습니다.</p>
          </div>

          {libraryChoiceData.map((value, index) => (
            <details key={`libraryChoiceData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>1차 구현 결과</div>
          <p>{`스타벅스 메인 페이지의 핵심 인터랙션(공지 롤링, 이벤트/어워즈 슬라이더, 스크롤 등장 애니메이션, 프로모션 접기·펼치기, 상단 이동 버튼)을 구현해 기본 동작을 완성했습니다.

               다만 실제 사용자 동작(탭 전환/레이아웃 변화/더미 링크 클릭) 상황에서 UX와 안정성에 영향을 주는 문제들을 확인했습니다.`}</p>

          <div style={{ padding: "20px 0" }}>
            <p>[발견된 문제]</p>
            <ul>
              <li>- 프로모션 토글 이후 스크롤 애니메이션 기준(트리거) 불일치</li>
              <li>- 탭 비활성화 상태에서도 슬라이더 autoplay 동작</li>
              <li>- 정적 자산 경로 오타로 이미지 로드 실패</li>
              <li>- 이벤트 슬라이더 네비게이션 hover 피드백 부족</li>
              <li>- 유튜브 섹션 반응형에서 영상 크롭/정렬 이슈</li>
            </ul>
          </div>
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle} style={{ paddingBottom: "10px" }}>
            프로모션 토글 이후 스크롤 애니메이션 기준 불일치 개선
          </div>
          {promotionTriggerIssueData.map((value, index) => (
            <details key={`promotionTriggerIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>탭 비활성화 상태 autoplay 동작 개선</div>
          {autoplayPerfIssueData.map((value, index) => (
            <details key={`autoplayPerfIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>정적 자산 경로 오타로 인한 이미지 누락 해결</div>
          {assetPathIssueData.map((value, index) => (
            <details key={`assetPathIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>이벤트 슬라이더 네비게이션 hover 피드백 개선</div>
          {eventArrowIssueData.map((value, index) => (
            <details key={`eventArrowIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>유튜브 섹션 반응형 영상 크롭/정렬 개선</div>
          {youtubeResponsiveIssueData.map((value, index) => (
            <details key={`youtubeResponsiveIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>2차 구현 결과</div>
          <div>
            {`동적 UI(프로모션 토글)로 인해 발생한 스크롤 애니메이션 기준 문제를 해결하고, 탭 비활성화 상태에서는 불필요한 autoplay 동작을 제어해 성능 낭비를 줄였습니다.
            
              또한 정적 자산 경로 오류와 hover 피드백, 반응형 이슈를 함께 개선해, 사용자가 처음 접했을 때 완성도가 낮아 보일 수 있는 지점을 안정화하며 웹 페이지를 성공적으로 완성했습니다.`}
          </div>
        </ProjectDescCard>
      </div>
    </div>
  );
}
