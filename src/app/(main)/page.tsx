import { AboutMe } from "./AboutMe/AboutMe";
import { Intro } from "./IntroContent/IntroContent";
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

      {/* 마지막에 읽어 주셔서 감사합니다 쓰는 것 좋을듯 */}
    </>
  );
}
