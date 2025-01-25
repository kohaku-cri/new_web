import style from "@/components/News/news.module.css";
import News from "@/components/News/News";
// import NewsImg from "@/components/NewsImg/NewsImg";

export default function NewsText() {
  // 下線はclass link
  return (
    <News
      text={
        <>
    <p className={style.marTop40}>修正済みのバグに関する情報をこちらのサイトで表示するようにしました</p>
    <h3 className={style.marTop40}>重要度と修正日について ─────</h3>

        </>
      }
    />
  );
}
