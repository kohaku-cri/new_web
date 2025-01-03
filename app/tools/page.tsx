import style from "@/components/Tools/tools.module.css";
import { pageName } from "@/public/dataBase/pageName";

export const metadata = {
  title: `ツール${pageName}`,
  description: "すべてのお知らせ記事を一覧表示",
};

export default function Tools() {
  return (
    <div className={style.main}>
      <h2>このページは現在準備中です...</h2>
    </div>
  );
}
