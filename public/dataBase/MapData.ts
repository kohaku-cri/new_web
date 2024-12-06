// import { randomUUID } from "crypto";

type Map = {
  mapName: string;
  mapImgLink: string;
  link: string;
  alt: string;
  date: string;
};

export const mapdata: Map[] = [
  // ひな形 一番上の配列に追加

  // {
  //   mapName: "魔法使いと空の孤島",
  //   mapImgLink: "/img/8.jpg",
  //   link: "/world/8",
  //   alt: "魔法使いと空の孤島 マインクラフト脱出マップ",
  //   date: "2024/11/4",
  // },

  {
    mapName: "魔法使いと空の孤島",
    mapImgLink: "/img/8.jpg",
    link: "/world/8",
    alt: "魔法使いと空の孤島 マインクラフト脱出マップ",
    date: "2024/11/4",
  },
  {
    mapName: "教室10《8番出口オマージュ》",
    mapImgLink: "/img/7.jpg",
    link: "/world/7",
    alt: "教室10《8番出口オマージュ》 マインクラフト脱出マップ",
    date: "2024/1/23",
  },
  {
    mapName: "雪夜の山峡",
    mapImgLink: "/img/6.jpg",
    link: "/world/6",
    alt: "雪夜の山峡 マインクラフト脱出マップ",
    date: "2023/12/23",
  },
  {
    mapName: "ハロウィンハウスからの脱出",
    mapImgLink: "/img/5.jpg",
    link: "/world/5",
    alt: "ハロウィンハウスからの脱出 マインクラフト脱出マップ",
    date: "2023/10/26",
  },
  {
    mapName: "謎めく研究所からの脱出",
    mapImgLink: "/img/4.jpg",
    link: "/world/4",
    alt: "謎めく研究所からの脱出 マインクラフト脱出マップ",
    date: "2023/10/6",
  },
  {
    mapName: "トロールMAP",
    mapImgLink: "/img/3.jpg",
    link: "/world/3",
    alt: "トロールMAP マインクラフト脱出マップ",
    date: "2023/9/10",
  },
  {
    mapName: "とある民家からの脱出",
    mapImgLink: "/img/2.jpg",
    link: "/world/2",
    alt: "とある民家からの脱出 マインクラフト脱出マップ",
    date: "2024/9/04",
  },
  {
    mapName: "釣り人の記憶",
    mapImgLink: "/img/1.jpg",
    link: "/world/1",
    alt: "釣り人の記憶 マインクラフト脱出マップ",
    date: "2023/9/2",
  },
];
const aspect = 340;
export const imgSize = {
  width: aspect,
  height: aspect * 0.5625,
};
