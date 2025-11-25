"use client";

import styles from "./Skills.module.scss";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SkillsSlideData from "./SkillsSlideData";
import "swiper/css";
import { TextStrong } from "@/component/TextStrong/TextStrong";

/* 중간 중간 단어 강조 컴포넌트 만들기 */

export function Skills() {
  /* silde 이미지 데이터 */
  const slideData = SkillsSlideData();

  return (
    <section>
      <div className={styles.skills}>
        <h2 className={styles.title}>Skill</h2>

        <div className={styles.inner}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            allowTouchMove={false}
            className={styles.swiper}
          >
            {slideData}
          </Swiper>

          <ul className={styles.skillListInner}>
            <li>
              <TextStrong>React</TextStrong>로 UI를 컴포넌트 단위로 모듈화하고, <TextStrong>children</TextStrong>을
              활용해 구조적이고 재사용 가능한 페이지를 구현함.
            </li>
            <li>
              <TextStrong>TypeScript</TextStrong> 기반 프로젝트에서 경량 상태 관리 라이브러리인{" "}
              <TextStrong>Zustand</TextStrong>를 사용하여 전역 상태를 관리함.
            </li>
            <li>
              부트캠프 팀 프로젝트에서 <TextStrong>Git</TextStrong>과 <TextStrong>GitHub</TextStrong>를 활용해 효율적인
              협업과 버전 관리를 수행함.
            </li>
            <li>
              <TextStrong>Next.js</TextStrong>로 서버 사이드 렌더링(SSR)을 적용하고, <TextStrong>SEO</TextStrong>{" "}
              최적화를 고려한 웹 페이지를 개발함.
            </li>
            <li>
              <TextStrong>Tailwind CSS</TextStrong>와 <TextStrong>SCSS</TextStrong>를 활용해 스타일링 효율과
              유지보수성을 향상시킴.
            </li>
            <li>
              <TextStrong>Swiper</TextStrong>와 <TextStrong>GSAP</TextStrong>를 활용해 슬라이드 및 애니메이션 구현 시
              반복 작업을 최소화하고, 개발 효율을 높임.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
