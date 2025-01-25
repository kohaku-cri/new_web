import style from "@/components/News/news.module.css";
import News from "@/components/News/News";
import NewsImg from "@/components/NewsImg/NewsImg";

export default function NewsText() {
  // 下線はclass link
  return (
    <News
      text={
        <>
          <p className={style.marTop40}>
            修正済みのバグに関する情報をこちらのサイトで表示するようにしました
          </p>
          <h3 className={style.marTop40}>重要度と修正日について ─────</h3>
          <NewsImg link="img/bugFix.png"/>
          <h3>○重要度</h3>
          <p>A┃非常に重大な問題</p>
          <p>B┃AとCの中間に相当する問題</p>
          <p>C┃軽微な問題</p>
          <h3>○修正日</h3>
          <p>-（ハイフン）の意味</p>
          <p>修正日の記録をしていないもの（修正日不明）</p>
        </>
      }
    />
  );
}
