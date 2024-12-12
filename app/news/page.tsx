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

  const [selectedOption, setSelectedOption] = useState("全て");

  const tagSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  let data = newsData.filter((item) => item.tags.includes(selectedOption));
  data = order ? data : data.slice().reverse();
  // console.log(data);
  return (
    <div className={style.main}>
      <div className={style.margin}>
        <p className={style.searchText}>
          検索：{selectedOption} {"ヒット"}
          {data.length}
          {"件"}
        </p>

        <h3 className={style.tagSearch} onClick={tagSearchOpen}>
          タグで検索
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
        <div>
          <p className={style.miniSize}>※矢印をクリックで順番変更</p>
        </div>
        {isOpen && (
          <div className={style.background}>
            <div className={style.tagsList}>
              {/* ここにモーダルの中身を記述 */}
              <div className={style.tags}>
                {tags.map((item) => {
                  return (
                    <div key={item}>
                      <input
                        className={style.checkBox}
                        type="radio"
                        value={item}
                        name="tagSearch"
                        onChange={tagSearch}
                        checked={item === selectedOption}
                      />
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
              <p className={style.erase} onClick={tagSearchClose}>
                閉じる
              </p>
            </div>
          </div>
        )}
        <div className={style.searchResult}>
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
      </div>
    </div>
  );
}
