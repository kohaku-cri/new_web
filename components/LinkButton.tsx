import Link from "next/link";
import style from "../components/index/index.module.css";

export function ListButton(props: any) {
  return (
    <div className={style.LinkButton}>
      <Link href={props.url}>
        詳しく見る
      </Link>
    </div>
  );
}
