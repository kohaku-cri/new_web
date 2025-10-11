import style from "@/components/News/news.module.css";
import News from "@/components/News/News";

export default function NewsText() {
  // 下線はclass link
  return (
    <News
      text={
        <>
          <p className={style.marTop40}>
            『ガイドライン』の名称を『配信者ガイドライン』に改めました
          </p>
          <p>※本記事の投稿日と名称の変更日は異なります</p>
        </>
      }
    />
  );
}
