import { AboutMe } from "./AboutMe/AboutMe";
import { Ending } from "./Ending/Ending";
import { Intro } from "./IntroContent/Intro";
import { Mail } from "./Mail/Mail";
import { Project } from "./Project/Project";
import { Skills } from "./Skills/Skills";
import { StudyLog } from "./StudyLog/StudyLog";

export default function Main() {
  return (
    <>
      <Intro />
      <Project />
      <Skills />
      <StudyLog />
      <AboutMe />
      <Ending />
      <Mail />
    </>
  );
}
