import NewsSearch from "@/components/NewsSearch/NewsSearch";
import { pageName } from "@/public/dataBase/pageName";

export const metadata = {
  title: `お知らせ一覧${pageName}`,
  description: "すべてのお知らせと記事を一覧表示",
};

export default function News() {
  return <NewsSearch />;
}
