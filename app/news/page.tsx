import { ListButton } from "@/components/Button/LinkButton";
import style from "@/components/newsList.module.css";
import { newsData } from "@/public/dataBase/newsData";
import Link from "next/link";

export default function New() {
  return <div className={style.main}>
    {newsData.map((item)=>{
      return (
        <Link href={`/news/${item.date}`}>{item.title}</Link>
      )
    })}
  </div>;
}
