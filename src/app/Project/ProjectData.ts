import { KarlyModal } from "./Modal/KarlyModal";
import { Game2048Modal } from "./Modal/Game2048Modal";
import { StarbucksModal } from "./Modal/StarbucksModal";
import { FundreamModal } from "./Modal/FundreamModal";
import { PortfolioModal } from "./Modal/PortfolioModal";
import { WonLab } from "./Modal/WonLab";

// 데이터 추가 시
// Modal 폴터에 (모달).tsx 파일 추가한 후 여기에 양식맞게 추가할 것

export interface ProjectItemData {
  src: string;
  alt: string;
  title: string;
  titleColor: string;
  titleFontFamily: string;
  dataCategory: string[];
  ModalComponent: React.ComponentType<{ setModal: () => void; src: string }>;
}

export const projectData: ProjectItemData[] = [
  {
    src: "/fundream.png",
    alt: "fundream image",
    title: "fundream",
    titleColor: "rgb(9, 31, 176)",
    titleFontFamily: "Cafe24Surround",
    dataCategory: ["All", "Team"],
    ModalComponent: FundreamModal,
  },
  {
    src: "/starbucks.png",
    alt: "starbucks image",
    title: "starbucks",
    titleColor: "green",
    titleFontFamily: "Aggravo",
    dataCategory: ["All", "Personal"],
    ModalComponent: StarbucksModal,
  },
  {
    src: "/game_2048.png",
    alt: "2048 image",
    title: "2048",
    titleColor: "rgb(44, 62, 80)",
    titleFontFamily: "Paperozi",
    dataCategory: ["All", "Team"],
    ModalComponent: Game2048Modal,
  },
  {
    src: "/karly.png",
    alt: "karly image",
    title: "karly",
    titleColor: "purple",
    titleFontFamily: "YeongwolTTF-Regular",
    dataCategory: ["All", "Team"],
    ModalComponent: KarlyModal,
  },
  {
    src: "/WonLab.png",
    alt: "WonLab.png image",
    title: "WonLab",
    titleColor: "black",
    titleFontFamily: "",
    dataCategory: ["All", "Personal"],
    ModalComponent: WonLab,
  },
  {
    src: "/portfolio.png",
    alt: "portfolio image",
    title: "portfolio",
    titleColor: "black",
    titleFontFamily: "SfHambakneun",
    dataCategory: ["All", "Personal"],
    ModalComponent: PortfolioModal,
  },
];
