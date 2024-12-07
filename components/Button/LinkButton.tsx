import Link from "next/link";
import style from "@/components/Button/LinkButton.module.css";

export function ListButton(props: any) {
  return (
    <div>
      <Link href={props.url} className={style.LinkButton}>
        {props.title}
      </Link>
    </div>
  );
}
