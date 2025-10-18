import style from "./TextStrong.module.scss";

interface TextStrong {
  children: React.ReactNode;
  fontBold?: boolean;
}

/* 문자열 강조 */
export function TextStrong({ children, fontBold = true }: TextStrong) {
  return (
    <span className={style.textStrong} style={{ fontWeight: fontBold ? "bold" : "normal" }}>
      {children}
    </span>
  );
}
