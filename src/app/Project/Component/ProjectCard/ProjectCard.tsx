import Image from "next/image";
import style from "./ProjectCard.module.css";

interface ProjectCardType {
  title: string; // 프로젝트 제목
  gitHubLink: string; // 깃허브 링크
  projectDesc: string; // 프로젝트 설명
}

export function ProjectCard({ title, gitHubLink, projectDesc }: ProjectCardType) {
  return (
    <div>
      <div className={style.projectHeader}>
        <div className={style.mainTitle}>{title}</div>
        <a href={gitHubLink} title="GitHub 바로가기" target="_blank">
          <Image
            className={style.gitHubIcon}
            src={"/github_logo_icon.svg"}
            width={40}
            height={40}
            alt="github_logo_icon"
          />
        </a>
      </div>
      <p>{projectDesc}</p>
    </div>
  );
}
