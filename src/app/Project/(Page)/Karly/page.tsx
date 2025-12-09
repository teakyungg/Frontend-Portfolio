import { Highlight } from "@/component/Highlight/Highlight";
import style from "../page.module.css";
import Image from "next/image";

export default function Karly() {

    const skillData = ['Vite', 'TailWind CSS', 'Git', 'GitHub', 'Prettier', '팀 프로젝트'];
    const skillItem = skillData.map((skill) => <li key={skill}><Highlight>{skill}</Highlight></li>);

    return (
        <div className={style.project}>
            {/* 대표이미지 */}
            <a 
            className={style.heroImg} 
            style={{backgroundImage : "url(/karly.png)"}} 
            href="https://vision-karly.netlify.app/src/item/main" target="_blank"> 
                <div className={style.btnLinkBg}>
                    <span className={style.btnLink}>바로가기</span>
                </div>
            </a>

            {/* 내용 */}
            <div className={style.projectDesc}>
                <div className={style.mainTitle}>karly</div>
                <div className={style.descContent} style={{position:"relative", bottom:"20px"}}>
                    {`Karly 프로젝트는 마켓컬리 UI를 클론하며 반응형 레이아웃, Tailwind 테마 변수, 그리고 접근성을 고려한 UI 구조를 구현한 팀 프로젝트입니다.`}
                </div>

                <div className={style.skill}>
                    <span>프로젝트 특징 :</span>
                    <ul className={style.skillList}>{skillItem}</ul>
                    <div style={{paddingTop:"20px"}}>(팀 프로젝트에서 제가 담당한 부분만 서술하였습니다.)</div>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>Vite MPA 환경 & 컴포넌트 구조 설계</div>
                    <div className={style.descContent}>
                    {`초기에는 필요한 페이지를 모두 import로 직접 등록하는 방식이었기 때문에,
                      페이지가 추가될 때마다 설정을 수정해야 하는 비효율성이 있었습니다.

                      이를 개선하기 위해, 프로젝트의 HTML 파일들이 모두 특정 경로(src) 아래에 위치한다는 점에 착안하여
                      vite.config.js에서 findAllHtmlFiles 유틸을 구현해 src 내부의 모든 HTML 파일을 자동으로 검색하고
                      (멀티 페이지) 입력으로 등록되도록 구성했습니다.

                      또한 @tailwindcss/vite 플러그인과 appType: 'mpa' 설정을 함께 적용해,
                      각 HTML 파일이 독립적인 페이지로 빌드되고 필요한 CSS도 페이지 단위로 생성되도록 개발 환경을 구축했습니다.
                    `}</div>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>Grid, Flex를 사용한 반응형 구현</div>

                    <div>
                        <Image src={'/karly/pc.png'} width={580} height={300} alt="karly pc"/>
                        <Image src={'/karly/mobile.png'} width={580} height={300} alt="karly mobile"/>
                    </div>
                    
                    <div className={style.descContent}> 
                    {`Flex, Grid, Media Query를 사용하여 모바일에도 대응이 가능하도록 설계되었으며 원본 페이지에서 반응형으로 문제가 있던 점을 수정하여 작업하였습니다.`}
                    </div>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>시멘틱 마크업 + 접근성(Accessibility) 개선</div>

                    <div style={{display: "flex", flexDirection: "column", gap:"10px"}}>
                        <Highlight>{`<div class="divider" aria-hidden="true">|</div>`}</Highlight> 
                        <Highlight>{`<img src="/asset/img/logo-footer.svg" alt="마켓칼리 로고" width="82" height="20"/>`}</Highlight> 
                        <Highlight>{`<h2 class="sr-only">마켓칼리 - 풀무원 탱탱쫄면 4입 상세 페이지</h2>`}</Highlight> 
                    </div>
                        
                    <div className={style.descContent}> 
                    {`상품 상세 페이지에는 sr-only 헤딩을 추가해 스크린리더 사용자도 페이지 정보를 인지할 수 있도록 했고,
                      장식 요소는 aria-hidden을 활용해 불필요한 읽기를 차단하는 등 접근성을 고려한 마크업을 적용했습니다.”

                      “마지막 스프린트에서 시멘틱 태그 정리, 대체 텍스트, SEO 메타 구조를 점검하는 식으로
                       비기능적 요구사항(접근성, SEO, 크로스 브라우징)을 별도 목표로 두고 개선 작업을 진행했습니다`}
                    </div>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>페이지 검증</div>

                    <Image src={'/karly/lighthouse.png'} width={384} height={361} alt="karly light house"/>
                    
                    <div className={style.descContent}> 
                    {`만들어진 웹 페이지의 품질을 검증하기 위해 Google Lighthouse로 성능·접근성·SEO 등 주요 항목을 분석하였으며, 
                      평균 95.25점이라는 높은 평가를 받았습니다. 이를 통해 전반적인 웹 성능과 구조가 표준에 맞게 구현되었음을 확인할 수 있었습니다.

                      또한 Chrome, Firefox, Microsoft Edge 등 주요 브라우저에서 호환성 테스트를 진행한 결과, 
                      모든 기능이 정상적으로 동작하며 UI가 동일하게 렌더링되는 것을 검증했습니다.`}
                    </div>
                </div>
            </div>
        </div>
    )
}