import { Highlight } from "@/component/Highlight/Highlight";
import style from "../page.module.css";
import Image from "next/image";

export default function Starbucks() {

    const skillData = ['GSAP', 'Swiper', 'Git', 'GitHub', '개인 프로젝트'];
    const skillItem = skillData.map((skill) => <li key={skill}><Highlight>{skill}</Highlight></li>);

    return (
        <div className={style.project}>
            {/* 대표이미지 */}
            <a 
            className={style.heroImg} 
            style={{backgroundImage : "url(/starbucks.png)"}} 
            href="https://startbycks-teaktung.netlify.app/" target="_blank"> 
                <div className={style.btnLinkBg}>
                    <span className={style.btnLink}>바로가기</span>
                </div>
            </a>

            {/* 내용 */}
            <div className={style.projectDesc}>
                <div className={style.mainTitle}>starbucks</div>
                <div className={style.descContent} style={{position:"relative", bottom:"20px"}}>
                    {`Starbucks 프로젝트는 GSAP ScrollTrigger와 Swiper를 활용해 실무형 인터랙션을 구현한 랜딩 페이지 프로젝트입니다.`}
                </div>

                <div className={style.skill}>
                    <span>프로젝트 특징 :</span>
                    <ul className={style.skillList}>{skillItem}</ul>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>Vite + 섹션 단위 모듈 구조 설계</div>
                    <div className={style.descContent}>
                    {`초기 설계 단계에서, 하나의 JS 파일에서 페이지 전체 로직을 모두 처리하면 섹션 추가·수정 시 영향 범위가 커지고 유지보수가 어려워질 것을 우려했습니다.
                      그래서 main.js에서 다음과 같이 구조를 설계했습니다.`}
                    </div>

                    <Image src={'/starbucks/import.png'} width={728} height={122} alt="starbucks import"/>

                    <div className={style.descContent}>
                    {`위와 같은 방식으로 설계하여 
                      “섹션 하나 = 하나의 디렉터리(HTML 구조 + CSS + JS)”
                      형태로 나눌 수 있었고, 새로운 섹션을 추가할 때도 해당 폴더에 CSS/JS만 추가하면 자동으로 로드되도록 구성해 확장성과 재사용성을 높였습니다.`}
                    </div>       
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>Swiper를 활용한 공지·이벤트·어워즈 슬라이더 구현</div>
                    <div className={style.descContent}>
                    {`스타벅스 메인 페이지 특성상 여러 구역에서 슬라이더 UI가 반복적으로 등장합니다.
                      이를 Swiper로 통일해 구현하면서, 각 구역별 UX에 맞는 옵션을 따로 설계했습니다.
                       
                      특히 고려하였던 점은 swiper 애니메이션이 자동으로 실행되는 옵션이 들어있었습니다. 
                      이 옵션이 사용자가 현재 탭을 사용하지 않아도 계속 실행되어서 불필요하게 리소스가 사용되는 문제가 있었습니다.
                      `}
                    </div>

                    <div className={style.descContent}>
                        {`이를 해결하기 위해`}<Highlight>document.visibilityState</Highlight>{`를 감지해 
                        탭이 비활성화되면 autoplay.stop(), 다시 돌아오면 autoplay.start()로
                        백그라운드 상태에서 불필요한 애니메이션을 중단하도록 구현하였습니다.`}
                    </div>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>GSAP ScrollTrigger로 섹션별 스크롤 인터랙션 구현</div>
                    <div className={style.descContent}>
                    {`season-menu, reserve-coffee, near-starbucks 등 주요 섹션에는
                      단순한 스크롤 고정 이미지가 아니라, 스크롤 위치에 따라 콘텐츠가 자연스럽게 등장하는 인터랙션을 넣었습니다.
                      
                      여기서 고려해야 했던 점은 “스타벅스 프로모션” 영역을 열고 닫을 때
                      아래에 위치한 섹션들의 시작 지점이 바뀐다는 점입니다.
                      ScrollTrigger는 생성 시점의 위치를 기준으로 계산되기 때문에,
                      레이아웃이 변경되면 기존 애니메이션들이 이전 위치값을 기준으로 동작하는 문제가 발생했습니다.
                      
                      이를 해결하기 위해 프로모션 영역의 높이가 완전히 변경된 뒤
                      저장된 ScrollTrigger 인스턴스를 모두 제거한 뒤 다시 생성하고,
                      마지막에 ScrollTrigger.refresh()를 호출하여 새로운 레이아웃 기준으로 정확히 재계산되도록 구성했습니다.`}
                    </div>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>사이드바 & 상단 이동 버튼으로 스크롤 UX 개선</div>
                    <div className={style.descContent}>
                    {`긴 랜딩 페이지 특성상 사용자가 스크롤을 많이 하게 되는 만큼,
                      부가 메뉴(사이드바)와 상단 이동 버튼의 노출 타이밍을 따로 설계했습니다.
                      
                      document.body.scrollHeight * 0.3의 값을 사용하여
                      스크롤이 화면 길이의 30%가 넘는다면
                      사이드바가 사라지도록 구현하였고 상단 올림 버튼이 나오도록 구성하였습니다.`}
                    </div>

                    <div style={{display:'flex', justifyContent:"space-around"}}>
                        <div>
                            <div style={{display:"flex", gap:"40px", alignItems:"center"}}>
                            <Image src={'/starbucks/sidebar.png'} width={178} height={357} alt="starbucks sidebar"/>
                            <Image src={'/starbucks/notupbutton.png'} width={80} height={65} alt="starbucks sidebar"/>
                            </div>

                            <div style={{paddingTop:"20px"}}>
                            {`현재 스크롤이 30% 이하일 때`}
                            </div>
                        </div>

                        <div>
                            <div style={{display:"flex", gap:"40px", alignItems:"center"}}>
                                <Image src={'/starbucks/notsidebar.png'} width={178} height={357} alt="starbucks sidebar"/>
                                <Image src={'/starbucks/upbutton.png'} width={80} height={65} alt="starbucks sidebar"/>
                            </div>

                            <div style={{paddingTop:"20px"}}>
                            {`현재 스크롤이 30% 이상일 때`}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>시멘틱 마크업 + sr-only 클래스로 접근성 고려</div>
                    <div className={style.descContent}>
                    {`마크업은 단순한 div 나열이 아니라, 가능한 한 시멘틱 태그와 접근성에 맞추어 구성했습니다.
                      header, nav, main, section, footer 등 시멘틱 태그로 페이지 구조를 구분

                      페이지 상단에는
                      <h1 class="sr-only">스타벅스 코리아</h1> 처럼
                      스크린리더가 페이지의 목적을 인지할 수 있도록 숨김 헤딩을 추가

                      각 섹션에서도
                      시각적으로는 텍스트 타이틀 이미지를 사용하더라도,

                      <h2 class="sr-only">서브 메뉴</h2> 와 같이 보조 헤딩을 배치해
                      스크린리더 사용자도 섹션 구분을 인식할 수 있도록 설계

                      검색창, 폼 요소 등에는 label을 sr-only와 함께 사용해
                      디자인을 해치지 않으면서도 폼 필드의 역할이 스크린리더에 노출되도록 처리

                      이를 통해, 시각적인 완성도뿐 아니라 실제 사용자 보조기기 사용 환경까지 고려한 마크업을 연습할 수 있었습니다.`}
                    </div> 
                </div>

            </div>    
        </div>
    )
}