import style from "../components/index/index.module.css"

export default function Home() {
  return (
    <>
    <div className={style.main}>
      <h1 className={style.top}>｜新着情報｜</h1>
      <img src="/img/8.jpg" alt="" />
      <h2 className={style.topName}>#8魔法使いと空の孤島</h2>
      <p className={style.sanserif}>ハロウィンマップ第２弾</p>
    </div>
    </>
  );
}
