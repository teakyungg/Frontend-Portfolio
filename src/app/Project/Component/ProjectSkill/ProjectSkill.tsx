import { Highlight } from "@/component/Highlight/Highlight";
import style from "./ProjectSkill.module.css";

interface ProjectSkill {
  skillData: string[];
}

export function ProjectSkill({ skillData }: ProjectSkill) {
  return (
    <div className={style.skill}>
      <span>프로젝트 특징</span>
      <ul className={style.skillList}>
        {skillData.map((skill) => (
          <li key={skill}>
            <Highlight>{skill}</Highlight>
          </li>
        ))}
      </ul>
    </div>
  );
}
