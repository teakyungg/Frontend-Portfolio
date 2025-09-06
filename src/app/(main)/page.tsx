import { AboutMe } from "./AboutMe/AboutMe";
import { Intro } from "./IntroContent/IntroContent";
import { Skill } from "./Skill/Skill";

export default function Main() {
  const intro_Style = "w-full h-[900px] pt-[62px] min-w-[700px]";

  return (
    <>
      {/* 인트로 */}
      <section className={intro_Style}>
        <Intro />
      </section>

      {/* about 자기소개 */}
      <section>
        <AboutMe />
      </section>

      {/* skills */}
      <section>
        <Skill />
      </section>
    </>
  );
}
