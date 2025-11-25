import { AboutMe } from "./AboutMe/AboutMe";
import { Ending } from "./Ending/Ending";
import { Intro } from "./IntroContent/IntroContent";
import { Mail } from "./Mail/Mail";
import { Project } from "./Project/Project";
import { Skills } from "./Skills/Skills";
import { StudyLog } from "./StudyLog/StudyLog";

export default function Main() {
  return (
    <>
      {/* 인트로 */}
      <Intro />

      {/* project */}
      <Project />

      {/* Skills */}
      <Skills />

      {/* 개념 정리 */}
      <StudyLog />

      {/* about 자기소개 */}
      <AboutMe />

      {/* ending */}
      <Ending />

      {/* 메일 보내는 부분 */}
      <Mail />

      {/* 각 프로젝트 소개하는 페이지 만들고 이력서 써서 넣으면 될듯 */}
    </>
  );
}
