export interface ProjectItemData {
  src: string; // 대표 이미지 주소
  alt: string; // 이미지 보조 설명 
  title: string; // 제목
  titleColor: string; // 제목 색깔
  titleFontFamily: string; // 제목 글꼴
  dataCategory: string[]; // 분류 태그
}

export const projectList: ProjectItemData[] = [
  {
    src: "/Animal.png",
    alt: "Animal image",
    title: "Animal",
    titleColor: "black",
    titleFontFamily: "Aggravo",
    dataCategory: ["All", "Personal"],

  },
  {
    src: "/fundream.png",
    alt: "fundream image",
    title: "Fundream",
    titleColor: "rgb(9, 31, 176)",
    titleFontFamily: "Cafe24Surround",
    dataCategory: ["All", "Team"],

  },
  {
    src: "/starbucks.png",
    alt: "starbucks image",
    title: "Starbucks",
    titleColor: "green",
    titleFontFamily: "Aggravo",
    dataCategory: ["All", "Personal"],
  },
  {
    src: "/game_2048.png",
    alt: "2048 image",
    title: "2048",
    titleColor: "rgb(44, 62, 80)",
    titleFontFamily: "Paperozi",
    dataCategory: ["All", "Team"],
  },
  {
    src: "/karly.png",
    alt: "karly image",
    title: "Karly",
    titleColor: "purple",
    titleFontFamily: "YeongwolTTF-Regular",
    dataCategory: ["All", "Team"],
  },
  {
    src: "/WonLab.png",
    alt: "WonLab.png image",
    title: "WonLab",
    titleColor: "black",
    titleFontFamily: "",
    dataCategory: ["All", "Personal"],
  },
  // {
  //   src: "/portfolio.png",
  //   alt: "portfolio image",
  //   title: "Portfolio",
  //   titleColor: "black",
  //   titleFontFamily: "SfHambakneun",
  //   dataCategory: ["All", "Personal"],
  // },
];
