import nextConfig from "../../next.config";
const BASE_PATH = nextConfig.basePath || "";

type Map = {
  mapNum: string;
  mapName: string;
  mapImgLink: string;
  link: string;
  youtube: string;
  distributionLink: string;
  alt?: string;
  date: string;
  visibility: string;
  copyRight: string[];
};

export const mapdata: Map[] = [
  // ひな形 一番上の配列に追加

  // {
  //   mapNum:"8",
  //   mapName: "魔法使いと空の孤島",
  //   mapImgLink: `${BASE_PATH}/img/8.jpg`,
  //   link: "/world/8",
  //   youtube: "",
  //   distributionLink: "",
  //   alt: "魔法使いと空の孤島 マインクラフト脱出マップ",
  //   date: "2024/11/4",
  //   visibility: public,
  // },


  {
    mapNum: "8",
    mapName: "魔法使いと空の孤島",
    mapImgLink: `${BASE_PATH}/img/8.jpg`,
    link: "/world/8",
    youtube: "https://www.youtube.com/embed/nmF8JFw_GZI?si=EMaC0JICYQ7zPgUm",
    distributionLink: "https://minecraft-mcworld.com/105151/",
    alt: "魔法使いと空の孤島 マインクラフト脱出マップ",
    date: "2024/11/4",
    visibility: "public",
    copyRight: ["ロゴの一部にicooon-monoのイラスト素材を使用"],
  },
];
const aspect = 310;
export const imgSize = {
  width: aspect,
  height: aspect * 0.5625,
};
