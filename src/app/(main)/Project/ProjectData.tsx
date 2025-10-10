import ProjectItem from "@/component/ProjectItem/ProjectItem";

export default function ProjectData() {
  const projectList = [
    /* karly */
    <ProjectItem
      key="karly item"
      src="/karly.png"
      alt="karly image"
      title="karly"
      link="karly"
      titleColor="purple"
      titleFontFamily="YeongwolTTF-Regular"
      data-categroy={["All", "Sub"]}
    />,

    /* 2048 */
    <ProjectItem
      key="2048 item"
      src="/game_2048.png"
      alt="2048 image"
      title="2048"
      link="2048"
      titleColor="rgb(44, 62, 80)"
      titleFontFamily="Paperozi"
      data-categroy={["All", "Sub"]}
    />,

    /* starbuck */
    <ProjectItem
      key="starbuck item"
      src="/starbucks.png"
      alt="starbucks image"
      title="starbucks"
      link="starbucks"
      titleColor="green"
      titleFontFamily="Aggravo"
      data-categroy={["All", "Sub"]}
    />,

    /* fundream */
    <ProjectItem
      key="fundream item"
      src="/fundream.png"
      alt="fundream image"
      title="fundream"
      link="fundream"
      titleColor="rgb(9, 31, 176)"
      titleFontFamily="Cafe24Surround"
      data-categroy={["All", "Next.js"]}
    />,

    /* portfolio */
    <ProjectItem
      key="portfolio item"
      src="/portfolio.png"
      alt="portfolio image"
      title="portfolio"
      link="protfolio"
      titleColor="black"
      titleFontFamily="SfHambakneun"
      data-categroy={["All", "Next.js"]}
    />,
  ];

  return projectList;
}
