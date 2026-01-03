import style from "../page.module.css";
import { ProjectPreviewCard } from "../../Component/ProjectPreviewCard/ProjectPreviewCard";
import { ProjectCard } from "../../Component/ProjectCard/ProjectCard";
import { ProjectSkill } from "../../Component/ProjectSkill/ProjectSkill";
import { ProjectDescCard } from "../../Component/ProjectDesc/ProjectDescCard";

export default function Fundream() {
  // 제작 기술
  const skillData = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "ReactQuill",
    "Day.js",
    "@mantine/dates",
    "Git",
    "GitHub",
    "반응형",
    "팀 프로젝트",
  ];

  // 초기 설계 데이터 (commit 기반: products/new/detail + useProjectStore + 인증 모달/완료 상태 + 중복 등록 방지)
  const basicDesignData = [
    {
      title: `설계에 영향을 주는 핵심 변수`,
      content: `프로젝트 등록(상품 업로드) 플로우는 입력 항목이 많고, 계좌/세금 인증처럼 “입력 → 확인 → 완료” 상태가 존재했습니다.
                따라서 단순 폼 구현보다, 각 섹션의 완료 조건과 공통 상태 흐름을 먼저 정의하는 것이 핵심 변수라고 판단했습니다.`,
    },
    {
      title: `요구사항 구조 분석 결과`,
      content: `등록 상세 페이지는 카테고리/태그/일정/가격/목표금액/제목/소개/대표이미지처럼 입력 형태가 다양한 데이터로 구성되어 있었고, 인증 영역은 완료 여부(userAccountCheck/userDutyCheck)를 기반으로 UI 상태가 달라지는 구조였습니다. 
      
                이에 따라 입력은 기능 단위로 컴포넌트 분리하고, 공통 상태는 전역으로 관리하는 방향이 적합하다고 판단했습니다.`,
    },
    {
      title: `UX 관점 분석`,
      content: `사용자는 긴 등록 과정에서 “현재 무엇이 완료되었는지”를 즉시 확인하고 싶어한다고 생각했고, 그래서 상세 입력은 섹션 단위로 분리하고(Plan/Intro/Thumbnail/Category/Content 등), 인증은 모달 기반으로 확인 플로우를 제공하며, 완료 상태를 UI에서 명확히 표시하는 구조를 목표로 설계했습니다.`,
    },
    {
      title: `구현 방향 결정`,
      content: `페이지 간/섹션 간 공유되는 값이 많아 props 전달로만 흐름을 유지하면 복잡도가 커질 수 있다고 판단하였고, 프로젝트 규모가 소규모인 것을 감안하여 Zustand(useProjectStore)를 사용하여 입력값/인증 상태/초기화를 통합 관리하기로 하였습니다.`,
    },
  ];

  // 구현 도구 선택 데이터 (Next.js + Zustand + Tailwind/Mantine, commit 기반으로 작성)
  const toolData = [
    {
      title: `프로젝트 특성 파악`,
      content: `크라우드 펀딩 서비스 특성상 “목록 → 상세 → 결제 → 마이페이지”처럼 라우팅 기반 화면 흐름이 명확했고, 등록/결제처럼 입력 중심 페이지가 많아 UI 상태와 검증 흐름을 예측 가능하게 관리할 필요가 있었습니다.`,
    },
    {
      title: `Next.js 선택 근거`,
      content: `그 결과, App Router 기반의 레이아웃·라우팅 구조를 활용할 수 있고 페이지 구조가 명확히 정의된 프레임워크인 Next.js를 사용하는 게 좋다고 판단하였습니다.`,
    },
    {
      title: `SEO 고려`,
      content: `본 프로젝트는 쇼핑몰 서비스로, 특성상 검색 노출이 중요하다고 판단했고, CSR 기반 React 단독 구성의 한계를 보완하기 위해 SSR을 지원하는 Next.js를 선택했습니다.`,
    },
    {
      title: `최종 결정`,
      content: `결과적으로 App Router 기반의 명확한 페이지 구조와 SEO 측면의 이점을 고려해 Next.js를 사용하기로 결정했습니다.`,
    },
  ];

  // 라이브러리/구현 방식 선택 (commit 기반: react-quill-new 추가, 일정 선택/날짜 처리, 로딩 스켈레톤)
  const libraryChoiceData = [
    {
      title: `UX 기준 설계 요구사항`,
      content: `등록 상세 페이지에서 프로젝트 소개/콘텐츠는 단순 텍스트 입력보다, 편집 가능한 콘텐츠 입력 경험이 필요했습니다. 또한 일정(기간) 입력은 사용자가 오류 없이 선택할 수 있는 UI가 필요했습니다.`,
    },
    {
      title: `기술적 요구사항 정의`,
      content: `개발 기간이 제한적이었기 때문에, 모든 기능을 직접 구현하기보다는 검증된 라이브러리를 활용하는 것이 합리적인 선택이라고 판단했습니다. 또한 목록·등록 과정에서 서버와 통신하는 동안 화면에 아무 변화가 없으면 사용자가 정상 동작 여부를 인지하기 어렵다고 보았고, 이에 따라 로딩 구간에는 Skeleton UI를 적용해 진행 상태를 명확히 전달하도록 구성했습니다.`,
    },
    {
      title: `선택 근거`,
      content: `TypeScript 기반 개발 환경에서 타입 오류를 사전에 방지하기 위해, 별도 타입 정의 없이 TypeScript를 지원하는 react-quill-new를 사용해 콘텐츠 입력 에디터를 안정적으로 구현했습니다.

                또한 일정 입력은 DatePicker/DateRangePicker/DatePickerInput 형태가 필요했기 때문에, props 기반 제어가 가능한 @mantine/dates를 사용해 캘린더 UI를 구성했습니다.

                마지막으로 날짜 포맷/비교/계산이 필요한 구간이 많아 Day.js를 적용해 날짜 처리 로직을 일관되게 관리했습니다.`,
    },
  ];

  // 1) 등록 중복 클릭 이슈 (commit: Prevent double-clicking when registering an item)
  const doubleClickIssueData = [
    {
      title: `[문제]`,
      content: `프로젝트 등록 버튼을 빠르게 연속 클릭하는 경우, 등록 요청이 중복으로 발생할 가능성이 있었습니다.
                네트워크 지연 상황에서는 사용자 입장에서 “눌렸는지” 판단이 어려워 중복 시도가 발생할 수 있다고 판단했습니다.`,
    },
    {
      title: `[해결]`,
      content: `등록 요청이 시작되는 시점에 진행 상태 플래그를 설정하고, 해당 상태에서는 버튼을 비활성화하도록 처리해 요청이 완료되기 전까지 동일 액션이 다시 실행되지 않도록 제어했습니다.`,
    },
    {
      title: `[결과]`,
      content: `연속 클릭 상황에서도 등록 요청이 중복으로 발생하지 않도록 흐름이 안정화되었고, 요청 진행 상태가 명확히 전달되어 사용자 만족도 또한 향상되었습니다.`,
    },
  ];

  // 2) 계좌/주민번호 입력 폼/검증 이슈 (commit: Modify the account number and resident registration number input form, Deposit account name verification bug fixed 등)
  const inputValidationIssueData = [
    {
      title: `[문제]`,
      content: `계좌번호/주민등록번호처럼 형식 제약이 강한 입력값을 여러 컴포넌트에서 복사해 검증하다 보니, 화면 표시 형식과 실제 저장/전송 값이 일치하지 않는 구간이 발생했습니다. 그 결과 사용자가 올바르게 입력했음에도 검증 기준이 달라 인증이 실패하거나 오류 메시지가 발생할 수 있었습니다.`,
    },
    {
      title: `[해결]`,
      content: `계좌번호와 주민등록번호 입력을 “숫자만 추출 → 길이 제한 → 화면 표시 포맷 적용” 흐름으로 통일하고, 화면에 보여주는 값과 저장하는 값을 분리해 일관되게 관리했습니다. 또한 입력 오류가 발생한 경우, 원인을 사용자가 바로 확인할 수 있도록 에러 메시지를 구체화했습니다.`,
    },
    {
      title: `[결과]`,
      content: `입력 단계에서 형식이 표준화되어 잘못된 값이 저장되거나 전송되는 문제가 줄었고, 올바른 입력임에도 검증 기준 차이로 실패하던 인증 오류가 해소되었습니다.`,
    },
  ];

  // 3) 메인 목록 로딩 UX (commit: Added product loading, Add skeleton UI, main page text fixed)
  const mainLoadingIssueData = [
    {
      title: `[문제]`,
      content: `메인 페이지에서 상품 목록 로딩 중 화면 공백이 발생하여, 사용자가 “페이지가 멈췄다”고 인지할 수 있어 UX 저하로 이어질 수 있다고 판단하였습니다.`,
    },
    {
      title: `[해결]`,
      content: `상품 로딩 흐름을 추가하고, 로딩 구간에는 Skeleton UI를 적용해 데이터 응답 전에도 레이아웃이 유지되도록 구성했습니다.`,
    },
    {
      title: `[결과]`,
      content: `로딩 중에도 화면이 안정적으로 보이도록 개선되었고, 사용자 체감 대기 품질이 향상되었습니다.`,
    },
  ];

  return (
    <div className={style.project}>
      {/* 메인 이미지, 바로가기 링크 */}
      <ProjectPreviewCard bgURL="/fundream.png" projectLink="https://final-11-cutie.vercel.app/" />

      <div className={style.projectDesc}>
        {/* 프로젝트 제목, 깃허브 링크 */}
        <ProjectCard
          title="FunDream"
          gitHubLink="https://github.com/FRONTENDBOOTCAMP-13th/Final-11-Cutie"
          projectDesc={`사용자가 프로젝트(상품)를 등록하고, 펀딩/결제/리뷰까지 이어지는 크라우드 펀딩 플랫폼 팀 프로젝트입니다.
            (담당: 프로젝트 등록 상세 플로우/인증 UI/상태관리/메인 로딩 UX/일부 리팩토링)`}
        />

        {/* 프로젝트 스킬 */}
        <ProjectSkill skillData={skillData} />

        <ProjectDescCard>
          <div className={style.descTitle}>초기 설계</div>
          <div className={style.descContent}>
            <p>- 등록 상세는 입력/인증 상태가 많아, Zustand 기반 전역 상태 흐름을 먼저 설계했습니다.</p>
            <p>- 인증(계좌/세금)은 완료 여부를 UI에서 명확히 보여주도록 모달 기반 플로우로 구성했습니다.</p>
          </div>

          {basicDesignData.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>구현 도구 선택: Next.js</div>
          <div>
            <p>
              - 라우팅 기반 화면 흐름 + 입력 중심 페이지가 많아, 구조화/재사용에 강한 Next.js가 적합하다고 판단했습니다.
            </p>
          </div>

          {toolData.map((value, index) => (
            <details key={`toolData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>라이브러리/구현 방식 선택: 에디터·일정·로딩 UX</div>
          <div>
            <p>- 콘텐츠 입력은 에디터가 필요해 react-quill-new를 사용했습니다.</p>
            <p>- 일정 선택은 Mantine Dates + dayjs 조합으로, 로딩 구간은 Skeleton UI로 UX를 보완했습니다.</p>
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

          <div>
            <p>
              프로젝트 등록 상세 플로우(입력/에디터/대표이미지/일정/카테고리)와 인증(계좌/세금) UI를 1차 완성했습니다.
            </p>
            <p>
              이후 QA 과정에서 사용자 행동/엣지케이스 기반으로 안정화가 필요한 이슈들을 확인하고 개선을 진행했습니다.
            </p>

            <div style={{ padding: "20px 0" }}>
              <p>[발견된 문제]</p>
              <ul>
                <li>- 등록 버튼 연속 클릭으로 인한 중복 요청 위험</li>
                <li>- 계좌/주민번호 입력 폼/검증 불일치 및 인증 관련 버그</li>
                <li>- 메인 목록 로딩 중 공백 발생으로 인한 UX 저하</li>
              </ul>
            </div>

            <p>
              위 문제들은 사용자 경험과 서비스 안정성에 직접 영향을 준다고 판단해, 품질 개선 관점에서 추가 수정했습니다.
            </p>
          </div>
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle} style={{ paddingBottom: "10px" }}>
            프로젝트 등록 중복 요청 방지
          </div>
          {doubleClickIssueData.map((value, index) => (
            <details key={`doubleClickIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>계좌/주민번호 입력 검증 및 인증 안정화</div>
          {inputValidationIssueData.map((value, index) => (
            <details key={`inputValidationIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>메인 목록 로딩 UX 개선</div>
          {mainLoadingIssueData.map((value, index) => (
            <details key={`mainLoadingIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>2차 구현 결과</div>

          {/* TODO: Lighthouse/정량 지표 측정값이 있으면 아래를 전/후 점수로 교체 */}
          <div>
            {`QA 과정에서 확인된 이슈(중복 등록, 입력 검증, 로딩 UX)를 개선한 뒤, 담당 기능을 안정적으로 완성했습니다.

              [개선 요약]
              - 등록 중복 요청 방지 적용
              - 인증 입력 폼/검증 안정화
              - 메인 목록 Skeleton UI 적용`}
          </div>
        </ProjectDescCard>
      </div>
    </div>
  );
}
