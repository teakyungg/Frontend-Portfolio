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

                <div className={style.skill}>
                    <span>프로젝트 특징 :</span>
                    <ul className={style.skillList}>{skillItem}</ul>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>UI 스타일을 일관성 확보: TailWind 도입</div>
                    <div className={style.descContent}>
                    {`초기 회의 단계에서, 팀원마다 사용하는 px/rem/em 단위 및 여백·폰트 크기 기준이 달라질 경우 UI 전체의 일관성이 무너질 수 있다는 문제를 파악했습니다. 
                      이를 해결하기 위해 Tailwind CSS를 도입하여 스타일 규칙을 프리셋 기반으로 통일했고, 결과적으로 디자인 일관성 확보와 개발 속도 개선 효과를 얻었습니다.`}</div>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>Tailwind 테마 변수(Theme variables) 활용</div>
                    <Image src={'/karly/css variables.png'} width={547} height={402} alt="karly css variables"/>
                    <div className={style.descContent}> 
                    {`전역 테마 변수를 최상위 레벨에서 선언해 디자인 일관성을 확보하고 개발 효율성을 개선했습니다.`}
                    </div>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>Gird, Flex를 사용한 반응형 구현</div>

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