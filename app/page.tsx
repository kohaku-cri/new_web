import Head from "next/head";
import style from "../components/index/index.module.css";
import { ListButton } from "../components/LinkButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>ホーム│こはく脱出マップ配布所</title>
      </Head>
      <div className={style.main}>
        <div className={style.topElement}>
          <div className={style.newMap}>
            <h1>｜新作情報｜</h1>
            <img
              src="/img/8.jpg"
              alt="魔法使いと空の孤島 マインクラフト脱出マップ"
            />
            <h2 className={style.newMapName}>魔法使いと空の孤島</h2>
            <p className={`${style.sanserif} ${style.newMapDescription}`}>
              ハロウィンマップ第２弾
            </p>
            <ListButton url="https://www.google.com/" />
          </div>
          <div className={style.news}>
            <h1>｜お知らせ｜</h1>
            <div className={style.newsPlace}></div>
          </div>
        </div>
        <div className={style.mapList}>
          <h1>過去作</h1>
        </div>
      </div>
    </>
  );
}
