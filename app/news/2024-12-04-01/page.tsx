"use client";
import { ListButton } from "@/components/Button/LinkButton";
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

          <h3 className={style.red}>〇 削除</h3>
          <p>・隠れクリーパー</p>
        </div>
      </div>
    </div>
  );
}
