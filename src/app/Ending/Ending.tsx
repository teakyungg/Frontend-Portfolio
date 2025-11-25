import styles from "./Ending.module.scss";

export function Ending() {
  return (
    <div className={styles.EndingInner}>
      <span className={styles.en}>Thank you</span>
      <span className={styles.ko}>읽어 주셔서 감사합니다</span>
    </div>
  );
}
