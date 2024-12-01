import style from "../components/index/index.module.css";
import { ListButton } from "../components/LinkButton";

export default function Home() {
  return (
    <>
      <header></header>

      <div className={style.main}>
        <h1 className={style.topTitle}>｜新作情報｜</h1>
        <div className={style.newMap}>
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
      </div>
    </>
  );
}
