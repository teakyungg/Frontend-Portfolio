import style from "./ProjectPreviewCard.module.css";

interface ProjectPreviewCardType {
  bgURL: string; // 배경 이미지 주소
  projectLink: string; // 완성 사이트 링크
}

export function ProjectPreviewCard({ bgURL, projectLink }: ProjectPreviewCardType) {
  return (
    <div className={style.ProjectPreviewCard} style={{ backgroundImage: `url(${bgURL})` }}>
      <div className={style.btnLinkBg}>
        <a className={style.btnLink} href={projectLink} target="_blank">
          바로가기
        </a>
      </div>
    </div>
  );
}
