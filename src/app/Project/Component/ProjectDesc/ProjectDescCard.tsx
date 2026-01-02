import style from "./ProjectDescCard.module.css";

interface ProjectDescCardType {
  children: React.ReactNode;
}

export function ProjectDescCard({ children }: ProjectDescCardType) {
  return <div className={style.ProjectDesc}>{children}</div>;
}
