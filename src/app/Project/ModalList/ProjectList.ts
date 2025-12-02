import { KarlyModal } from "../Modal/component/KarlyModal";
import { Game2048Modal } from "../Modal/component/Game2048Modal";
import { StarbucksModal } from "../Modal/component/StarbucksModal";
import { FundreamModal } from "../Modal/component/FundreamModal";
import { PortfolioModal } from "../Modal/component/PortfolioModal";
import { WonLabModal } from "../Modal/component/WonLabMadal";

export interface ProjectItemData {
  src: string; // 대표 이미지 주소
  alt: string; // 이미지 보조 설명 
  title: string; // 제목
  titleColor: string; // 제목 색깔
  titleFontFamily: string; // 제목 글꼴
  dataCategory: string[]; // 분류 태그
  ModalComponent: React.ComponentType<{ setModal: () => void; src: string }>; // 클릭 시 나올 모달
}

export const projectList: ProjectItemData[] = [
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
    ModalComponent: WonLabModal,
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
