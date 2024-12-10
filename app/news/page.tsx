"use client";
import style from "@/components/newsList.module.css";
import { newsData } from "@/public/dataBase/newsData";
import Link from "next/link";
import { useState } from "react";

export default function News() {
  const [order, setorder] = useState(false);
  const buttonOrder = () => {
    setorder((i) => !i);
  };
  return (
    <div className={style.main}>
      <div className={style.topTitle}>
        <h2 className={style.changeOrder} onClick={buttonOrder}>
          {order ? "⇧" : "⇩"}
        </h2>
        <h2 className={style.title}>新着順</h2>
        <h2 className={style.changeOrder} onClick={buttonOrder}>
          {order ? "⇧" : "⇩"}
        </h2>
      </div>
      {newsData.map((item) => {
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
