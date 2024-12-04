import { randomUUID } from "crypto";

type MapItem = {
  mapName: string;
  description: string;
  mapImgLink: string;
  link: string;
  alt: string;
};

export const mapdata: MapItem[] = [
  // ひな形 一番上の配列に追加
  // {
  //   mapName: "魔法使いと空の孤島",
  //   description: "ハロウィンマップ第２弾",
  //   mapImgLink: "/img/8.jpg",
  //   link: "/world/8",
  //   alt: "魔法使いと空の孤島 マインクラフト脱出マップ",
  // },

  {
    mapName: "魔法使いと空の孤島",
    description: "ハロウィンマップ第２弾",
    mapImgLink: "/img/8.jpg",
    link: "/world/8",
    alt: "魔法使いと空の孤島 マインクラフト脱出マップ",
  },
  {
    mapName: "教室10《8番出口オマージュ》",
    description: "また絶望の０を見る",
    mapImgLink: "/img/7.jpg",
    link: "/world/7",
    alt: "教室10《8番出口オマージュ》 マインクラフト脱出マップ",
  },
  {
    mapName: "雪夜の山峡",
    description: "メリークリスマス！",
    mapImgLink: "/img/6.jpg",
    link: "/world/6",
    alt: "雪夜の山峡 マインクラフト脱出マップ",
  },
  {
    mapName: "ハロウィンハウスからの脱出",
    description: "トリック・オア・トリック",
    mapImgLink: "/img/5.jpg",
    link: "/world/5",
    alt: "ハロウィンハウスからの脱出 マインクラフト脱出マップ",
  },
  {
    mapName: "謎めく研究所からの脱出",
    description: "どんな研究をしているのだろうか",
    mapImgLink: "/img/4.jpg",
    link: "/world/4",
    alt: "謎めく研究所からの脱出 マインクラフト脱出マップ",
  },
  {
    mapName: "トロールMAP",
    description: "騙すか 騙されるか",
    mapImgLink: "/img/3.jpg",
    link: "/world/3",
    alt: "トロールMAP マインクラフト脱出マップ",
  },
  {
    mapName: "とある民家からの脱出",
    description: "THE 王道",
    mapImgLink: "/img/2.jpg",
    link: "/world/2",
    alt: "とある民家からの脱出 マインクラフト脱出マップ",
  },
  {
    mapName: "釣り人の記憶",
    description: "全ての始まり",
    mapImgLink: "/img/1.jpg",
    link: "/world/1",
    alt: "釣り人の記憶 マインクラフト脱出マップ",
  },
];
export const imgSize = {
  width: 340,
  height: 191,
};
