import { Highlight } from "@/component/Highlight/Highlight";
import style from "../page.module.css";
import Image from "next/image";

export default function Game2048() {

    const skillData = ['Vite', 'Typescript', 'Eslint', 'Git', 'GitHub', 'Prettier', '팀 프로젝트'];
    const skillItem = skillData.map((skill) => <li key={skill}><Highlight>{skill}</Highlight></li>);


    const fileModuleData = [
        {title: 'add-random-cell.ts', text: '새 타일 생성 및 그리드 초기화'},
        {title: 'marge-tiles.ts', text: '방향에 따른 타일 병합 규칙 처리'},
        {title: 'can-move.ts', text: '이동 또는 병합 가능한 타일이 남아 있는지 검사'},
        {title: 'game-over.ts', text: '게임 오버 상태 관리 및 오버레이 표시'},
        {title: 'board.ts', text: '1P/AI 보드를 분리해 렌더링하는 공통 함수'},
        {title: 'score.ts', text: '점수 계산 + LocalStorage 기록 관리'},
    ]
    const fileModuleItem = fileModuleData.map((value) => <li key={value.title}>
        <Highlight>{value.title}</Highlight> : <span>{value.text}</span>
    </li>)


    const gameModeData = [
        {title: '일반 모드', text: '기본 4×4 보드에서 2048을 만드는 클래식 모드'},
        {title: '하드모드', text: '동일한 보드 크기지만 초기 배치·타일 생성 규칙을 조정해 난이도 상승'},
        {title: '타임 어택 모드', text: '상단에 HP 게이지 형태의 타이머 바를 배치하고, 게이지가 일정 시간 안에 바닥나면 게임 오버가 되도록 애니메이션과 연동'},
        {title: 'AI 대결 모드', text: '사용자 보드(board)와 AI 보드(board2)를 나란히 렌더링 하고 ai-score를 별도로 두어 AI와 점수 경쟁을 하는 구조로 설계'},
    ]
    const gameModeItem = gameModeData.map((value) => <li key={value.title}>
        <Highlight>{value.title}</Highlight> : <span>{value.text}</span>
    </li>)


    const scoreData = [
        {title: 'currentScore', text: '현재 플레이의 점수'},
        {title: 'bestScoreTotal', text: '전체 플레이 기준 최고 점수'},
        {title: 'bestScoreToday + bestScoreTodayDate', text: '오늘 날짜 기준 최고 점수'},
    ]
    const scoreItem = scoreData.map((value) => <li key={value.title}>
        <Highlight>{value.title}</Highlight> : <span>{value.text}</span>
    </li>)

    return (
        <div className={style.project}>
            {/* 대표이미지 */}
            <a 
            className={style.heroImg} 
            style={{backgroundImage : "url(/game_2048.png)"}} 
            href="https://3lines-2048.netlify.app/" target="_blank"> 
                <div className={style.btnLinkBg}>
                    <span className={style.btnLink}>바로가기</span>
                </div>
            </a>

            {/* 내용 */}
            <div className={style.projectDesc}>
                <div className={style.mainTitle}>2048 (웹 퍼즐 게임)</div>
                <div className={style.descContent} style={{position:"relative", bottom:"20px"}}>
                    {`JavaScript를 활용해 동적인 웹 페이지를 만들어보고자 했고, 
                      사용자와의 상호작용이 많은 콘텐츠를 고민하던 중 2048 게임이 적합하다고 판단하여 만든 프로젝트 입니다.`}
                </div>

                <div className={style.skill}>
                    <span>프로젝트 특징 :</span>
                    <ul className={style.skillList}>{skillItem}</ul>
                    <div style={{paddingTop:"20px"}}>(팀 프로젝트에서 제가 담당한 부분만 서술하였습니다.)</div>
                </div> 

                <div className={style.desc}>
                    <div className={style.descTitle}>TypeScript + 모듈화로 게임 로직 구조화</div>
                    <Image src={'/2048/file structure.png'} width={328} height={313} alt="2048 file structure"/>
                    <div className={style.descContent}>
                    {`초기 설계 단계에서, 하나의 파일에 타일 이동·병합 로직, 점수 계산, 게임 오버 판단, DOM 조작이 모두 섞이면
                      규칙을 수정하거나 새로운 모드를 추가할 때마다 코드 전반이 깨질 수 있다는 문제를 예상했습니다.
                      이를 피하기 위해 게임 로직을 역할별로 분리하여 팀원들과 개발하였습니다.`}
                    </div>
                    
                    <ul style={{display:'flex', flexDirection:'column', gap:'20px', padding:'20px 0'}}>
                        {fileModuleItem}
                    </ul>
                    
                    <div className={style.descContent}>
                    {`이렇게 “한 파일 = 한 책임(SRP)” 기준으로 나누면서,
                      새 모드를 추가할 때도 기존 코드를 거의 건드리지 않고 초기화/입력 처리 부분만 조합해 재사용할 수 있도록 만들었습니다.`}
                    </div>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>타일 이동·병합 로직 설계 (find-move-tile.ts)</div>
                  
                    <div className={style.descContent}>
                    {`게임 제작에 앞서, 2048 게임이 동작하는 핵심 로직을 먼저 구현하는 데 집중했습니다.

                      2048게임의 핵심은 
                      1. 특정 위치의 어떤 숫자가 있는지 기억하는 것 
                      2. 방향키 입력 시 병합이 가능한 숫자가 있는지 확인하는 것  
                      3. 병합할 수 있다면 합치고, 없다면 이동만 수행하는 것  

                      이 규칙을 기반으로 게임 맵을 2차원 배열로 구성하고,
                      현재 보드 상태와 입력된 방향에 따라 병합 여부, 이동 위치 등을 계산하는 로직을 함수 형태로 설계했습니다.
                      
                      최종적으로, 방향키만 함수에 전달하면  
                      렌더링에 필요한 최신 2차원 배열 상태를 반환하도록 구성해  
                      게임 내부 동작과 화면 렌더링을 명확히 분리할 수 있었습니다.
                    `}
                    </div>
                </div> 

                <div className={style.desc}>
                    <div className={style.descTitle}>이동 애니메이션 및 AI 모드 연동 (moveAniElement, MoveArrAI 등)</div>
                  
                    <div className={style.descContent}>
                    {`이 2048 프로젝트에는 플레이어가 직접 조작하는 일반 모드 외에도,
                      자동으로 움직이며 플레이하는 AI 모드가 존재합니다.

                      두 모드 모두에서 동일한 이동 애니메이션을 적용하기 위해,
                      타일이 실제로 이동한 좌표 정보를 기반으로 DOM 요소에 transition과 위치 변화를 부여하는 기능을
                      함수 형태로 설계했습니다. 방향키만 전달하면 그에 맞는 애니메이션이 실행되도록
                      함수형 프로그래밍 방식으로 구현했습니다.
                      
                      AI 모드는 사용자의 입력이 없는 대신 자동으로 이동 정보를 생성하기 때문에,
                      기존 사용자용 애니메이션 함수를 재사용하면서 필요한 기능을 일부 확장하여
                      AI가 움직일 때도 사람 플레이와 동일한 자연스러운 이동·병합 애니메이션이 나타나도록 구성했습니다.`}
                    </div>
                </div> 
            </div>
        </div>
    )
}