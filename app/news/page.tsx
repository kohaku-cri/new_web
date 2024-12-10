import style from "@/components/newsList.module.css";
import { newsData } from "@/public/dataBase/newsData";
import Link from "next/link";

export default function News() {
  return (
    <div className={style.main}>
      <h2>新着順</h2>
      {newsData.map((item) => {
        return (
          <div key={item.title}>
            <Link href={`/news/${item.date}`}>{item.date}・{item.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
