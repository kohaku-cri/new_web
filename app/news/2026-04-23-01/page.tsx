import style from "@/components/News/news.module.css";
import News from "@/components/News/News";
import Link from "next/link";
import NewsImg from "@/components/NewsImg/NewsImg";

export default function NewsText() {
  // 下線はclass link
  return (
    <>
      <News
        text={
          <>
            <p className={style.marTop40}>
              新サイトへ移行したときに非公開とした財宝ナビ（旧名：財宝ナビゲータ）を再公開しました。
            </p>
            <p>冒険のお供にご活用ください！</p>
            <Link href="/tools/treasure-navi" className={style.marTop60}>
              <NewsImg link="img/navi.png" />
              <p>財宝ナビへ移動</p>
            </Link>
          </>
        }
      />
    </>
  );
}
