type data = {
  title: string;
  date: string;
  tags: number[];
};
type tags = string;

// 行の番号のから10を引いた数をタグ付けに使用 ※”全て”（配列[0]）は自動的に付与される
export const tags: tags[] = [
  "全て",
  "マインクラフト",
  "統合版",
  "JAVA版",
  "作品の公開状況",
  "制作進捗",
  "制作秘話",
  "修正報告",
  "サイト更新",
  "ルール改定",
  "脱出マップ関連",
  "技術的なお話",
  "日記帳",
];
const Data: data[] = [
  // 新規記事は一番上に追加
  { title: "各ワールドページに『バグ修正情報』を追加", date: "2025-01-25-01", tags: [8] },
  { title: "雪、止んだね。", date: "2025-01-02-01", tags: [8] },
  { title: "2024年の振り返り", date: "2024-12-31-01", tags: [6,12] },
  { title: "もーいくつ寝るとークリスマス", date: "2024-12-17-02", tags: [8,11,12] },
  { title: "サイトの更新情報まとめ", date: "2024-12-17-01", tags: [8,11] },
];

const newsData = Data.map((item) => {
  const mappedTags = item.tags.map((tagIndex) => tags[tagIndex] || "");
  const updatedTags = [tags[0], ...mappedTags];
  return {
    ...item,
    tags: updatedTags,
  };
});
export { newsData };
