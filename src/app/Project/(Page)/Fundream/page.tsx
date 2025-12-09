import { Highlight } from "@/component/Highlight/Highlight";
import style from "../page.module.css";
import Image from "next/image";

export default function Fundream() {

    const skillData = ['Next.js', 'React','REST API', 'Git', 'GitHub', 'Prettier','반응형', '팀 프로젝트'];
    const skillItem = skillData.map((skill) => <li key={skill}><Highlight>{skill}</Highlight></li>);

    const NewProductData = ['CreateProjectTitle','CategoryBar','ProductSummaryInput']
    const NewProductItem = NewProductData.map((value) => <Highlight key={value}>{value}</Highlight>)

    const NewProductDetailData = ['ProjectIntro','ProjectNotice','ProjectCategory','ProjectPlan','ProjectThumbnail','IsAuthDone','RegisterBtnModal'];
    const NewProductDetailItem = NewProductDetailData.map((value) => <Highlight key={value}>{value}</Highlight>)

    const useProjectStoreData = [
        {title: 'userSubContent', text:'요약·부제목 텍스트'},
        {title: 'userGoalPrice', text:'목표 금액'},  
        {title: 'userMainImage', text:'대표 이미지'},  
        {title: 'userTag', text:'해시태그 문자열'},
        {title: 'userCategory', text:'선택된 카테고리'}, 
        {title: 'userDate', text:'시작일·종료일'}, 
    ]
    const useProjectStoreItem = useProjectStoreData.map((value) => <li key={value.title}><Highlight>{value.title}</Highlight> : {value.text}</li>)

    return (
        <div className={style.project}>
            {/* 대표이미지 */}
            <a 
            className={style.heroImg} 
            style={{backgroundImage : "url(/fundream.png)"}} 
            href="https://final-11-cutie.vercel.app/" target="_blank"> 
                <div className={style.btnLinkBg}>
                    <span className={style.btnLink}>바로가기</span>
                </div>
            </a>

            {/* 내용 */}
            <div className={style.projectDesc}>
                <div className={style.mainTitle}>fundream</div>

                <div className={style.skill}>
                    <span>프로젝트 특징 :</span>
                    <ul className={style.skillList}>{skillItem}</ul>
                    <div style={{paddingTop:"20px"}}>(팀 프로젝트에서 제가 담당한 부분만 서술하였습니다.)</div>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>NewProduct 페이지 설계</div>
                    <div className={style.descContent}>
                    {`fundream은 펀딩페이지로 새 상품을 등록하는 페이지가 있습니다.
                      저는 그 중에서 새로운 상품을 등록하는 페이지를 담당하게 되었습니다.`}
                    </div>

                    <div style={{display: "flex", alignItems:"center", gap:"10px"}}>
                        {`컴포넌트 : `}{NewProductItem}
                    </div>

                    <div style={{display:'flex'}}>
                       <div>
                         <Image src={'/fundream/pc newproject.png'} width={580} height={514} alt="fundream pc newproject"/>
                         <div style={{textAlign:"center", paddingTop:"10px"}}>pc 버전</div>
                       </div>
                        
                        <div>
                            <Image src={'/fundream/mobile newproject.png'} width={580} height={514} alt="fundream mobile newproject"/>
                            <div style={{textAlign:"center", paddingTop:"10px"}}>mobile 버전</div>
                        </div>
                    </div>

                    <div className={style.descContent}>
                    {`하단의 약관 동의 부분은 useState를 통하여 모두 동의하지 않으면 다음 페이지도 넘어갈 수 없도록 구성하였고
                      
                      로그인하지 않은 사용자도 URL로 직접 접근할 수 있기 때문에, Zustand의 useUserStore를 활용해 로그인 여부를 확인하고
                      비로그인 계정은 접근을 제한하도록 구성했습니다.

                      이를 통해 사용자가 
                      "프로젝트를 등록할 수 있는 주체인지 먼저 확인 → 기본 정보 입력 → 동의 완료 후 상세 설정 페이지로 진입"
                      순서가 되도록 설계하였습니다.
                      `}
                    </div>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>프로젝트 상세 설정 – NewProductDetail와 하위 섹션 구성</div>
                    <div className={style.descContent}>
                    {`펀딩 물건을 등록하기 위한 최종 상세 설정 페이지 입니다.`}
                    </div>

                     <div style={{display: "flex",alignItems:"center", gap:"10px"}}>
                        {`컴포넌트 : `}{NewProductDetailItem}
                    </div>

                    <div style={{display:'flex'}}>
                       <div>
                         <Image src={'/fundream/pc NewProductDetail.png'} width={580} height={414} alt="fundream pc NewProductDetail"/>
                         <div style={{textAlign:"center", paddingTop:"10px"}}>pc 버전</div>
                       </div>
                        
                        <div>
                            <Image src={'/fundream/mobile NewProductDetail.png'} width={580} height={414} alt="fundream mobile NewProductDetail"/>
                            <div style={{textAlign:"center", paddingTop:"10px"}}>mobile 버전</div>
                        </div>
                    </div>

                    <div className={style.descContent}>
                    {`현재 페이지에서는 펀딩 물건 등록값을 Zustand에 저장하여 필수 입력 조건중 하나라도 누락되면 
                      최종적으로 물건을 등록시킬 수 없도록 검증 로직을 구성했습니다.`}
                    </div>
                </div>

                <div className={style.desc}>
                    <div className={style.descTitle}>프로젝트 등록용 상태 관리 – useProjectStore 설계</div>
                    <div className={style.descContent}>
                    {`프로젝트 등록이 여러 단계에 걸쳐 진행되다 보니, 
                      페이지를 이동하거나 새로고침했을 때도 입력 값이 유지가 되어야함의 필요성을 느꼈고
                      그래서 페이지를 이동하거나 새로고침했을 때도 입력 값이 유지되도록 Zustand 전역 상태를 설계했습니다.`}
                    </div>

                    <div>
                        <div>저장하는 주요 값은</div>
                        <ul style={{display:'flex', flexDirection:"column", gap:"20px", padding: "15px 0"}}>
                           {useProjectStoreItem}
                        </ul>
                        <div className={style.descContent}>
                        {`위 값들을 전역으로 저장하여 최종 물건 등록 시 입력된 정보를 확인 및 검증 로직에서 공용적으로 사용하여
                          불필요한 변수의 선언을 최소화 할 수 있었습니다.`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}