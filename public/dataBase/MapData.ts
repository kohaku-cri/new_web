type Map = {
  mapNum: string;
  mapName: string;
  mapImgLink: string;
  link: string;
  youtube: string;
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
  //   youtube: "",
  //   alt: "魔法使いと空の孤島 マインクラフト脱出マップ",
  //   date: "2024/11/4",
  //   visibility: public,
  // },

  //visibility・・・公開情報
  //値 public＝公開 local＝非公開 timeLocal＝一時非公開
  // public
  // local
  // timeLocal

  //詳細ページのURLについて・・・mapNumの数値（文字列）とURLは同一とすること

  //youtubeリンクは埋め込みリンクのリンクを使用すること (URL部分を選択しマウスを離さずにctrl+c)

  {
    mapNum: "8",
    mapName: "魔法使いと空の孤島",
    mapImgLink: "/img/8.jpg",
    link: "/world/8",
    youtube: "https://www.youtube.com/embed/nmF8JFw_GZI?si=EMaC0JICYQ7zPgUm",
    alt: "魔法使いと空の孤島 マインクラフト脱出マップ",
    date: "2024/11/4",
    visibility: "public",
  },
  {
    mapNum: "7",
    mapName: "教室10《8番出口オマージュ》",
    mapImgLink: "/img/7.jpg",
    link: "/world/7",
    youtube: "https://www.youtube.com/embed/J66lDqrVr7Y?si=FJ4Ja-3lo9sciYvO",
    alt: "教室10《8番出口オマージュ》 マインクラフト脱出マップ",
    date: "2024/1/23",
    visibility: "public",
  },
  {
    mapNum: "6",
    mapName: "雪夜の山峡",
    mapImgLink: "/img/6.jpg",
    link: "/world/6",
    youtube: "https://www.youtube.com/embed/_BaqzBPFcE0?si=2j_eWcdFIL5zL_R-",
    alt: "雪夜の山峡 マインクラフト脱出マップ",
    date: "2023/12/23",
    visibility: "public",
  },
  {
    mapNum: "5",
    mapName: "ハロウィンハウスからの脱出",
    mapImgLink: "/img/5.jpg",
    link: "/world/5",
    youtube: "https://www.youtube.com/embed/G9VbfwQQgbY?si=vHK1OVxIR1QtcFft",
    alt: "ハロウィンハウスからの脱出 マインクラフト脱出マップ",
    date: "2023/10/26",
    visibility: "public",
  },
  {
    mapNum: "4",
    mapName: "謎めく研究所からの脱出",
    mapImgLink: "/img/4.jpg",
    link: "/world/4",
    youtube: "https://www.youtube.com/embed/U47Z2Jm2Hec?si=1Ddh3VA8iqNoEv7V",
    alt: "謎めく研究所からの脱出 マインクラフト脱出マップ",
    date: "2023/10/6",
    visibility: "public",
  },
  {
    mapNum: "3",
    mapName: "トロールMAP",
    mapImgLink: "/img/3.jpg",
    link: "/world/3",
    youtube: "https://www.youtube.com/embed/5851_eTBWtA?si=qhrNxJrmre5zW20k",
    alt: "トロールMAP マインクラフト脱出マップ",
    date: "2023/9/10",
    visibility: "public",
  },
  {
    mapNum: "2",
    mapName: "【短編】とある民家からの脱出",
    mapImgLink: "/img/2.jpg",
    link: "/world/2",
    youtube: "https://www.youtube.com/embed/uBVeSxIJMOo?si=Vr8BEONaVfjNH8fz",
    alt: "とある民家からの脱出 マインクラフト脱出マップ",
    date: "2024/9/04",
    visibility: "public",
  },
  {
    mapNum: "1",
    mapName: "釣り人の記憶",
    mapImgLink: "/img/1.jpg",
    link: "/world/1",
    youtube: "https://www.youtube.com/embed/8TYrP9o87Ws?si=5WsJVtvJJkv5b0rC",
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
