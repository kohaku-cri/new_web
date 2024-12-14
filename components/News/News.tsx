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
  useEffect(() => {
    document.title = `${foundData?.title}${pageName}`;
  }, [foundData?.title]);
  return (
    <div className={style.main}>
      <div>
        <div>
          <h2>｜{foundData?.title}</h2>
          <p className={style.tags}>
            タグ：
            {foundData?.tags.map((item) => {
              return (
                <span
                  className={`${style.tag} ${
                    foundData.tags[0] === item ? style.none : null
                  }`}
                  key={item}
                >
                  {item}
                </span>
              );
            })}
          </p>
          {props.text}
        </div>
      </div>
    </div>
  );
}
