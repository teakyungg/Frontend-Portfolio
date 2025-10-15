import { AboutMe } from "./AboutMe/AboutMe";
import { Intro } from "./IntroContent/IntroContent";
import { Mail } from "./Mail/Mail";
import { Project } from "./Project/Project";
import { Skills } from "./Skills/Skills";

export default function Main() {
  return (
    <>
      {/* 인트로 */}
      <Intro />

      {/* project */}
      <Project />

      {/* Skills */}
      <Skills />

      {/* about 자기소개 */}
      <AboutMe />

      <div>감사합니다</div>

      {/* 메일 보내는 부분 */}
      <Mail />

      {/* 자기소개 부분에 메일 클라이언트 추가하기 */}
      {/* 맨 밑에 읽어주셔서 감사합니다라는 거 넣기 */}
      {/* 그 다음 각 프로젝트 소개하는 페이지 만들고 이력서 써서 넣으면 될듯 */}
    </>
  );
}
