import style from "../page.module.css";
import { ProjectPreviewCard } from "../../Component/ProjectPreviewCard/ProjectPreviewCard";
import { ProjectCard } from "../../Component/ProjectCard/ProjectCard";
import { ProjectSkill } from "../../Component/ProjectSkill/ProjectSkill";
import { ProjectDescCard } from "../../Component/ProjectDesc/ProjectDescCard";

export default function Karly() {
  const skillData = ["Vite", "TailWind CSS", "Git", "GitHub", "반응형", "팀 프로젝트"];

  // 초기 설계
  const basicDesignData = [
    {
      title: `각 페이지 구현 방식에 대한 방향성 결정`,
      content: `프로젝트를 시작하기 전에 팀원별 작업을 효율적으로 나누기 위해, 각 페이지를 어떤 방식으로 구현할지에 대한 작업 형식을 먼저 정했습니다.`,
    },
    {
      title: `페이지의 구성 요소를 컴포넌트 단위로 분류하여 작업 결정`,
      content: `페이지의 구성 요소를 컴포넌트로 분류하여 작성했습니다. 모든 페이지의 요소를 컴포넌트 단위로 나누어 작업했으며,그 이유는 문제가 발생하더라도 해당 컴포넌트를 누가 작업했는지 쉽게 파악할 수 있어 수정이 빠를 것이라 판단했습니다.
      
                또한 작업 할당의 부담이 적고, 누가 어떤 작업을 진행 중인지와 어떤 작업이 완료되었는지를 파악하기 쉽다는 장점이 있다고 생각해 이 방식으로 작업을 진행하기로 결정했습니다.`,
    },
  ];

  // 구현 도구 선택
  const toolSelectionData = [
    {
      title: `개발 중 빠른 빌드 확인을 위한 효율성`,
      content: `Vite를 선택한 이유는 개발 환경 설정을 단순화하고 빌드 속도를 크게 개선할 수 있었기 때문입니다. 
                특히 Vite는 네이티브 ES 모듈 기반으로 동작하여 초기 번들 속도가 빠르고, 개발 과정에서 중간중간 빌드를 빠르게 확인하기에 매우 효율적이었습니다.`,
    },
  ];

  // 빌드 설정 문제
  const buildConfigIssue = [
    {
      title: `[문제]`,
      content: `처음에는 모든 페이지를 하나하나 설정에 직접 import 하는 방식으로 진행했는데, 이 과정에서 일부 페이지를 빼먹는 경우도 생기고, 페이지가 늘어날 때마다 일일이 추가하는 게 너무 번거롭고 불편한 문제가 있었습니다.`,
    },
    {
      title: `[해결]`,
      content: `fs 모듈을 사용해 src 디렉토리에서 모든 .html 파일을 자동으로 읽어와 rollupOptions.input에 추가하는 코드를 사용. 예를 들어, fs.readdirSync('src')로 .html 파일 목록을 읽어와서 자동으로 input에 포함하도록 설정을 개선하였습니다.`,
    },
    {
      title: `[결과]`,
      content: `이로 인해 빌드 시 파일 누락 문제가 발생하지 않게 되었고, 페이지를 추가할 때 파일만 생성하면 되어 개발 효율이 향상되었습니다.`,
    },
  ];

  // 메인 페이지 레이아웃 조정 문제
  const mainPageIssue = [
    {
      title: `[문제]`,
      content: `모바일 환경에서 하단 고정 UI가 본문 콘텐츠를 가리는 문제가 있었고, 아이템 카드의 폭과 정렬 기준이 명확하지 않아 레이아웃이 깨지는 현상이 발생했습니다. 또한 모바일 화면에서 여백이 부족해 전체 레이아웃이 답답하게 보였습니다.`,
    },
    {
      title: `[해결]`,
      content: `하단 고정 UI로 인해 콘텐츠가 가려지지 않도록 body 영역에 하단 여백을 직접 추가했습니다. 또한 아이템 카드의 CSS를 수정해 폭과 정렬 기준을 명확히 지정했고, 모바일 환경에 맞게 패딩과 여백 값을 조정해 레이아웃이 안정적으로 보이도록 개선했습니다.`,
    },
    {
      title: `[결과]`,
      content: `모바일과 데스크톱 환경 모두에서 콘텐츠가 가려지지 않게 되었고, 아이템 카드 정렬이 안정적으로 유지되었습니다. 전체 레이아웃의 가독성과 사용자 경험이 개선되었습니다.`,
    },
  ];

  // 상품 카드 데이터 노출 문제
  const productCardIssue = [
    {
      title: `[문제]`,
      content: `상품 카드에 임시 데이터나 표시 조건이 정리되지 않은 요소들이 그대로 노출되어, 프로모션 정보나 텍스트가 의도와 다르게 보여 UI가 어색해 보이는 문제가 있었습니다.`,
    },
    {
      title: `[해결]`,
      content: `상품 카드 마크업과 CSS를 직접 수정해, 실제로 사용되지 않는 프로모션·뱃지·텍스트 요소를 제거하거나 숨기도록 처리했습니다. 카드에 필요한 데이터만 노출되도록 구조를 정리하고, 임시 데이터로 표시되던 요소는 CSS(display:none)로 화면에서 제외했습니다.`,
    },
    {
      title: `[결과]`,
      content: `상품 카드 UI에서 불필요한 데이터 노출이 제거되어 화면이 정돈되었고, 카드 정보가 더 명확하게 전달되어 사용자 경험이 개선되었습니다.`,
    },
  ];

  // 상세 페이지 모바일/PC 문제
  const detailPage = [
    {
      title: `[문제]`,
      content: `상품 상세 페이지에서 모바일과 PC 환경을 동일한 구조와 스타일로 처리해, 화면 크기에 따라 정보가 과하게 보이거나 가독성이 떨어지는 문제가 발생했습니다. 특히 모바일에서는 일부 정보가 공간을 많이 차지했고, PC에서는 레이아웃 흐름이 어색해졌습니다.`,
    },
    {
      title: `[해결]`,
      content: `CSS 미디어 쿼리를 사용해 모바일과 PC 환경을 구분하고, mobile-only, pc-only와 같은 클래스를 적용해 화면 크기에 따라 노출되는 영역을 분리했습니다. 또한 폰트 크기와 여백을 rem 단위로 조정해 각 환경에서 레이아웃이 자연스럽게 보이도록 수정했습니다.`,
    },
    {
      title: `[결과]`,
      content: `모바일과 PC 환경 각각에 맞는 정보 구조가 적용되어 가독성이 개선되었고, 화면 크기에 따른 레이아웃 어색함이 해소되어 사용자 경험이 향상되었습니다.`,
    },
  ];

  return (
    <div className={style.project}>
      {/* 메인 이미지, 바로가기 링크 */}
      <ProjectPreviewCard bgURL="/karly.png" projectLink="https://vision-karly.netlify.app/src/item/main" />

      {/* 내용 */}
      <div className={style.projectDesc}>
        {/* 프로젝트 제목, 깃허브 링크 */}
        <ProjectCard
          title="Karly"
          gitHubLink="https://github.com/teakyungg/Karly"
          projectDesc={`Karly는 마켓컬리 UI를 클론한 팀 프로젝트로, 반응형 레이아웃·Tailwind 테마 변수·접근성을 적용했습니다.
          (담당: Vite MPA 빌드 설정 자동화 / 상품 리스트·상세 UI(모바일 대응) / 모바일 네비 접근성 개선)`}
        />

        {/* 프로젝트 스킬 */}
        <ProjectSkill skillData={skillData} />

        <ProjectDescCard>
          <div className={style.descTitle}>초기 설계</div>
          <div className={style.descContent}>
            <p>- 페이지 구조 설계</p>
            <p>- Vite MPA 환경 자동화 구현</p>
          </div>

          {basicDesignData.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>구현 도구 선택: vite</div>

          {toolSelectionData.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>1차 구현 결과</div>
          <p>{`맡은 UI 구현은 완료했지만, 사용성 측면에서 아래와 같은 문제를 발견해 개선을 진행했습니다.

              [발견된 문제]
              - 빌드 설정 이슈
              - 메인 페이지 레이아웃 조정
              - 상품 카드 데이터 노출 조정
              - 상세 페이지 모바일/PC 분기`}</p>
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>빌드 설정 이슈 문제 해결</div>
          {buildConfigIssue.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>메인 페이지 레이아웃 조정 문제 해결</div>
          {mainPageIssue.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>상품 카드 데이터 노출 조정 문제 해결</div>
          {productCardIssue.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>상세 페이지 모바일/PC 분기 문제 해결</div>
          {detailPage.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>2차 구현 결과</div>
          <p>{`모든 문제를 해결하고 구현을 완료했습니다.
               마지막으로 추가적인 문제가 없는지 확인하기 위해 Lighthouse로 성능을 측정했습니다.

               성능: 100
               접근성: 90
               권장사항: 90
               검색엔진 최적화: 100

               그 결과 전반적으로 높은 점수를 확인할 수 있었고, 이를 통해 프로젝트가 안정적으로 완성되었음을 확인했습니다.`}</p>
        </ProjectDescCard>
      </div>
    </div>
  );
}
