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

  //visibility・・・公開情報
  //値 public＝公開 local＝非公開 timeLocal＝一時非公開
  // public
  // local
  // timeLocal

  //詳細ページのURLについて・・・mapNumの数値（文字列）とページのURLは同一とすること

  //youtubeリンクは埋め込みリンクのリンクを使用すること (URL部分を選択しマウスを離さずにctrl+c)

  //copyRight・・・権利情報を記入(配列) ※空配列の場合は『使用している外部素材はありません』と表示される

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
  {
    mapNum: "7",
    mapName: "教室10《8番出口オマージュ》",
    mapImgLink: `${BASE_PATH}/img/7.jpg`,
    link: "/world/7",
    youtube: "https://www.youtube.com/embed/J66lDqrVr7Y?si=FJ4Ja-3lo9sciYvO",
    distributionLink: "https://minecraft-mcworld.com/61174/",
    alt: "教室10《8番出口オマージュ》 マインクラフト脱出マップ",
    date: "2024/1/23",
    visibility: "public",
    copyRight: ["ロゴの一部にicooon-monoのイラスト素材を使用"],
  },
  {
    mapNum: "6",
    mapName: "雪夜の山峡",
    mapImgLink: `${BASE_PATH}/img/6.jpg`,
    link: "/world/6",
    youtube: "https://www.youtube.com/embed/_BaqzBPFcE0?si=2j_eWcdFIL5zL_R-",
    distributionLink: "https://minecraft-mcworld.com/56665/",
    alt: "雪夜の山峡 マインクラフト脱出マップ",
    date: "2023/12/23",
    visibility: "public",
    copyRight: [],
  },
  {
    mapNum: "5",
    mapName: "ハロウィンハウスからの脱出",
    mapImgLink: `${BASE_PATH}/img/5.jpg`,
    link: "/world/5",
    youtube: "https://www.youtube.com/embed/G9VbfwQQgbY?si=vHK1OVxIR1QtcFft",
    distributionLink: "https://minecraft-mcworld.com/49583/",
    alt: "ハロウィンハウスからの脱出 マインクラフト脱出マップ",
    date: "2023/10/26",
    visibility: "public",
    copyRight: [],
  },
  {
    mapNum: "4.5",
    mapName: "入れ替わりアドオン",
    mapImgLink: `${BASE_PATH}/img/4.5.jpg`,
    link: "/world/4.5",
    youtube: "",
    distributionLink: "",
    alt: "入れ替わりアドオン マインクラフトアドオン",
    date: "2023/10/12",
    visibility: "local",
    copyRight: [],
  },
  {
    mapNum: "4",
    mapName: "謎めく研究所からの脱出",
    mapImgLink: `${BASE_PATH}/img/4.jpg`,
    link: "/world/4",
    youtube: "https://www.youtube.com/embed/U47Z2Jm2Hec?si=1Ddh3VA8iqNoEv7V",
    distributionLink: "https://minecraft-mcworld.com/46698/",
    alt: "謎めく研究所からの脱出 マインクラフト脱出マップ",
    date: "2023/10/6",
    visibility: "public",
    copyRight: ["マップ内の効果音と音楽に魔王魂の素材を使用"],
  },
  {
    mapNum: "3",
    mapName: "トロールMAP",
    mapImgLink: `${BASE_PATH}/img/3.jpg`,
    link: "/world/3",
    youtube: "https://www.youtube.com/embed/5851_eTBWtA?si=qhrNxJrmre5zW20k",
    distributionLink: "https://minecraft-mcworld.com/45870/",
    alt: "トロールMAP マインクラフト脱出マップ",
    date: "2023/9/10",
    visibility: "public",
    copyRight: [],
  },
  {
    mapNum: "2",
    mapName: "【短編】とある民家からの脱出",
    mapImgLink: `${BASE_PATH}/img/2.jpg`,
    link: "/world/2",
    youtube: "https://www.youtube.com/embed/uBVeSxIJMOo?si=Vr8BEONaVfjNH8fz",
    distributionLink: "https://1drv.ms/u/s!AqPQLDi4YQ-Tgw8EbdEPCGdA2jSe?e=ctqyJ0",
    alt: "とある民家からの脱出 マインクラフト脱出マップ",
    date: "2024/9/04",
    visibility: "public",
    copyRight: [],
  },
  {
    mapNum: "1",
    mapName: "釣り人の記憶",
    mapImgLink: `${BASE_PATH}/img/1.jpg`,
    link: "/world/1",
    youtube: "https://www.youtube.com/embed/8TYrP9o87Ws?si=5WsJVtvJJkv5b0rC",
    distributionLink: "https://minecraft-mcworld.com/45197/",
    alt: "釣り人の記憶 マインクラフト脱出マップ",
    date: "2023/9/2",
    visibility: "public",
    copyRight: [],
  },
];
const aspect = 320;
export const imgSize = {
  width: aspect,
  height: aspect * 0.5625,
};
