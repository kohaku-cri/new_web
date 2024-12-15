"use client";
import style from "@/components/News/news.module.css";
import { newsData } from "@/public/dataBase/newsData";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { pageName } from "@/public/dataBase/pageName";

type props = {
  text: JSX.Element;
};

export default function News(props: props) {
  const pathName = usePathname();
  const foundData = newsData.find((item) => "/news/" + item.date === pathName);
  const date = foundData?.date.slice(0, -3);
  useEffect(() => {
    document.title = `${foundData?.title}${pageName}`;
  }, [foundData?.title]);
  return (
    <div className={style.main}>
      <div>
        <div>
          <p className={style.date}>投稿日 {date}</p>
          <h2>｜{foundData?.title}</h2>
          <div className={style.tags}>
            <p>タグ：</p>
              {foundData?.tags.map((item) => {
                return (
                  <p
                    className={`${style.tag} ${
                      foundData.tags[0] === item ? style.none : null
                    }`}
                    key={item}
                  >
                    {item}
                  </p>
                );
              })}
          </div>

          {props.text}
        </div>
      </div>
    </div>
  );
}
