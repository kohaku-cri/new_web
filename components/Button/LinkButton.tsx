import Link from "next/link";
import style from "./LinkButton.module.css";

export function ListButton(props: any) {
  return (
    <div>
      <Link href={props.url} className={style.LinkButton}>
        詳しく見る
      </Link>
    </div>
  );
}
