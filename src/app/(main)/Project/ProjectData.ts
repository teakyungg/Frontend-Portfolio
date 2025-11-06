import { KarlyModal } from "./Modal/KarlyModal";
import { Game2048Modal } from "./Modal/Game2048Modal";
import { StarbucksModal } from "./Modal/StarbucksModal";
import { FundreamModal } from "./Modal/FundreamModal";
import { PortfolioModal } from "./Modal/PortfolioModal";

// 데이터 추가 시
// Modal 폴터에 (모달).tsx 파일 추가한 후 여기에 양식맞게 추가할 것

export interface ProjectItemData {
  key: string;
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
    key: "fundream item",
    src: "/fundream.png",
    alt: "fundream image",
    title: "fundream",
    titleColor: "rgb(9, 31, 176)",
    titleFontFamily: "Cafe24Surround",
    dataCategory: ["All", "Next.js"],
    ModalComponent: FundreamModal,
  },
  {
    key: "starbuck item",
    src: "/starbucks.png",
    alt: "starbucks image",
    title: "starbucks",
    titleColor: "green",
    titleFontFamily: "Aggravo",
    dataCategory: ["All", "Sub"],
    ModalComponent: StarbucksModal,
  },
  {
    key: "2048 item",
    src: "/game_2048.png",
    alt: "2048 image",
    title: "2048",
    titleColor: "rgb(44, 62, 80)",
    titleFontFamily: "Paperozi",
    dataCategory: ["All", "Sub"],
    ModalComponent: Game2048Modal,
  },
  {
    key: "karly item",
    src: "/karly.png",
    alt: "karly image",
    title: "karly",
    titleColor: "purple",
    titleFontFamily: "YeongwolTTF-Regular",
    dataCategory: ["All", "Sub"],
    ModalComponent: KarlyModal,
  },
  {
    key: "portfolio item",
    src: "/portfolio.png",
    alt: "portfolio image",
    title: "portfolio",
    titleColor: "black",
    titleFontFamily: "SfHambakneun",
    dataCategory: ["All", "Next.js"],
    ModalComponent: PortfolioModal,
  },
];
