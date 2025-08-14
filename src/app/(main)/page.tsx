import { AboutMe } from "./AboutMe";
import { IntroContent } from "./IntroContent";

export default function Main() {
  const intro_Style = "w-full h-[900px] pt-[62px] min-w-[700px]";

  return (
    <>
      {/* 인트로 */}
      <section className={intro_Style}>
        <h2 className="sr-only">Intro Content</h2>
        <IntroContent />
      </section>

      {/* about 자기소개 */}
      <section>
        <AboutMe />
      </section>
    </>
  );
}
