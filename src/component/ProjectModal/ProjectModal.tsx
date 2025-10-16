import Image from "next/image";
import styles from "./ProjectModal.module.scss";

interface ProjectModal {
  children: React.ReactNode;
  closeFn: () => void;
}

export function ProjectModal({ children, closeFn }: ProjectModal) {
  return (
    /* 모달창 전체 배경 */
    <div className={styles.karlyOverlay} onClick={closeFn}>
      {/* 모달창 내용 부분 */}
      <div className={styles.karlyModalInner} onClick={(e) => e.stopPropagation()}>
        <Image
          src={"/closeButton.png"}
          width={40}
          height={40}
          alt="close button image"
          className={styles.closeButton}
          onClick={closeFn}
        ></Image>
        {children}
      </div>
    </div>
  );
}
