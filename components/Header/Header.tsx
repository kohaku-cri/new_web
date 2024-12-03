import Link from "next/link";
import style from "../../components/Header/Header.module.css";

export function Header() {
  return (
    <div className={style.header}>
      <Link href="/" className={style.link}>ホーム</Link>
      <Link href="" className={style.link}>情報</Link>
      <Link href="" className={style.link}>お知らせ</Link>
      <Link href="" className={style.link}>ツール</Link>

    </div>
  );
}
