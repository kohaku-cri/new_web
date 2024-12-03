import { randomUUID } from "crypto";

type MapItem = {
  mapName: string;
  description: string;
  mapImgLink: string;
  link: string;
  alt: string;
  id: string;
};

export const mapdata: MapItem[] = [
  // ひな形 一番上の配列に追加
  // {
  //   mapName: "魔法使いと空の孤島",
  //   description: "ハロウィンマップ第２弾",
  //   mapImgLink: "/img/8.jpg",
  //   link: "a",
  //   alt: "魔法使いと空の孤島 マインクラフト脱出マップ",
  //   id:randomUUID(),
  // },

  {
    mapName: "魔法使いと空の孤島",
    description: "ハロウィンマップ第２弾",
    mapImgLink: "/img/8.jpg",
    link: "a",
    alt: "魔法使いと空の孤島 マインクラフト脱出マップ",
    id: randomUUID(),
  },
  {
    mapName: "教室10《8番出口オマージュ》",
    description: "また絶望の０を見る",
    mapImgLink: "/img/7.jpg",
    link: "a",
    alt: "",
    id: randomUUID(),
  },
  {
    mapName: "雪夜の山峡",
    description: "メリークリスマス！",
    mapImgLink: "/img/6.jpg",
    link: "a",
    alt: "",
    id: randomUUID(),
  },
  {
    mapName: "ハロウィンハウスからの脱出",
    description: "トリック・オア・トリック",
    mapImgLink: "/img/5.jpg",
    link: "a",
    alt: "",
    id: randomUUID(),
  },
  {
    mapName: "謎めく研究所からの脱出",
    description: "どんな研究をしているのだろうか",
    mapImgLink: "/img/4.jpg",
    link: "a",
    alt: "",
    id: randomUUID(),
  },
  {
    mapName: "トロールMAP",
    description: "騙すか 騙されるか",
    mapImgLink: "/img/3.jpg",
    link: "a",
    alt: "",
    id: randomUUID(),
  },
  {
    mapName: "とある民家からの脱出",
    description: "THE 王道",
    mapImgLink: "/img/2.jpg",
    link: "a",
    alt: "",
    id: randomUUID(),
  },

  {
    mapName: "釣り人の記憶",
    description: "全ての始まり",
    mapImgLink: "/img/1.jpg",
    link: "a",
    alt: "",
    id: randomUUID(),
  },
];
export const imgSize = {
  width: 340,
  height: 191,
};
