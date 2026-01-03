import style from "../page.module.css";
import { ProjectPreviewCard } from "../../Component/ProjectPreviewCard/ProjectPreviewCard";
import { ProjectCard } from "../../Component/ProjectCard/ProjectCard";
import { ProjectSkill } from "../../Component/ProjectSkill/ProjectSkill";
import { ProjectDescCard } from "../../Component/ProjectDesc/ProjectDescCard";

export default function Game2048() {
  // 제작 기술
  const skillData = [
    "TypeScript",
    "Vanilla JS(DOM 조작)",
    "HTML/CSS",
    "Vite(번들러)",
    "ESLint/Prettier",
    "Git",
    "GitHub",
    "Netlify",
    "반응형",
    "팀 프로젝트",
  ];

  // 초기 설계
  const basicDesignData = [
    {
      title: `설계에 영향을 주는 핵심 변수`,
      content: `2048의 핵심은 “한 번의 입력에서 타일이 어디로 이동하고, 어떤 타일이 병합되는지”를 정확히 계산하는 것입니다. 특히 같은 줄에서 병합이 연쇄적으로 발생할 때(예: 2 2 2 2) “한 번의 이동에서 한 타일은 한 번만 병합” 규칙을 지키는 것이 핵심 변수라고 판단했습니다.`,
    },
    {
      title: `데이터 구조 결정`,
      content: `보드는 2차원 배열(grid)로 계산하고, 화면의 각 타일(div)은 dataset.value를 통해 값을 읽고 쓰는 구조로 설계했습니다.
                이 방식이라면 타일 이동으로 값이 변경되더라도, 특정 위치에 있는 dataset.value를 기준으로 현재 위치와 값을 직관적으로 다시 읽어올 수 있다고 판단했기 때문입니다.`,
    },

    {
      title: `UX 관점에서의 요구사항`,
      content: `타일이 즉시 텔레포트하듯 바뀌면 사용자가 “무슨 일이 일어났는지” 이해하기 어렵다고 생각했습니다. 그래서 이동은 CSS transform 기반 애니메이션으로 보여주고, 애니메이션이 끝난 뒤 실제 값 업데이트가 적용되는 흐름이 필요하다고 판단했습니다.`,
    },
    {
      title: `구현 방향 결정`,
      content: `타일 이동 시 각 타일의 현재 값을 dataset을 통해 읽어와 2차원 배열로 변환한 뒤,이 배열에 이동·병합 계산 로직을 적용해 새로운 보드 상태를 먼저 산출하도록 설계했습니다.

            이후 계산이 완료된 결과를 기준으로 화면에 이동 애니메이션과 렌더링을 적용했습니다. 이 과정에서 계산 로직과 화면 렌더링을 명확히 분리하는 것에 중점을 두었습니다.`,
    },
  ];

  // 구현 도구 선택
  const toolData = [
    {
      title: `TypeScript 선택 이유`,
      content: `보드는 좌표(y, x) 기반으로 움직이기 때문에 인덱스 실수나 방향 처리 실수가 자주 발생할 수 있습니다. TypeScript를 사용해 “이동 정보가 항상 [y, x, ny, nx] 형태를 갖도록” 타입을 맞추고, 런타임 오류 가능성을 줄이고자 사용하였습니다.`,
    },
    {
      title: `Vite 선택 이유`,
      content: `게임 프로젝트는 정적 리소스(svg, 이미지, 사운드)가 많고, 배포 전 빌드가 자주 필요했습니다. Vite 기반으로 개발/빌드 속도를 확보하고, 정적 자산을 번들링 환경에서 안정적으로 다루는 것을 목표로 했습니다.`,
    },
  ];

  // 이슈 1) 무효 이동에서도 새 타일 생성되는 문제
  const invalidMoveIssueData = [
    {
      title: `[문제]`,
      content: `사용자가 방향키를 눌렀지만 실제로 보드에 변화가 없는 경우(= 이동 불가)에도, 새 타일이 생성되는 현상이 발생했습니다. 이는 2048의 기본 규칙을 위반하는 동작으로, 사용자 경험에 직접적인 영향을 주는 문제였습니다.`,
    },
    {
      title: `[해결]`,
      content: `타일 이동 계산을 수행하기 전에 현재 보드 배열을 별도로 저장해두고, 사용자 입력 후 계산 로직이 적용된 결과 배열과 이를 비교하도록 처리했습니다. 두 배열의 값이 동일한 경우에는 실제로 이동이 발생하지 않은 것으로 판단하고, 해당 입력에서는 새 타일 생성 로직이 실행되지 않도록 분기 처리를 추가했습니다.`,
    },

    {
      title: `[결과]`,
      content: `이제 실제로 보드가 변한 입력에서만 새 타일이 생성되어 2048의 규칙과 동일한 흐름으로 안정화되었습니다.`,
    },
  ];

  // 이슈 2) 반응형에서 애니메이션 거리 오차
  const responsiveAnimationIssueData = [
    {
      title: `[문제]`,
      content: `타일 이동 애니메이션을 만들 때 “얼마나 이동해야 하는지(px)” 계산이 틀어지면, 반응형 환경에서 타일이 칸 중심에 정확히 맞지 않고 어긋나는 문제가 발생했습니다. 특히 보드의 gap(칸 사이 간격)까지 고려하지 않으면 오차가 누적되었습니다.`,
    },
    {
      title: `[해결]`,
      content: `이동 거리(moveLength)를 “칸(box)의 실제 width + 보드 gap”을 getComputedStyle로 계산해 동적으로 결정했습니다.
                즉, 화면 크기/보드 사이즈가 바뀌어도 항상 실제 렌더링된 값을 기준으로 이동하도록 바꿨습니다.`,
    },
    {
      title: `[결과]`,
      content: `보드 크기(3x3/4x4/5x5)와 화면 크기가 달라도, 타일 이동 애니메이션이 칸 기준으로 정확히 정렬되도록 개선되었습니다.`,
    },
  ];

  // 이슈 3) 애니메이션 중 연속 입력으로 상태 꼬임
  const inputSyncIssueData = [
    {
      title: `[문제]`,
      content: `타일 이동을 애니메이션으로 보여주는 동안 사용자가 연속 입력을 하면, 화면(애니메이션 진행 중)과 실제 상태 업데이트(보드 값 반영)가 서로 엇갈려 동작할 수 있었습니다. 결과적으로 “이동이 끝나기도 전에 다음 이동이 들어오는” 상태 꼬임 문제가 발생했습니다.`,
    },
    {
      title: `[해결]`,
      content: `애니메이션 진행 시간(0.3초)에 맞춰 입력을 잠시 막는 inputDelay를 적용했습니다. 또한 값 업데이트/승리 체크 같은 후속 로직은 setTimeout으로 애니메이션 종료 시점 이후에 실행되도록 동기화했습니다.`,
    },
    {
      title: `[결과]`,
      content: `연속 입력 상황에서도 한 번의 입력 흐름이 끝난 뒤 다음 입력이 처리되어, 상태 꼬임 없이 안정적으로 동작하게 되었습니다.`,
    },
  ];

  // 이슈 4) 빌드 환경에서 SVG 아이콘 경로 깨짐
  const assetBuildIssueData = [
    {
      title: `[문제]`,
      content: `개발 환경에서는 상대경로로 svg 파일을 img src에 넣어도 동작했지만, Vite 빌드 이후 배포 환경에서는 정적 자산 경로가 달라져 아이콘이 깨지는 문제가 발생했습니다.`,
    },
    {
      title: `[해결]`,
      content: `svg를 “문자열 경로로 직접 넣는 방식” 대신, import로 가져와 번들러가 관리하는 자산 URL을 사용하도록 변경했습니다. 그 결과 배포 환경에서도 동일하게 아이콘이 로드되도록 처리했습니다.`,
    },
    {
      title: `[결과]`,
      content: `배포 환경에서 BGM on/off 아이콘이 안정적으로 표시되며, 개발/빌드 환경 차이로 발생하던 리소스 로딩 문제가 해소되었습니다.`,
    },
  ];

  // 이슈 5) 승리/새 게임 상태에서 Undo로 상태 불일치
  const gameStateIssueData = [
    {
      title: `[문제]`,
      content: `게임을 막 시작한 초기 상태이거나 이미 승리한 상태에서 되돌리기(Undo)를 실행할 경우, 이전 데이터가 정상적으로 존재하지 않아 과거 데이터가 불러와지거나 화면이 비어버리는 치명적인 문제가 발생했습니다.`,
    },
    {
      title: `[해결]`,
      content: `되돌리기(Undo)는 마지막 이동 시점의 보드 상태를 복원하는 방식이었기 때문에, 게임 시작 직후나 재시작 직후에는 참조할 이전 상태가 존재하지 않는 문제가 있었습니다. 이로 인해 빈 배열 또는 잘못된 초기 값이 복원되는 현상이 발생했습니다.

            이를 해결하기 위해 게임 시작 직후를 감지하는 플래그(newGameCheck)와 승리 상태를 나타내는 플래그(GameWin)를 분리해 관리하고, 게임오버·승리 상태·새 게임 시작 직후에는 Undo가 실행되지 않도록 조건을 추가했습니다.`,
    },

    {
      title: `[결과]`,
      content: `되돌리기(Undo)가 허용되는 상태에서만 안정적으로 동작하게 되어, 승리/재시작/홈 이동 같은 전환 구간에서도 상태 불일치 문제를 해결하였습니다.`,
    },
  ];

  return (
    <div className={style.project}>
      <ProjectPreviewCard bgURL="/game_2048.png" projectLink="https://3lines-2048.netlify.app/" />

      <div className={style.projectDesc}>
        <ProjectCard
          title="2048 Game"
          gitHubLink="https://github.com/teakyungg/2048Game"
          projectDesc={`Vanilla TypeScript 환경에서 2048 게임을 구현한 팀 프로젝트입니다.
                        (담당: 타일 이동 로직/이동 애니메이션/입력-애니메이션 동기화/일부 모드 예외·빌드 안정화)`}
        />

        <ProjectSkill skillData={skillData} />

        <ProjectDescCard>
          <div className={style.descTitle}>초기 설계</div>
          <div className={style.descContent}>
            <p>- 2048의 핵심 규칙(이동/병합)을 “계산 결과”로 분리해 애니메이션과 상태 업데이트를 분리했습니다.</p>
            <p>- 반응형에서도 타일이 정확히 정렬되도록, 실제 렌더링 값을 기준으로 이동 거리를 계산했습니다.</p>
          </div>

          {basicDesignData.map((value, index) => (
            <details key={`basicDesignData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>구현 도구 선택</div>
          <div className={style.descContent}>
            <p>- 좌표/배열 계산이 많은 게임 특성상 TypeScript로 실수를 줄이려 했습니다.</p>
            <p>- Vite 환경에서 정적 자산(svg 등)까지 빌드/배포 관점으로 안정화했습니다.</p>
          </div>

          {toolData.map((value, index) => (
            <details key={`toolData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>1차 구현 결과</div>
          <p>{`타일 이동·병합 로직과 이동 애니메이션을 연결해, “키 입력 → 이동 애니메이션 → 값 반영”의 기본 게임 루프를 완성했습니다. 다만 QA 과정에서 사용자 경험과 안정성에 영향을 줄 수 있는 여러 문제들을 확인했습니다.

              [발견된 문제]
              - 이동이 발생하지 않았음에도 새 타일이 생성되는 문제
              - 반응형 환경에서 타일 이동 애니메이션 위치 오차
              - 애니메이션 진행 중 연속 입력으로 인한 상태 꼬임
              - Vite 빌드 환경에서 SVG 아이콘 경로가 깨지는 문제
              - 승리/새 게임 상태에서 Undo 동작 예외 처리 미흡

              위 문제들은 게임 규칙 이해와 조작 경험에 직접적인 영향을 준다고 판단해, 품질 개선 관점에서 추가적인 수정 작업을 진행했습니다.`}</p>
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>무효 이동에서도 새 타일 생성되는 문제 개선</div>
          {invalidMoveIssueData.map((value, index) => (
            <details key={`invalidMoveIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>반응형 환경에서 타일 이동 애니메이션 오차 개선</div>
          {responsiveAnimationIssueData.map((value, index) => (
            <details key={`responsiveAnimationIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>애니메이션 중 연속 입력으로 인한 상태 꼬임 방지</div>
          {inputSyncIssueData.map((value, index) => (
            <details key={`inputSyncIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>Vite 빌드 환경에서 SVG 아이콘 경로 문제 해결</div>
          {assetBuildIssueData.map((value, index) => (
            <details key={`assetBuildIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>승리/새 게임 상태에서 되돌리기 예외 처리로 안정화</div>
          {gameStateIssueData.map((value, index) => (
            <details key={`gameStateIssueData ${index}`}>
              <summary>{value.title}</summary>
              <p>{value.content}</p>
            </details>
          ))}
        </ProjectDescCard>

        <ProjectDescCard>
          <div className={style.descTitle}>2차 구현 결과</div>
          <p>{`QA에서 발견된 “규칙 위반(무효 이동 타일 생성)”, “반응형 애니메이션 오차”, “연속 입력 동기화”, “빌드 자산 경로”, “승리/Undo 예외”를 개선해 사용자 입력 흐름과 화면 동작이 안정적으로 일치하도록 완성도를 올렸습니다.`}</p>
        </ProjectDescCard>
      </div>
    </div>
  );
}
