type data = {
  title: string;
  date: string;
  tags: number[];
};
type tags = string;

// 行の番号のから10を引いた数をタグ付けに使用 ※”全て”は自動的に付与される
export const tags: tags[] = [
  "全て",
  "マインクラフト",
  "統合版",
  "JAVA版",
  "脱出マップ関連",
  "技術的なお話",
  "日記帳",
];
let Data: data[] = [
  { title: "情報", date: "2024-12-04-02", tags: [1, 2] },
  { title: "サイトの更新情報まとめ", date: "2024-12-04-01", tags: [1] },
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
