import styles from "./Notion.module.scss";

interface NotionLink {
  title: string /* 링크 제목 */;
  link: string /* 링크 주소 */;
}

export function NotionLink({ title, link }: NotionLink) {
  return (
    <a className={styles.NotionLink} href={link} target="_blank">
      {title}
    </a>
  );
}
