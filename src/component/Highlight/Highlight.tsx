import style from "./Highlight.module.css";

interface TextStrong {
  children: React.ReactNode;
  fontBold?: boolean;
}

/* 문자열 강조 */
export function Highlight({ children, fontBold = true }: TextStrong) {
  return (
    <span className={style.textStrong} style={{ fontWeight: fontBold ? "bold" : "normal" }}>
      {children}
    </span>
  );
}
