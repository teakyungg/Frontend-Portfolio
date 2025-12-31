import { Highlight } from "@/component/Highlight/Highlight";
import style from "../page.module.css";
import Image from "next/image";

export default function Portfolio() {
  const skillData = ["Next.js", "TypeScript", "GSAP", "Swiper", "Git", "GitHub", "개인 프로젝트"];
  const skillItem = skillData.map((skill) => (
    <li key={skill}>
      <Highlight>{skill}</Highlight>
    </li>
  ));

  return (
    <div className={style.project}>
      {/* 대표이미지 */}
      <a
        className={style.heroImg}
        style={{ backgroundImage: "url(/portfolio.png)" }}
        href="https://frontend-portfolio-six-pied.vercel.app/"
        target="_blank"
      >
        <div className={style.btnLinkBg}>
          <span className={style.btnLink}>바로가기</span>
        </div>
      </a>

      {/* 내용 */}
      <div className={style.projectDesc}>
        <div className={style.projectHeader}>
          <div className={style.mainTitle}>Portfolio</div>
          <a href="https://github.com/teakyungg/Frontend-Portfolio" title="GitHub 바로가기" target="_blank">
            <Image src={"/github_logo_icon.svg"} width={40} height={40} alt="github_logo_icon" />
          </a>
        </div>
        <div className={style.descContent} style={{ position: "relative", bottom: "20px" }}>
          {`Portfolio는 제가 지금까지 진행한 프로젝트와 기술 스택, 학습 과정을 한 눈에 보여주기 위해 Next.js로 직접 제작한 포트폴리오 사이트입니다.
                     GSAP 인트로 애니메이션, 섹션별 스크롤 네비게이션, Notion·GitHub·메일 연동을 통해 제 작업과 성장 기록에 쉽게 접근할 수 있도록 구성했습니다.`}
        </div>

        <div className={style.skill}>
          <span>프로젝트 특징 :</span>
          <ul className={style.skillList}>{skillItem}</ul>
        </div>

        <div className={style.desc}>
          <div className={style.descTitle}>GSAP로 Intro 등장 애니메이션 구현</div>

          <div className={style.descContent}>
            {`Intro 영역의 텍스트와 아이콘 요소들을 useRef 배열로 수집하고,
                      GSAP 애니메이션 옵션도 배열 형태로 정의하여 한 번의 반복문으로 순차 등장 애니메이션이 실행되도록 구성했습니다.
                    
                      이를 통해 코드 중복 없이 요소별 연출을 유연하게 관리할 수 있었고,
                      페이지 첫 진입 시 사용자 시선을 자연스럽게 위 → 아래 흐름으로 안내하는 인터랙션을 만들었습니다.`}
          </div>
        </div>

        <div className={style.desc}>
          <div className={style.descTitle}>Next.js App Router 기반 단일 페이지 포트폴리오</div>

          <Image src={"/portfolio/app page.tsx.png"} width={378} height={400} alt="portfolio app page.tsx" />

          <div className={style.descContent}>
            {`Next.js(App Router)로 Intro, Project, Skills, StudyLog, AboutMe, Mail 섹션을 한 페이지에 구성한 개인 포트폴리오입니다.
                      page.tsx에서 각 섹션을 컴포넌트로 분리하여 유지 보수가 쉽도록 구성하였습니다.`}
          </div>
        </div>

        <div className={style.desc}>
          <div className={style.descTitle}>프로젝트 탭 전환 기능 직접 구현</div>

          <div style={{ display: "flex" }}>
            <Image src={"/portfolio/project list.png"} width={580} height={400} alt="portfolio project list" />
            <Image src={"/portfolio/projectdata.png"} width={580} height={400} alt="projectdata list" />
          </div>

          <div className={style.descContent}>
            {`프로젝트 데이터를 태그 기반으로 구조화하여, 선택한 카테고리(All · Team · Personal)에 맞는 프로젝트만 필터링해 렌더링되도록 구현했습니다.`}
          </div>
        </div>

        <div className={style.desc}>
          <div className={style.descTitle}>프로젝트 페이지 공용 스타일 구조화</div>

          <Image
            src={"/portfolio/project folder structure.png"}
            width={187}
            height={258}
            alt="portfolio project folder structure"
          />

          <div className={style.descContent}>
            {`프로젝트 소개 페이지에서 반복적으로 사용되는 스타일을 page.module.css에 공용 클래스로 분리해 관리했습니다.  
                      세부적으로 다른 디자인이 필요한 부분만 개별 page.tsx에서 추가로 조정하는 방식으로 구성하여, 스타일 재사용성을 높이고 유지보수 효율을 개선했습니다.`}
          </div>
        </div>

        <div className={style.desc}>
          <div className={style.descTitle}>클립보드 복사 기능으로 연락 UX 개선</div>

          <div className={style.descContent}>
            {`Mail 섹션에서는 사용자가 제 이메일을 바로 복사해 사용할 수 있도록
                      navigator.clipboard API를 적용했습니다.
                    
                      아이콘 클릭만으로 메일 주소가 즉시 복사되기 때문에,
                      별도의 입력 과정 없이 바로 연락할 수 있는 사용자 친화적인 흐름을 제공하였습니다.`}
          </div>
        </div>
      </div>
    </div>
  );
}
