"use client";
import style from "@/components/news.module.css";
import { newsData } from "@/public/dataBase/newsData";
import { usePathname } from "next/navigation";

export default function News() {
  const pathName = usePathname();
  const foundData = newsData.find((item) => "/news/" + item.date === pathName);

  return (
    <div className={style.main}>
      <div>
        <div>
          <h2>｜{foundData?.title}</h2>
          <p>サイトの更新を行いました 変更点は以下の通りです</p>
          <h3 className={style.lightBlue}>〇 追加</h3>
          <p>・お知らせページ</p>
          <h3 className={style.green}>〇 変更</h3>
          <p>・全体的なデザイン</p>
          <h3 className={style.red}>〇 削除</h3>
          <p>・隠れクリーパー</p>
          <p>・財宝ナビゲータ（一時的）</p>
          <h2 className={style.marTop200}>技術的なお話</h2>
          <h3 className={style.lightBlue}>〇 追加</h3>
          <p>・Next.js （React）</p>
          <h3 className={style.red}>〇 削除</h3>
          <p>・直に記述するHTML</p>
          <p className={style.marTop110}>せっかくなので何が変わったのかについて少しまとめてみたいと思います</p>
        </div>
      </div>
    </div>
  );
}
