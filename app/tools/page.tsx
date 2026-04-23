import NewsImg from "@/components/NewsImg/NewsImg";
import style from "@/components/Tools/tools.module.css";
import { pageName } from "@/public/dataBase/pageName";
import Link from "next/link";

export const metadata = {
  title: `ツール${pageName}`,
  description: "公開しているツール一覧です",
};

export default function Tools() {
  return (
    <div className={style.main}>
      <div>
        <Link href="/tools/treasure-navi">
          <NewsImg link="img/navi.png" />
          <h2>財宝ナビ</h2>
          <p className={style.marTop20}>
            マインクラフト統合版の埋もれた財宝の位置を特定することのできるツールです
          </p>
        </Link>
      </div>
    </div>
  );
}
