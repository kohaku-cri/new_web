import style from "@/components/News/news.module.css";
import News from "@/components/News/News";

export default function NewsText() {
  return (
    <News
      text={
        <>
          <p className={style.marTop40}>サイトの更新を行いました 変更点は以下の通りです</p>
          <h3 className={style.lightBlue}>〇 追加</h3>
          <p>・お知らせページ</p>
          <p>・公開状況の明確化</p>
          <p>・各ワールド紹介ページに権利情報を追加</p>
          <p>・ヘッダー</p>
          <h3 className={style.green}>〇 変更</h3>
          <p>・全体的なデザイン</p>
          <p>・ガイドラインをもっと見やすく</p>
          <h3 className={style.red}>〇 削除</h3>
          <p>・隠れクリーパー</p>
          <p>・財宝ナビゲータ（一時的）</p>
          <h2 className={style.marTop200}>｜技術的な変更</h2>
          <h3 className={style.lightBlue}>〇 追加</h3>
          <p>・Next.js （React）</p>
          <p>・GoatCounter</p>
          <h3 className={style.red}>〇 削除</h3>
          <p>・直に記述するHTML</p>
          <p>・Googleアナリティクス</p>
        </>
      }
    />
  );
}
