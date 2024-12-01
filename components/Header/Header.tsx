import Link from "next/link";
import style from "../../components/Header/Header.module.css";

export function Header() {
  return (
    <div className={style.header}>
      <Link href="">ホーム</Link>
      <Link href="">過去作</Link>
      <Link href="">お知らせ</Link>
      <Link href="">ツール</Link>

    </div>
  );
}
