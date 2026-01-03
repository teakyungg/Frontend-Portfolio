import style from "../page.module.css";
import { ProjectPreviewCard } from "../../Component/ProjectPreviewCard/ProjectPreviewCard";
import { ProjectCard } from "../../Component/ProjectCard/ProjectCard";
import { ProjectSkill } from "../../Component/ProjectSkill/ProjectSkill";
import { ProjectDescCard } from "../../Component/ProjectDesc/ProjectDescCard";

export default function WonLab() {
  // 제작 기술
  const skillData = [
    "HTML(시맨틱 구조)",
    "SCSS(Sass 모듈: @use)",
    "Sass Map + @each(데이터 기반 스타일링)",
    "Mixin(inner/abs-pos/flex-center)",
    "Vanilla JS(DOMContentLoaded)",
    "Packery(Masonry Layout)",
    "imagesLoaded(이미지 로딩 감지)",
    "Git",
    "GitHub",
    "반응형",
    "개인 프로젝트",
  ];

  // 초기 설계
  const basicDesignData = [
    {
      title: `스타일 관리 방식 결정`,
      content: `페이지가 커질수록 색상/폰트/크기 같은 “디자인 기준값”이 흩어지면 유지보수가 어려워진다고 판단했습니다. 그래서 색상·폰트 크기·굵기 등을 SCSS 변수/Map으로 먼저 정의하고, 필요한 곳에서 map-get으로 꺼내 쓰는 방식으로 설계했습니다.`,
    },
    {
      title: `공통 레이아웃 패턴 분리`,
      content: `header/footer/recent-news처럼 “가운데 정렬(inner)”이나 “absolute 배치”, “flex 정렬”이 반복되는 구조였습니다. 반복 코드를 그대로 복사하지 않기 위해 inner/abs-pos/flex-center 믹스인을 먼저 만들고, 각 섹션에서는 믹스인을 호출하는 방식으로 구현 방향을 잡았습니다.`,
    },
    {
      title: `갤러리 페이지 UX 설계`,
      content: `갤러리는 이미지 크기가 제각각인 구조라 단순 grid만으로는 원하는 배치(벽돌형 배치)를 만들기 어렵다고 판단했습니다. 따라서 Masonry Layout 라이브러리(Packery)를 사용하되, “이미지가 다 로드된 뒤에” 배치를 계산해야 화면이 안정적이라고 보고 로딩 타이밍 제어까지 포함해 설계했습니다.`,
    },
    {
      title: `고정 헤더로 인한 겹침 방지`,
      content: `header를 fixed로 두면 콘텐츠가 헤더 아래로 숨을 수 있기 때문에, header 높이를 변수로 관리하고(예: header-height), hero/gallery 영역에 padding-top으로 동일한 값을 적용하는 구조로 설계했습니다.`,
    },
  ];

  // 구현 도구 선택
  const toolData = [
    {
      title: `SCSS 선택 근거`,
      content: `스타일이 “섹션 단위로 반복”되는 프로젝트에서는 중복을 줄이는 구조가 중요하다고 판단했습니다. SCSS를 사용해 변수(Map)로 디자인 기준값을 관리하고, 믹스인으로 공통 레이아웃 패턴을 재사용해 유지보수 비용을 줄이는 것을 목표로 했습니다.`,
    },
    {
      title: `Map 기반 설계(디자인 토큰화)`,
      content: `font-size/font-weight/color를 Map으로 묶어두면, 값이 바뀌어도 한 곳에서 관리할 수 있습니다. 또한 ‘정해진 키(sm/md/lg 등)’로만 값을 꺼내 쓰게 되어 스타일 사용이 일관되게 유지된다고 판단했습니다.`,
    },
  ];

  // 라이브러리/구현 방식 선택
  const libraryChoiceData = [
    {
      title: `Packery 선택 근거(Masonry Layout)`,
      content: `갤러리 이미지는 크기가 제각각이기 때문에, 단순 정렬만으로는 Pinterest 같은 벽돌형 배치가 어렵습니다. Packery는 요소 크기에 맞춰 자동으로 배치해주기 때문에, 원하는 갤러리 레이아웃을 빠르게 구현할 수 있다고 판단했습니다.`,
    },
    {
      title: `imagesLoaded 선택 근거(로딩 타이밍 제어)`,
      content: `이미지 로딩 전에 레이아웃을 계산하면 실제 이미지 크기 반영이 늦어 배치가 틀어질 수 있습니다. 그래서 imagesLoaded로 “모든 이미지 로딩 완료” 시점을 잡고, 그 이후에 Packery를 실행하도록 구성했습니다.`,
    },
    {
      title: `Sass Map + @each로 캡션 스타일링`,
      content: `갤러리의 figcaption은 위치/색/폰트가 각각 달라 같은 코드를 반복하기 쉬운 구조였습니다. 그래서 캡션별 옵션을 Map에 모아두고 @each로 순회하며 스타일을 생성하는 방식으로 중복을 줄였습니다.`,
    },
  ];

  // 이슈 1) 공통 레이아웃 코드 중복(Inner/정렬/배치)
  const layoutDupIssueData = [
    {
      title: `[문제]`,
      content: `header/footer/섹션마다 “가운데 정렬 컨테이너”, “absolute 배치”, “flex 정렬” 코드가 반복되는 구간을 발견하였습니다.`,
    },
    {
      title: `[해결]`,
      content: `반복되는 레이아웃 패턴을 재사용하기 위해 inner/abs-pos/flex-center 믹스인을 정의하고,공통 코드를 함수처럼 호출하는 구조로 변경했습니다.

            특히 abs-pos 믹스인은 (top/right/bottom/left) 값을 Map으로 받아 @each로 처리함으로써, 필요한 방향 값만 전달해도 유연하게 위치를 지정할 수 있도록 설계했습니다.`,
    },

    {
      title: `[결과]`,
      content: `레이아웃 관련 코드가 한 곳에 모이면서 중복이 줄었고, 컨테이너 폭/정렬 방식이 바뀌어도 믹스인만 수정하면 전체가 일관되게 반영되도록 개선되었습니다.`,
    },
  ];

  // 이슈 2) 갤러리 캡션 스타일 반복
  const captionDupIssueData = [
    {
      title: `[문제]`,
      content: `figcaption마다 위치/색/폰트 크기가 달라 개별 클래스를 하나씩 작성하다 보면 유사 코드가 계속 늘어나면서 유지보수에 어려움이 있었습니다.`,
    },
    {
      title: `[해결]`,
      content: `캡션별 스타일을 “Map 데이터”로 정의한 뒤, @each로 순회하면서 클래스(.merry-christmas, .frozen 등)를 자동 생성하도록 구성했습니다. 위치(pos)와 기타 옵션(option)을 분리해, 필요한 값만 적용되도록 조건문(@if)도 함께 사용했습니다.`,
    },
    {
      title: `[결과]`,
      content: `캡션이 추가/변경되더라도 Map 데이터만 수정하면 되어 수정 범위가 줄었고, 스타일 규칙이 데이터 형태로 정리되면서 구조 파악이 쉬워졌습니다.`,
    },
  ];

  // 이슈 3) 이미지 로딩 전 Masonry 배치 계산으로 인한 레이아웃 불안정
  const masonryTimingIssueData = [
    {
      title: `[문제]`,
      content: `이미지 크기가 로딩 전에는 확정되지 않기 때문에, 로딩 전에 Packery 레이아웃을 계산하면 배치가 어긋나거나 화면이 흔들리는 문제가 발생했습니다.`,
    },
    {
      title: `[해결]`,
      content: `DOMContentLoaded 이후 imagesLoaded로 “갤러리 내 이미지 로딩 완료”를 먼저 확인한 뒤, 그 시점에 Packery를 실행하도록 순서를 고정했습니다.

              즉, “로딩 완료 → 레이아웃 계산” 흐름으로 레이아웃 안정성을 확보했습니다.`,
    },
    {
      title: `[결과]`,
      content: `갤러리 진입 시 배치가 더 안정적으로 유지되었고, 이미지 로딩 과정에서 발생할 수 있는 레이아웃 흔들림(시각적 불안정)이 줄었습니다.`,
    },
  ];

  // 이슈 4) fixed header로 인한 콘텐츠 가림
  const fixedHeaderIssueData = [
    {
      title: `[문제]`,
      content: `header를 fixed로 배치하면, 페이지 상단 콘텐츠가 헤더 아래로 숨는 현상이 발생할 수 있었습니다.`,
    },
    {
      title: `[해결]`,
      content: `header 높이를 변수로 관리하고(header-height), hero-image와 gallery 영역에 동일한 값의 padding-top을 적용해 콘텐츠가 가려지지 않도록 처리했습니다.`,
    },
    {
      title: `[결과]`,
      content: `헤더 고정 UI를 유지하면서도 콘텐츠가 겹치지 않도록 레이아웃이 안정화되었습니다.`,
    },
  ];

  return (
    <div className={style.project}>
      {/* 메인 이미지, 바로가기 링크 */}
      <ProjectPreviewCard bgURL="/wonlab.png" projectLink="https://teakyungg.github.io/WonLab/" />

      <div className={style.projectDesc}>
        {/* 프로젝트 제목, 깃허브 링크 */}
        <ProjectCard
          title="WON LAB"
          gitHubLink="https://github.com/teakyungg/web-1-03-scss"
          projectDesc={`SCSS(Sass) 구조화 연습을 목적으로, 메인/갤러리 페이지를 제작한 정적 웹 프로젝트입니다.
                        (핵심: 디자인 토큰(Map) + 믹스인 기반 공통화 / Packery + imagesLoaded로 Masonry 갤러리 배치 안정화)`}
        />

        {/* 프로젝트 스킬 */}
        <ProjectSkill skillData={skillData} />

        <ProjectDescCard>
          <div className={style.descTitle}>초기 설계</div>
          <div className={style.descContent}>
            <p>- 색상·타이포 같은 기준값을 Map으로 관리해 스타일 사용을 일관되게 유지했습니다.</p>
            <p>- 공통 레이아웃 패턴을 믹스인으로 분리해 중복을 줄이고 유지보수성을 확보했습니다.</p>
          </div>

          {basicDesignData.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>구현 도구 선택: SCSS</div>
          <div>
            <p>- 반복되는 스타일을 “데이터(Map) + 재사용 코드(믹스인)”로 구조화하는 것을 목표로 했습니다.</p>
          </div>

          {toolData.map((value, index) => (
            <details key={`toolData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>라이브러리/구현 방식 선택: Packery · imagesLoaded · Sass Map</div>
          <div>
            <p>- 갤러리 배치는 Packery로, 배치 타이밍은 imagesLoaded로 제어했습니다.</p>
            <p>- figcaption 스타일은 Sass Map + @each로 “데이터 기반 스타일링”을 적용했습니다.</p>
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
          <p>{`index(메인)와 gallery(갤러리) 페이지의 기본 레이아웃을 완성하고, SCSS 변수(Map) + 믹스인 구조를 적용해 “공통 스타일은 재사용”되는 형태로 1차 구현을 마무리했습니다.
              
              이후 품질 관점에서 중복/유지보수 포인트와 갤러리 배치 안정성을 중심으로 개선을 진행했습니다.`}</p>

          <div style={{ padding: "20px 0" }}>
            <p>[발견된 문제]</p>
            <ul>
              <li>- 공통 레이아웃 코드(정렬/배치) 중복으로 인한 유지보수 비용 증가</li>
              <li>- 갤러리 캡션 스타일 반복으로 인한 코드 증가</li>
              <li>- 이미지 로딩 전 Masonry 배치 계산으로 인한 레이아웃 불안정 가능성</li>
              <li>- fixed header로 인한 콘텐츠 가림 가능성</li>
            </ul>
          </div>
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle} style={{ paddingBottom: "10px" }}>
            공통 레이아웃 코드 중복 개선(믹스인 구조화)
          </div>
          {layoutDupIssueData.map((value, index) => (
            <details key={`layoutDupIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>갤러리 캡션 스타일 반복 개선(Sass Map + @each)</div>
          {captionDupIssueData.map((value, index) => (
            <details key={`captionDupIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>이미지 로딩 타이밍 제어로 Masonry 배치 안정화</div>
          {masonryTimingIssueData.map((value, index) => (
            <details key={`masonryTimingIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>fixed header로 인한 콘텐츠 가림 방지</div>
          {fixedHeaderIssueData.map((value, index) => (
            <details key={`fixedHeaderIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>2차 구현 결과</div>
          <div>
            {`SCSS를 “변수(Map) + 믹스인” 구조로 정리해 공통 스타일 중복을 줄였고, 갤러리 캡션 스타일은 데이터 기반(@each)으로 관리해 확장·수정 비용을 낮췄습니다.
              
              또한 imagesLoaded 이후 Packery를 실행하도록 흐름을 고정해 갤러리 배치 안정성을 확보했으며, fixed header 환경에서도 콘텐츠가 가려지지 않도록 레이아웃을 보완해 웹 페이지를 안정적으로 완성했습니다.`}
          </div>
        </ProjectDescCard>
      </div>
    </div>
  );
}
