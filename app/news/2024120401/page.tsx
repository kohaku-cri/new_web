import { ListButton } from "@/components/Button/LinkButton";
import style from "@/components/news.module.css";

type data = {
  title:string;
  date:number;
}
const newsData:data[] = [
  {title:"サイトの更新情報まとめ",date:2024120401},
]

export default function news() {
  return (
    <div className={style.main}>
      <div>
        <div>
          <h2>｜サイトの更新情報まとめ</h2>
          <p>サイトの更新を行いました 変更点は以下の通りです</p>
          <h3>
            A. <span className={style.lightBlue}>追加</span>
          </h3>
          <p>・お知らせページ</p>
          <h3>
            B. <span className={style.green}>変更</span>
          </h3>

          <h3>
            C. <span className={style.red}>削除</span>
          </h3>
          <p>・隠れクリーパー</p>
        </div>
      </div>
    </div>
  );
}
