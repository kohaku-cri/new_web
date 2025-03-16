import style from "@/components/News/news.module.css";
import News from "@/components/News/News";
// import NewsImg from "@/components/NewsImg/NewsImg";

export default function NewsText() {
  // 下線はclass link
  return (
    <News
      text={
        <>
    <h3 className={style.marTop40}>静寂が降り積もる。 ─────</h3>
    <p>サイト内の降雪の演出を停止しました</p>
    <p>クリスマスや降雪に関連するページでは引き続き表示しています</p>
        </>
      }
    />
  );
}
