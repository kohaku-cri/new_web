import Link from "next/link";
import style from "@/components/Button/LinkButton.module.css";

type props = {
  url: string;
  title: string;
  visibility: string;
};

export function ListButton(props: props) {
  return (
    <div>
      <Link href={props.url} className={`${style.LinkButton} ${props.visibility == "local" ? style.none : null}`}>
        {props.title}
      </Link>
    </div>
  );
}
