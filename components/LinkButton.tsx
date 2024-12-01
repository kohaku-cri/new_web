import Link from "next/link";
import style from "../components/index/index.module.css";

export function ListButton(props: any) {
  return (
    <>
      <Link href={props.url} className={style.LinkButton}>
        詳しく見る
      </Link>
    </>
  );
}
