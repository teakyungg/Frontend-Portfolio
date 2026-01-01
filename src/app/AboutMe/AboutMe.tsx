import styles from "./AboutMe.module.css";

export function AboutMe() {
  const introductionData = [
    "웹 프론트엔드 개발을 공부하며, 화면을 구조적으로 구성하고 사용자 경험을 개선하는 일에 큰 흥미를 가지고 있습니다.",
    "다양한 언어를 경험해 온 과정 속에서 즉각적인 피드백과 상호작용을 만드는 프론트엔드 분야에 매력을 느껴 집중적으로 학습 중입니다.",
    "시멘틱 마크업과 접근성을 고려한 HTML 구조, SCSS 설계, 그리고 유지보수성 높은 컴포넌트 기반 UI 제작을 중요하게 생각합니다.",
    "JavaScript(ES6), SCSS, Vite, React, Next.js를 활용해 실제 웹 페이지를 분석하고 구현하며 문제 해결 능력을 쌓고 있습니다.",
    "더 나은 사용자 경험을 제공하는 개발자를 목표로 하며, 새로운 기술을 배우고 직접 만들어보는 과정을 즐깁니다.",
  ];

  const introductionEl = introductionData.map((value, index) => <li key={index}>{value}</li>);

  const privacyData = [
    { title: "이름", text: "김태경" },
    { title: "이메일", text: "rlaxorud8532@gmail.com" },
    { title: "주소", text: "경기도 오산시" },
    { title: "대학교", text: "평택대학교 융합소프트웨어 학과" },
  ];

  const privacyEl = privacyData.map((value) => (
    <li key={value.title}>
      <dt>{value.title}</dt>
      <dd>{value.text}</dd>
    </li>
  ));

  return (
    <section id="About">
      <div className={styles.AboutMeinner}>
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.content}>
          <ul className={styles.introduction}>{introductionEl}</ul>
          <ul className={styles.privacy}>{privacyEl}</ul>
        </div>
      </div>
    </section>
  );
}
