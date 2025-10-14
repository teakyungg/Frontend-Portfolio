import style from "./TextStrong.module.scss";

/* 문자열 강조 */
export function TextStrong({ children }: { children: React.ReactNode }) {
  return <span className={style.textStrong}>{children}</span>;
}
