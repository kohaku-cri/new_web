type Map = {
  mapNum: string;
  mapName: string;
  mapImgLink: string;
  link: string;
  alt?: string;
  date: string;
  visibility: string;
};

export const mapdata: Map[] = [
  // ひな形 一番上の配列に追加

  // {
  //   mapNum:"8",
  //   mapName: "魔法使いと空の孤島",
  //   mapImgLink: "/img/8.jpg",
  //   link: "/world/8",
  //   alt: "魔法使いと空の孤島 マインクラフト脱出マップ",
  //   date: "2024/11/4",
  //   visibility: public,
  // },

//visibility・・・公開情報
  //値 public＝公開 local＝非公開 timeLocal＝一時非公開

//詳細ページのURLについて・・・mapNumの数値（文字列）とURLは同一とすること

  {
    mapNum:"8",
    mapName: "魔法使いと空の孤島",
    mapImgLink: "/img/8.jpg",
    link: "/world/8",
    alt: "魔法使いと空の孤島 マインクラフト脱出マップ",
    date: "2024/11/4",
    visibility: "public",
  },
  {
    mapNum:"7",
    mapName: "教室10《8番出口オマージュ》",
    mapImgLink: "/img/7.jpg",
    link: "/world/7",
    alt: "教室10《8番出口オマージュ》 マインクラフト脱出マップ",
    date: "2024/1/23",
    visibility: "public",
  },
  {
    mapNum:"6",
    mapName: "雪夜の山峡",
    mapImgLink: "/img/6.jpg",
    link: "/world/6",
    alt: "雪夜の山峡 マインクラフト脱出マップ",
    date: "2023/12/23",
    visibility: "public",
  },
  {
    mapNum:"5",
    mapName: "ハロウィンハウスからの脱出",
    mapImgLink: "/img/5.jpg",
    link: "/world/5",
    alt: "ハロウィンハウスからの脱出 マインクラフト脱出マップ",
    date: "2023/10/26",
    visibility: "public",
  },
  {
    mapNum:"4",
    mapName: "謎めく研究所からの脱出",
    mapImgLink: "/img/4.jpg",
    link: "/world/4",
    alt: "謎めく研究所からの脱出 マインクラフト脱出マップ",
    date: "2023/10/6",
    visibility: "public",
  },
  {
    mapNum:"3",
    mapName: "トロールMAP",
    mapImgLink: "/img/3.jpg",
    link: "/world/3",
    alt: "トロールMAP マインクラフト脱出マップ",
    date: "2023/9/10",
    visibility: "public",
  },
  {
    mapNum:"2",
    mapName: "【短編】とある民家からの脱出",
    mapImgLink: "/img/2.jpg",
    link: "/world/2",
    alt: "とある民家からの脱出 マインクラフト脱出マップ",
    date: "2024/9/04",
    visibility: "public",
  },
  {
    mapNum:"1",
    mapName: "釣り人の記憶",
    mapImgLink: "/img/1.jpg",
    link: "/world/1",
    alt: "釣り人の記憶 マインクラフト脱出マップ",
    date: "2023/9/2",
    visibility: "public",
  },
];
const aspect = 340;
export const imgSize = {
  width: aspect,
  height: aspect * 0.5625,
};
