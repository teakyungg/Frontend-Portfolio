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

                <div className={style.skill}>
                    <span>프로젝트 특징 :</span>
                    <ul className={style.skillList}>{skillItem}</ul>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>다양한 게임 모드(일반 / 하드 / 타임어택 / AI 대결) 구현</div>
                  
                    <div className={style.descContent}>
                    {`그냥 2048을 “똑같이 구현했다”에서 끝나는 것보다,
                      게임성을 확장해서 다시 해보고 싶은 요소를 넣는 걸 목표로 모드를 나눴습니다.`}
                    </div>

                    <ul style={{display:'flex', flexDirection:'column', gap:'20px', padding:'20px 0'}}>
                        {gameModeItem}
                    </ul>

                    <div className={style.descContent}>
                    {`모드 전환 시에는 공통으로 사용하는 보드/그리드 초기화 함수를 호출하도록 구성해,
                      “모드는 다르지만 사용하는 기반 로직은 최대한 공유”되도록 설계했습니다.`}
                    </div>
                </div> 

                <div className={style.desc}>
                    <div className={style.descTitle}>TypeScript + 모듈화로 게임 로직 구조화</div>
                    <Image src={'/2048/file structure.png'} width={328} height={313} alt="2048 file structure"/>
                    <div className={style.descContent}>
                    {`초기 설계 단계에서, 하나의 파일에 타일 이동·병합 로직, 점수 계산, 게임 오버 판단, DOM 조작이 모두 섞이면
                      규칙을 수정하거나 새로운 모드를 추가할 때마다 코드 전반이 깨질 수 있다는 문제를 예상했습니다.
                      이를 피하기 위해 게임 로직을 역할별로 분리해 설계했습니다.`}
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
                    <div className={style.descTitle}>LocalStorage를 활용한 오늘·전체 최고 기록 관리</div>
                
                    <div className={style.descContent}>
                    {`2048 게임 특성상 “한 번만 하고 끝”이 아니라, 계속 점수를 갱신하면서 도전하는 경우가 많다고 판단했습니다.
                      그래서 점수 시스템은 단순히 현재 점수만 보이는 것이 아니라 다음처럼 설계했습니다.`}
                    </div>

                    <ul style={{display:'flex', flexDirection:'column', gap:'20px', padding:'20px 0'}}>
                        {scoreItem}
                    </ul>

                    <div className={style.descContent}>
                    {`위 변수를 선언하고 LocalStorage를 이용하여 관리하여 사용자는
                     “오늘 얼마나 성장했는지”와 “전체 최고 기록은 어디까지인지”를 한눈에 비교할 수 있고,
                     LocalStorage 키 설계와 날짜 기반 상태 초기화 로직을 직접 구현해 볼 수 있었습니다.
                    `}
                    </div>
                </div> 

                <div className={style.desc}>
                    <div className={style.descTitle}>반응형 레이아웃과 게임 가이드 UI</div>
                
                    <div className={style.descContent}>
                    {`마지막으로, 데스크톱과 모바일에서 모두 플레이가 가능하도록 레이아웃과 안내 UI를 구성했습니다.`}
                    </div>

                    <div>
                        <Image src={'/2048/pc.png'} width={508} height={306} alt="2048 pc"/>
                        <Image src={'/2048/mobile.png'} width={580} height={404} alt="2048 mobile"/>
                    </div>

                    <div style={{paddingTop:'20px'}}>
                        <Highlight>@media (max-width: 767px)</Highlight>를 기준으로
                        <ul style={{padding:'15px 0 0 15px', display:'grid', gap:'10px' }}>
                            <li>→ 게임 보드, 타임어택 게이지, 버튼 크기를 vw 단위로 재조정</li>
                            <li>→ 모바일에서는 하나의 컬럼으로 세로 배치해 시인성을 확보</li>
                        </ul>
                    </div>

                    <div style={{padding:'20px 0'}}>
                        데스크톱에서는
                        <ul style={{padding:'15px 0 0 15px'}}>
                            <li>→ 1P/AI 보드, 점수판, 게임 가이드를 좌우로 배치해 한 화면에서 점수·기록·조작법·보드 상태를 동시에 볼 수 있도록 구성</li>
                        </ul>
                    </div>

                    <div className={style.descContent}>
                    {`또한 화면에는 키보드 조작법과 모바일 스와이프 가이드를 함께 표시해,
                      처음 접속한 사용자도 조작 방식을 쉽게 이해할 수 있도록 인터페이스를 정리했습니다.`}
                    </div>
                </div> 
            </div>
        </div>
    )
}