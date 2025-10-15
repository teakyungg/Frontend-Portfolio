import { AboutMe } from "./AboutMe/AboutMe";
import { Intro } from "./IntroContent/IntroContent";
import { Mail } from "./Mail/Mail";
import { Project } from "./Project/Project";
import { Skills } from "./Skills/Skills";

export default function Main() {
  const intro_Style = "w-full h-[900px] pt-[62px] min-w-[700px]";

  return (
    <>
      {/* 인트로 */}
      <section className={intro_Style}>
        <Intro />
      </section>
      {/* project */}
      <section>
        <Project />
      </section>

      {/* Skills */}
      <section>
        <Skills />
      </section>

      {/* about 자기소개 */}
      <section>
        <AboutMe />
      </section>

      {/* 메일 보내는 부분 */}
      <aside>
        <Mail />
      </aside>

      {/* 자기소개 부분에 메일 클라이언트 추가하기 */}
      {/* 맨 밑에 읽어주셔서 감사합니다라는 거 넣기 */}
      {/* 그 다음 각 프로젝트 소개하는 페이지 만들고 이력서 써서 넣으면 될듯 */}
    </>
  );
}
