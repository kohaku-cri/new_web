"use client";
import style from "@/components/newsList.module.css";
import { newsData, tags } from "@/public/dataBase/newsData";
import Link from "next/link";
import { useState } from "react";

export default function News() {
  const [order, setorder] = useState(true);
  const buttonOrder = () => {
    setorder((i) => !i);
  };
  const [isOpen, setIsOpen] = useState(false);
  const tagSearchOpen = () => setIsOpen(true);
  const tagSearchClose = () => setIsOpen(false);
  const data = order ? newsData : newsData.slice().reverse();

  return (
    <div className={style.main}>
      <h3 className={style.tagSearch} onClick={tagSearchOpen}>
        タグ検索
      </h3>
      <div className={style.topTitle}>
        <h2 className={style.changeOrder} onClick={buttonOrder}>
          {order ? "⇧" : "⇩"}
        </h2>
        <h2 className={style.title}>{order ? "新しい順" : "古い順"}</h2>
        <h2 className={style.changeOrder} onClick={buttonOrder}>
          {order ? "⇧" : "⇩"}
        </h2>
      </div>
        <p className={style.miniSize}>※矢印をクリックで順番変更</p>

      {isOpen && (
        <div className={style.background}>
          <div className={style.tagsList}>
            {/* ここにモーダルの中身を記述 */}
            <div className={style.tags}>
              {tags.map((item) => {
                return (
                  <div key={item}>
                    <p className={style.checkBox}>■</p>
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
            <p className={style.erase} onClick={tagSearchClose}>
              ポップアップを閉じる
            </p>
          </div>
        </div>
      )}

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
