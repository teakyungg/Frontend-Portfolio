import Image from "next/image";
import styles from "./ProjectModal.module.css";

interface ProjectModal {
  children: React.ReactNode;
  closeFn: () => void;
}

export function ProjectModal({ children, closeFn }: ProjectModal) {
  return (
    /* 뒷 배경 */
    <div className={styles.overLay} onClick={closeFn}>

      {/* 모달창 내용 */}
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        {/* x 버튼 */}
        <Image
          src={"/closeButton.png"}
          width={20}
          height={20}
          alt="close button image"
          className={styles.closeButton}
          onClick={closeFn}
        ></Image>
        {children}
      </div>
    </div>
  );
}
