"use client";
import style from "@/components/newsList.module.css";
import { newsData } from "@/public/dataBase/newsData";
import Link from "next/link";
import { useState } from "react";

export default function News() {
  const [order, setorder] = useState(true);
  const buttonOrder = () => {
    setorder((i) => !i);
  };
  const data = order ? newsData : newsData.slice().reverse();

  return (
    <div className={style.main}>
      <div className={style.topTitle}>
        <h2 className={style.changeOrder} onClick={buttonOrder}>
          {order ? "⇧" : "⇩"}
        </h2>
        <h2 className={style.title}>{order ? "新しい順" : "古い順"}</h2>
        <h2 className={style.changeOrder} onClick={buttonOrder}>
          {order ? "⇧" : "⇩"}
        </h2>
      </div>
      {data.map((item) => {
        return (
          <div key={item.title}>
            <Link href={`/news/${item.date}`}>
              {item.date}・{item.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
