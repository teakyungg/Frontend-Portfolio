import styles from "./AboutMe.module.scss";

interface ContentTextProps {
  title?: string;
  content?: string;
  titleTextSize?: number;
  contentTextSize?: number;
}

export function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.content}>
        {/* 프론트 엔드 시작 이유 */}
        <ContentBox>
          <ContentText
            title="프론트엔드를 시작하게된 이유는?"
            content={`처음에는 단순한 정보 전달용 웹페이지를 제작했지만, 스타일 관리의 비효율성을 느끼며 CSS를 배우게 되었습니다. 이후 사용자와 상호작용하는 웹을 만들고 싶어 JavaScript를 익혔고, 더 효율적인 개발을 위해 React와 Next.js를 접하며 프론트엔드 개발자의 길을 걷게 되었습니다.`}
          />
        </ContentBox>

        {/* 목표 */}
        <ContentBox>
          <ContentText
            title="목표는?"
            content={`사용자가 원하는 기능을 모두 구현하는 것, 최적화가 잘 된 웹페이지를 만드는 것이 목표입니다.`}
          />
        </ContentBox>

        {/* Contact */}
        <ContentBox>
          <ContentText title="Contact" />

          <div className={styles.privacy}>
            <ContentText title="이름" content="김태경" titleTextSize={20} />
            <ContentText title="이메일" content="rlaxorud8532@gmail.com" titleTextSize={20} />
            <ContentText title="주소" content="경기도 오산시" titleTextSize={20} />
            <ContentText title="대학교" content="평택대학교 융합소프트웨어 학과 졸업" titleTextSize={20} />
          </div>
        </ContentBox>
      </div>
    </div>
  );
}

function ContentBox({ children }: { children: React.ReactNode }) {
  return <div className={styles.contentBox}>{children}</div>;
}

function ContentText({ title, content, titleTextSize, contentTextSize }: ContentTextProps) {
  return (
    <div className={styles.contentText}>
      <span style={{ fontSize: titleTextSize ? `${titleTextSize}px` : "25px" }}>{title}</span>
      <p style={{ fontSize: contentTextSize ? `${contentTextSize}px` : "16px" }}>{content}</p>
    </div>
  );
}
