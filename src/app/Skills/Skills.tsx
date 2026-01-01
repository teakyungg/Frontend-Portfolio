"use client";

import styles from "./Skills.module.css";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SkillsSlideData from "./SkillsSlideData";
import "swiper/css";
import { Highlight } from "@/component/Highlight/Highlight";

export function Skills() {
  /* silde 이미지 데이터 */
  const slideData = SkillsSlideData();

  /* skill 데이터 */
  const skillData = [
    { name: "Web Basics", data: ["HTML5", "CSS", "JavaScript(ES6+)"] },
    { name: "Frameworks", data: ["React", "Next.js"] },
    { name: "Styling & Tools", data: ["Tailwind CSS", "SCSS", "TypeScript", "Figma"] },
    { name: "Animation & UI Libraries", data: ["GSAP", "Swiper", "Packery"] },
  ];

  const skillEl = skillData.map((value) => (
    <li className={styles.skillItem} key={value.name}>
      <div>{value.name} : </div>
      <div className={styles.items}>
        {value.data.map((dataValue, index) => (
          <Highlight key={index}>{dataValue}</Highlight>
        ))}
      </div>
    </li>
  ));

  return (
    <section id="Skill">
      <div className={styles.skillsInner}>
        <h2 className={styles.title}>Skill</h2>

        <div className={styles.content}>
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

          <ul className={styles.skillList}>{skillEl}</ul>
        </div>
      </div>
    </section>
  );
}
