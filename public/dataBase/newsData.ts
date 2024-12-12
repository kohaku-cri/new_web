type data = {
  title: string;
  date: string;
  tags: string[];
};
type tags = string;

export const tags: tags[] = ["全て","マインクラフト", "統合版", "JAVA版"];
export const newsData: data[] = [
  { title: "情報", date: "2024-12-04-02", tags: ["全て", "統合版"] },
  { title: "サイトの更新情報まとめ", date: "2024-12-04-01", tags: ["全て"] },
];
