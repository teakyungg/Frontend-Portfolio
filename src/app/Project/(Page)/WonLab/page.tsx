import { Highlight } from "@/component/Highlight/Highlight";
import style from "../page.module.css";
import Image from "next/image";

export default function WonLab() {
  const skillData = ["SCSS", "Git", "GitHub", "개인 프로젝트"];
  const skillItem = skillData.map((skill) => (
    <li key={skill}>
      <Highlight>{skill}</Highlight>
    </li>
  ));

  const fileStrData = [
    { title: "index.scss, gallery.scss", text: "각 페이지에 적용될 최종 스타일을 집약한 파일" },
    { title: "_variables.scss", text: "공용 변수 파일" },
    { title: "_mixin.scss", text: "공용 mixin 파일" },
    { title: "_resetCss.scss", text: "프로젝트 전반에 적용되는 CSS Reset 스타일" },
  ];
  const fileStrItem = fileStrData.map((value) => (
    <li style={{ padding: "10px 0" }} key={value.title}>
      <Highlight>{value.title}</Highlight> : {value.text}
    </li>
  ));

  return (
    <div className={style.project}>
      {/* 대표이미지 */}
      <a
        className={style.heroImg}
        style={{ backgroundImage: "url(/WonLab.png)" }}
        href="https://teakyungg.github.io/web-1-03-scss/"
        target="_blank"
      >
        <div className={style.btnLinkBg}>
          <span className={style.btnLink}>바로가기</span>
        </div>
      </a>

      {/* 내용 */}
      <div className={style.projectDesc}>
        <div className={style.projectHeader}>
          <div className={style.mainTitle}>WonLab</div>
          <a href="https://github.com/teakyungg/WonLab" title="GitHub 바로가기" target="_blank">
            <Image src={"/github_logo_icon.svg"} width={40} height={40} alt="github_logo_icon" />
          </a>
        </div>
        <div className={style.descContent} style={{ position: "relative", bottom: "20px" }}>
          {`WonLab 프로젝트는 규모는 크지 않지만, SCSS를 학습한 이후 이를 체계적으로 활용하는 데 중점을 두고 진행한 프로젝트입니다.`}
        </div>

        <div className={style.skill}>
          <span>프로젝트 특징 :</span>
          <ul className={style.skillList}>{skillItem}</ul>
        </div>

        <div className={style.desc}>
          <div className={style.descTitle}>SCSS를 쓰는 이유</div>
          <div className={style.descContent}>
            {`CSS를 작성하다 보면 동일한 코드가 반복되거나,
                      일부 수치만 변경된 유사한 스타일을 여러 번 작성해야 하는 경우가 많습니다.

                      또한 팀이나 개인에서 공통으로 사용하는 색상이나 수치 값을 매번 기억하거나 직접 찾아 적용해야 하는 점에서
                      기존 CSS 방식은 유지보수와 확장성 측면에서 한계가 있다고 느꼈습니다.
                      
                      이러한 문제를 해결하기 위해
                      변수, 믹스인, 중첩 등의 기능을 제공하는 SCSS 전처리기를 도입하여
                      반복되는 스타일을 구조화하고, 공통 스타일을 일관성 있게 관리할 수 있도록 프로젝트를 구성했습니다.`}
          </div>
        </div>

        <div className={style.desc}>
          <div className={style.descTitle}>파일 구조 및 설계</div>
          <Image src={"/wonlab/filestr.png"} width={228} height={185} alt="wonlab filestr" />
          <div className={style.descContent}>{`본 프로젝트는 index, gallery 총 두 개의 페이지로 구성되어 있으며,`}</div>

          <ul>{fileStrItem}</ul>

          <div className={style.descContent}>
            {`페이지 전용 스타일 파일을 제외한 나머지 파일에는 _ 접두어를 사용해
                      SCSS Partial 파일로 명확히 구분함으로써,
                      
                      해당 파일들이 단독 컴파일 대상이 아닌 공용 리소스를 가져오는 용도임을
                      구조적으로 한눈에 파악할 수 있도록 설계했습니다.`}
          </div>
        </div>

        <div className={style.desc}>
          <div className={style.descTitle}>_variables.scss</div>
          <Image src={"/wonlab/variables.png"} width={656} height={511} alt="wonlab variables" />
          <div className={style.descContent}>
            {`위 이미지는 _variables.scss에서 선언한 변수 일부를 발췌한 것입니다.
                        
                          header-height, font-main, font-sub, font-fallback처럼
                          하나의 특정한 의미만을 포함하는 요소는 
                          하나의 명확한 의미만을 가지는 값들은 단일 변수 형태로 선언하는 것이 효율적이라고 판단하여
                          개별 변수로 관리했습니다.
                          
                          반면 font-size, font-weight처럼 
                          하나의 개념 안에 여러 값이 포함되는 경우, 단순 변수로 선언하면 관리해야 할 변수가 과도하게 늘어나
                          구조가 복잡해질 수 있다고 판단했습니다.

                          이에 따라 해당 값들은 SCSS map 형태로 선언하여,
                          필요한 값에만 키(key) 기반으로 접근할 수 있도록 구성했습니다.

                          이를 통해 변수 선언 기준을 명확히 하고,
                          스타일 관리의 가독성과 확장성을 함께 고려한 변수 구조를 설계했습니다.
                        `}
          </div>
        </div>

        <div className={style.desc}>
          <div className={style.descTitle}>_mixin.scss</div>
          <Image src={"/wonlab/mixin.png"} width={656} height={511} alt="wonlab mixin" />
          <div className={style.descContent}>
            {`위 이미지는 _mixin.scss에서 선언한 변수 일부를 발췌한 것입니다.
                          mixin을 설계할 때는 다음 세 가지 기준을 중심으로 구성했습니다.
                            
                          1. 스타일이 반복적으로 사용되는 요소인가
                          2. 순수 CSS 문법으로 작성했을 때보다 사용성과 가독성이 향상되는가
                          3. 다양한 상황에 대응할 수 있는 확장성이 있는가

                          이 기준을 바탕으로 공용 믹스인을 정의했습니다.


                          예시로 @mixin inner는
                          HTML 문서에서 하나의 영역을 설명하는 섹션에 주로 사용되며,
                          콘텐츠의 중앙 정렬이 필수적으로 요구되는 패턴이 반복된다고 판단하여
                          믹스인 형태로 설계했습니다.

                          또한 inner 영역에서 높이를 지정하는 경우와 그렇지 않은 경우를 모두 고려하여
                          매개변수를 $h: null 형태로 구성했습니다.
                          높이 값이 전달되면 해당 값을 적용하고,
                          전달되지 않을 경우에는 기본적으로 auto가 적용되도록 처리했습니다.

                          마지막으로 inner 영역 내부에는
                          자식 요소들의 정렬이나 강조 등 추가 스타일이 필요한 경우가 많아,
                          @content를 활용해 필요한 코드를 유연하게 확장할 수 있도록 설계했습니다.
                          `}
          </div>
        </div>
      </div>
    </div>
  );
}
