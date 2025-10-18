import ProjectItem from "@/component/ProjectItem/ProjectItem";
import { KarlyModal } from "./ProjectModal/Karly/KarlyModal";
import { useState } from "react";
import { Game2048Modal } from "./ProjectModal/Game2048/Game2048Modal";
import { StarbucksModal } from "./ProjectModal/Starbucks/StarbucksModal";
import { FundreamModal } from "./ProjectModal/Fundream/FundreamModal";
import { PortfolioModal } from "./ProjectModal/Portfolio/PortfolioModal";

export default function ProjectData() {
  const [modal, setModal] = useState([false, false, false, false, false]);

  const clickModal = (num: number) => {
    setModal((prev) => prev.map((v, i) => (i === num ? !v : v)));
  };

  const projectList = [
    /* karly */
    <ProjectItem
      key="karly item"
      src="/karly.png"
      alt="karly image"
      title="karly"
      titleColor="purple"
      titleFontFamily="YeongwolTTF-Regular"
      data-categroy={["All", "Sub"]}
      modal={modal[0]}
      setModal={() => clickModal(0)}
    >
      <KarlyModal setModal={() => clickModal(0)} />
    </ProjectItem>,

    /* 2048 */
    <ProjectItem
      key="2048 item"
      src="/game_2048.png"
      alt="2048 image"
      title="2048"
      titleColor="rgb(44, 62, 80)"
      titleFontFamily="Paperozi"
      data-categroy={["All", "Sub"]}
      modal={modal[1]}
      setModal={() => clickModal(1)}
    >
      <Game2048Modal setModal={() => clickModal(1)} />
    </ProjectItem>,

    /* starbuck */
    <ProjectItem
      key="starbuck item"
      src="/starbucks.png"
      alt="starbucks image"
      title="starbucks"
      titleColor="green"
      titleFontFamily="Aggravo"
      data-categroy={["All", "Sub"]}
      modal={modal[2]}
      setModal={() => clickModal(2)}
    >
      <StarbucksModal setModal={() => clickModal(2)} />
    </ProjectItem>,

    /* fundream */
    <ProjectItem
      key="fundream item"
      src="/fundream.png"
      alt="fundream image"
      title="fundream"
      titleColor="rgb(9, 31, 176)"
      titleFontFamily="Cafe24Surround"
      data-categroy={["All", "Next.js"]}
      modal={modal[3]}
      setModal={() => clickModal(3)}
    >
      <FundreamModal setModal={() => clickModal(3)} />
    </ProjectItem>,

    /* portfolio */
    <ProjectItem
      key="portfolio item"
      src="/portfolio.png"
      alt="portfolio image"
      title="portfolio"
      titleColor="black"
      titleFontFamily="SfHambakneun"
      data-categroy={["All", "Next.js"]}
      modal={modal[4]}
      setModal={() => clickModal(4)}
    >
      <PortfolioModal setModal={() => clickModal(4)} />
    </ProjectItem>,
  ];

  return projectList;
}
