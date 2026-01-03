import style from "../page.module.css";
import Image from "next/image";
import { ProjectPreviewCard } from "../../Component/ProjectPreviewCard/ProjectPreviewCard";
import { ProjectCard } from "../../Component/ProjectCard/ProjectCard";
import { ProjectSkill } from "../../Component/ProjectSkill/ProjectSkill";
import { ProjectDescCard } from "../../Component/ProjectDesc/ProjectDescCard";

export default function Animal() {
  // 제작 시술
  const skillData = ["Rest API", "React", "Zustand", "Packery", "Git", "GitHub", "반응형", "개인 프로젝트"];

  // 기초 설계 데이터
  const basicDesignData = [
    {
      title: `설계에 영향을 주는 핵심 변수`,
      content: `API의 데이터 제공 방식에 따라 Masonry Layout의 구현 방식이 달라질 수 있다고 판단했습니다.
                따라서 UI를 먼저 설계하기 전에, API가 어떤 형태로 데이터를 제공하는지를 우선 확인했습니다.`,
    },
    {
      title: `API 분석 결과`,
      content: `이번 프로젝트에서는 Dog API라는 Public API를 사용했습니다.
                응답 구조를 확인한 결과, 이미지 데이터는 https://images.dog.ceo/breeds~ 형태의 이미지 URL 문자열만 제공된다는 점을 확인했습니다.`,
    },
    {
      title: `UX 관점에서의 이상적인 시나리오`,
      content: `만약 서버로부터 이미지의 크기 정보를 미리 받을 수 있었다면,
                UI를 먼저 배치한 뒤 이미지 로딩 전까지 스켈레톤 UI를 노출하는 방식이 사용자 경험 측면에서 더 적합하다고 판단했습니다.`,
    },
    {
      title: `제약 조건 인식과 구현 방향 결정`,
      content: `그러나 현재 API 구조상 이미지 크기 정보를 사전에 확보할 수 없기에, 대안으로 개별 이미지마다 스켈레톤 UI를 적용하는 대신, 이미지 배치 영역 전체에 하나의 큰 스켈레톤 UI를 먼저 노출한 뒤, 모든 이미지 로딩이 완료되면 이를 제거하는 방식으로 구현 방향을 결정했습니다.`,
    },
  ];

  // 설계 도구 데이터
  const toolData = [
    {
      title: `프로젝트 특성 파악`,
      content: `본 프로젝트는 서버로부터 다수의 이미지 데이터를 받아와 사용자 인터랙션에 따라 반복적으로 갱신되는 UI를 구현해야 했습니다. 이러한 특성상, 순수 자바스크립트만으로 UI 상태와 렌더링 흐름을 관리할 경우 개발 복잡도와 소요 기간이 과도하게 증가할 수 있다고 판단했습니다.`,
    },
    {
      title: `React 선택 근거`,
      content: `React의 선언적인 UI 모델과 상태 관리 방식(useState 등)을 활용하면, 이미지 나열과 같은 핵심 UI 영역을 상태 변화 기준으로 명확히 분리하고 렌더링 흐름을 예측 가능하게 관리할 수 있다고 판단했습니다.`,
    },
    {
      title: `SEO 관점에서의 고려 사항`,
      content: `CSR 기반 React SPA는 초기 HTML에 포함되는 콘텐츠가 제한적이기 때문에 SEO 측면에서 일정 수준의 제약이 있다는 점을 인지하고 있었습니다. Next.js에서 SSR 또는 SSG를 적용하면 이러한 제약을 보완할 수 있지만, 해당 방식이 본 프로젝트에 적합한지에 대한 추가 검토가 필요하다고 판단했습니다.`,
    },
    {
      title: `기술 선택 판단 근거`,
      content: `본 프로젝트에서 서버로부터 제공되는 데이터는 이미지 URL 문자열에 한정되어 있으며, 이미지에 대한 설명, 키워드, alt 텍스트 등 의미적 메타데이터를 고품질로 구성하기 어려운 구조였습니다. 이러한 특성상 Next.js의 SSR 또는 SSG를 적용하더라도 SEO 측면에서의 실질적인 개선 효과는 제한적일 것이라 판단했습니다.`,
    },
    {
      title: `최종 결정`,
      content: `이에 따라 본 프로젝트에서는 SEO를 <head> 메타 정보 수준까지만 고려하는 것이 적절하다고 판단하였고, 결과적으로 Next.js 대신 React 라이브러리를 선택했습니다.`,
    },
  ];

  // Packery 데이터
  const packeryData = [
    {
      title: `UX 기준 설계 요구사항`,
      content: `본 프로젝트에서는 이미지가 배치되는 과정이 사용자에게 그대로 노출될 경우 화면이 불안정하게 보일 수 있다고 판단했습니다. 이에 따라 이미지 배치가 완료되기 전까지 해당 영역을 노출하지 않는 UI 구조를 먼저 설계했습니다.`,
    },
    {
      title: `기술적 요구사항 정의`,
      content: `이러한 UI 구조를 구현하기 위해서는 단순히 Masonry Layout을 구현하는 것뿐만 아니라, 이미지 배치가 “언제 완전히 끝났는지”를 정확히 감지할 수 있는 시점 제어 수단이 필요했습니다.

                즉, 레이아웃 계산과 DOM 배치가 완료되는 타이밍을 명확히 알 수 있는 기능이 핵심 요구사항이었습니다.`,
    },
    {
      title: `Packery 선택 근거`,
      content: `Packery 라이브러리는 레이아웃 정렬이 완료되는 시점에 layoutComplete 콜백 함수를 제공하고 있어, 이미지 배치가 정확히 끝나는 타이밍을 이벤트 기반으로 감지할 수 있었습니다.
                
                이를 통해 이미지 배치 완료 이후에만 UI를 노출하는 흐름을 구성할 수 있었고, 본 프로젝트의 사용자 경험 설계 조건에 가장 부합하는 라이브러리라고 판단하여 Packery를 선택했습니다.`,
    },
  ];

  // zustand 문제 데이터
  const zustandIssueData = [
    {
      title: `[문제]`,
      content: `초기 Zustand 상태 설계 단계에서, 선언한 모든 상태 변수에 대해 각각의 변경 함수를 하나씩 분리해 정의하는 구조로 설계했습니다.

                이렇게 설계한 이유는, 각 상태에 대응하는 변경 함수를 미리 정의해 두면 필요한 위치에서 원하는 변경 함수만 선택적으로 호출할 수 있고, 여러 상태를 동시에 변경해야 하는 경우에도 해당 변경 함수들을 조합해 실행하면 될 것이라 판단했기 때문입니다.

                그러나 실제 구현 과정에서 문제가 발생했습니다. 하나의 사용자 액션에서 여러 변경 함수를 순차적으로 실행할 경우, 제가 의도한 것과 달리 모든 상태 변경 이후 한 번만 렌더링되는 것이 아니라, 각 변경 함수가 실행될 때마다 상태 변경과 렌더링이 반복적으로 발생하는 현상을 확인했습니다.

                즉, 변경 함수 하나 실행 → 렌더링 → 다음 변경 함수 실행 → 다시 렌더링되는 구조로 동작하면서, 의도하지 않은 다중 리렌더링 문제가 발생했습니다.`,
    },
    {
      title: `[해결]`,
      content: `이 문제를 해결하기 위해, 먼저 하나의 사용자 액션으로 인해 실제로 어떤 상태들이 함께 변경되는지를 모두 확인했습니다.

                그 과정에서 동일한 액션에 의해 항상 함께 변경되는 상태들이 존재한다는 점을 파악했고, 이 상태들을 개별적으로 업데이트하는 기존 방식 대신 해당 상태들을 한 번에 변경하는 통합 업데이트 함수를 새로 구성했습니다.

                이를 통해 상태 변경 시 여러 개의 변경 함수를 순차적으로 호출하는 구조에서 벗어나, 하나의 액션당 상태 변경 함수가 한 번만 호출되도록 구조를 변경했습니다.`,
    },
    {
      title: `[결과]`,
      content: `상태 변경 구조를 통합한 이후, 버튼 클릭 시 상태 변경 함수가 한 번만 호출되도록 동작하는 것을 확인했습니다. 이에 따라 리렌더링 역시 여러 번 발생하지 않고, 의도한 대로 1회만 발생하도록 정상화되었습니다.

                또한 React Developer Tools를 활용해 렌더링 횟수와 컴포넌트 갱신 흐름을 직접 확인함으로써, 불필요한 렌더링으로 인한 성능 저하 문제가 실제로 개선되었음을 확인했습니다.`,
    },
  ];

  // FCP 문제 데이터
  const FCPIssueData = [
    {
      title: `[문제]`,
      content: `Lighthouse 성능 측정 결과, 초기 화면에서 FCP가 약 1초로 측정되었습니다. 원인을 확인해보니 초기 렌더링 단계에서 렌더링 비용이 큰 컴포넌트까지 함께 로드되면서, 사용자가 첫 화면을 인지할 수 있는 시점이 지연되는 문제가 있었습니다.`,
    },
    {
      title: `[해결]`,
      content: `해결 방안으로 초기 화면에서 반드시 필요한 콘텐츠와, 이후에 로드되어도 되는 컴포넌트를 분리하는 방향으로 접근했습니다. 렌더링 비용이 큰 컴포넌트를 React.lazy로 지연 로딩하도록 변경하고, 초기 렌더링에서는 핵심 콘텐츠가 우선 노출되도록 렌더링 구조를 재구성했습니다.

                이를 통해 초기 로딩 단계에서 불필요한 렌더링 부담을 줄이고, FCP 개선을 목표로 했습니다.`,
    },
    {
      title: `[결과]`,
      content: `지연 로딩 구조 적용 이후 Lighthouse 기준 FCP가 약 0.3초로 단축되었습니다.
                초기 화면에서 핵심 콘텐츠가 더 빠르게 노출되면서, 사용자가 페이지가 로드되었다고 인지하는 시점이 앞당겨졌고 초기 로딩 체감도 또한 개선되었습니다.`,
    },
  ];

  // LCP 문제 데이터
  const LCPIssueData = [
    {
      title: `[문제]`,
      content: `Lighthouse 성능 측정 결과, LCP가 3.7초로 과도하게 지연되는 문제가 확인되었습니다. 원인을 분석해보니 이미지 로딩과 Masonry Layout 배치가 모두 완료될 때까지 해당 영역이 스켈레톤 UI로 가려지는 구조였고, 이로 인해 주요 콘텐츠가 사용자에게 늦게 노출되면서 LCP가 지연되고 있었습니다.

                또한 이미지 로딩 시간 자체는 사용자 네트워크 환경에 따라 달라지는 영역이기 때문에, 클라이언트에서 직접 단축하기에는 한계가 있다고 판단했습니다. 따라서 개선 가능한 지점인 배치 부분에 중점을 두어서 개선을 진행하기로 하였습니다.`,
    },
    {
      title: `[해결]`,
      content: `검토 결과 Packery 라이브러리의 기본 설정으로 레이아웃 정렬 애니메이션이 적용되어 있었고, 이 애니메이션이 이미지 배치 완료 시간을 추가로 늘려 스켈레톤 UI가 유지되는 시간이 길어지는 원인이었습니다.

                이에 따라 transitionDuration: 0, stagger: 0 옵션을 적용해 배치 애니메이션을 제거하고, 이미지가 배치되는 과정에서 발생하던 딜레이가 없도록 설정을 조정했습니다.`,
    },
    {
      title: `[결과]`,
      content: `설정 변경 이후 Lighthouse 기준 LCP가 3.7초 → 3.3초로 단축되었습니다.
                이미지 배치가 더 빠르게 완료되면서 주요 콘텐츠 노출 시점이 앞당겨졌고, 사용자 관점에서도 첫 화면의 콘텐츠가 더 빠르게 나타나도록 개선되었습니다.`,
    },
  ];

  // 문서 중요 랜드마크 문제 데이터
  const landMarkIssueData = [
    {
      title: `[문제]`,
      content: `Lighthouse 검증 과정에서 문서의 주요 랜드마크가 정의되어 있지 않다는 지적을 받았습니다. 즉, 페이지에서 “어떤 영역이 이 웹페이지의 핵심 콘텐츠(main)인가”를 명확히 구분하기 어려워, 결과적으로 이 웹사이트가 무엇을 보여주기 위한 페이지인지 구조적으로 드러나지 않는 문제가 있었습니다.`,
    },
    {
      title: `[해결]`,
      content: `이 프로젝트의 핵심 목적은 여러 이미지를 탐색하고 보여주는 UI에 있었기 때문에, 이미지를 출력하는 주요 영역을 페이지의 핵심 콘텐츠로 명확히 정의하기로 했습니다. 이에 따라 해당 영역에 role="main"을 추가하여, 문서 구조상 이 영역이 주요 콘텐츠임을 표시했습니다.`,
    },
    {
      title: `[결과]`,
      content: `수정 이후 Lighthouse 재측정 결과, SEO 점수가 97 → 100으로 향상된 것을 확인했습니다.`,
    },
  ];

  // meta 문제 데이터
  const metaIssueData = [
    {
      title: `[문제]`,
      content: `프로젝트를 Lighthouse로 검증하는 과정에서, 문서 <head> 영역에 기본 메타데이터가 정의되어 있지 않다는 점을 확인했습니다. 이로 인하여 SEO 점수가 떨어짐을 확인하였고 개선하기로 하였습니다.`,
    },
    {
      title: `[해결]`,
      content: `프로젝트는 CSR 기반 React SPA로 구성되어 있어, 초기 HTML 단계에서 검색/공유 환경에 직접 반영될 수 있는 정보는 <head> 메타데이터 영역이 핵심이라고 판단했습니다. 이에 따라 index.html의 <head>에 페이지 식별에 필요한 메타 정보를 추가하여, 기본적인 SEO 및 공유 품질을 개선했습니다.`,
    },
    {
      title: `[결과]`,
      content: `메타데이터 적용 이후 Lighthouse 기준 SEO 관련 경고가 해소되었고, 페이지 제목/설명 및 공유 미리보기 품질이 개선되었으며, LightHouse SEO 점수도 87 → 100점으로 향상되었습니다.`,
    },
  ];

  return (
    <div className={style.project}>
      {/* 메인 이미지, 바로가기 링크 */}
      <ProjectPreviewCard bgURL="/Animal.png" projectLink="https://animal-react.netlify.app/" />

      <div className={style.projectDesc}>
        {/* 프로젝트 제목, 깃허브 링크 */}
        <ProjectCard
          title="Animal"
          gitHubLink="https://github.com/teakyungg/Animal-React"
          projectDesc="Animal 프로젝트는 Pinterest, Behance, Unsplash와 유사한 Masonry Layout UI를 구현하며 동적 레이아웃 처리 경험을 위한 프로젝트 입니다."
        />

        {/* 프로젝트 스킬 */}
        <ProjectSkill skillData={skillData} />

        <ProjectDescCard>
          <div className={style.descTitle}>초기 설계</div>
          <div className={style.descContent}>
            <p>- Masonry Layout 구현에 영향을 주는 핵심 변수로 API 응답 구조를 먼저 분석했습니다.</p>
            <p>- 이미지 메타데이터 제약을 고려해 스켈레톤 UI 전략을 사전에 결정했습니다.</p>
          </div>

          {basicDesignData.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>구현 도구 선택: React</div>
          <div>
            <p>
              - 서버 데이터 기반으로 반복 갱신되는 UI 특성상, 선언적인 상태 관리가 가능한 React가 적합하다고
              판단하였습니다.
            </p>
            <p>
              - 프로젝트 범위와 콘텐츠 특성을 고려했을 때, SSR/SSG 도입 대비 SEO 개선 효과가 제한적이라고
              판단하였습니다.
            </p>
          </div>

          {toolData.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>Masonry Layout 구현 방식 선택: Packery</div>
          <div>
            <p>
              - 이미지 배치 과정이 사용자에게 노출되지 않도록 설계하기 위해, 레이아웃 완료 시점을 정확히 감지할 수 있는
              라이브러리가 필요함을 인지하였고
            </p>
            <p>
              - 배치 완료 시점을 명확히 알 수 있는 layoutComplete 콜백을 제공하는 Packery가 프로젝트 요구사항에 가장
              적합하다고 판단하였습니다.
            </p>
          </div>
          {packeryData.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>1차 구현 결과</div>
          <Image src={"/animal/lighthouse_01.png"} width={640} height={93} alt="lighthouse_01" />
          <div>
            <p>초기 설계 단계에서 계획한 기능들은 모두 구현되어 프로젝트는 의도한 구조대로 1차 완성되었습니다.</p>
            <p>
              다만 외형상으로는 큰 문제가 없어 보였으나, Lighthouse와 React Developer Tools를 활용해 프로젝트를 검증한
              결과 성능 및 구조 측면에서 개선이 필요한 여러 문제들을 확인할 수 있었습니다.
            </p>

            <div style={{ padding: "20px 0" }}>
              <p>[발견된 문제]</p>
              <ul>
                <li>- Zustand 다중 상태 업데이트로 인한 리렌더링 문제</li>
                <li>- FCP(First Contentful Paint) 지연 – 약 1초</li>
                <li>- LCP(Largest Contentful Paint) 지연 – 약 4.7초</li>
                <li>- 문서 head 영역에 메타데이터 미정의</li>
                <li>- 문서의 주요 랜드마크가 없음</li>
              </ul>
            </div>

            <p>
              이러한 문제들은 사용자 경험과 성능 지표에 직접적인 영향을 준다고 판단하여, 프로젝트를 품질 개선 관점에서
              추가적으로 수정하기로 결정했습니다.
            </p>
          </div>
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle} style={{ paddingBottom: "10px" }}>
            Zustand 다중 상태 업데이트로 인한 리렌더링 문제 해결
          </div>
          {zustandIssueData.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>FCP(First Contentful Paint) 지연 문제 개선</div>
          {FCPIssueData.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>LCP(Largest Contentful Paint) 지연 문제 개선</div>
          {LCPIssueData.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>메타 데이터 미정의 문제 해결</div>
          {metaIssueData.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>문서의 주요 랜드마크가 없는 문제 해결</div>
          {landMarkIssueData.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>2차 구현 결과</div>
          <Image src={"/animal/lighthouse_02.png"} width={1010} height={146} alt="lighthouse_02" />
          <div>
            {`1차 구현 이후 Lighthouse와 React Developer Tools로 확인한 문제들을 개선한 뒤, 동일 조건으로 Lighthouse를 재측정했습니다.

              [Lighthouse 재측정 결과]
              - 성능 74 → 89 (+15p)
              - 접근성 97 → 100 (+3p)
              - 권장사항 77 → 100 (+23p)
              - 검색엔진 최적화 83 → 100 (+17p)

              핵심 품질 지표가 전반적으로 상승하며, 초기 로딩 성능과 문서 품질이 개선되었음을 확인했습니다.`}
          </div>
        </ProjectDescCard>
      </div>
    </div>
  );
}
