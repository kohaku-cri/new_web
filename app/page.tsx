import { MapList } from "@/components/MapList/MapList";
import style from "../components/index/index.module.css";
import { ListButton } from "../components/Button/LinkButton";
import { mapdata, imgSize } from "../public/dataBase/MapData";
import Image from "next/image";
import Link from "next/link";
import { newsData } from "@/public/dataBase/newsData";

export default function Home() {
  const getNews = newsData.slice(0, 6);

  return (
    <>
      <div className={style.main}>
        <div className={style.topElement}>
          <div className={style.newMap}>
            <h1>｜新作情報｜</h1>
            <Image
              width={imgSize.width}
              height={imgSize.height}
              src={mapdata[0].mapImgLink}
              alt={mapdata[0].alt}
            />
            <h2 className={style.newMapName}>{mapdata[0].mapName}</h2>
            <p className={style.newMapDescription}>
              {mapdata[0].date}
            </p>
            <ListButton url={mapdata[0].link} title="詳しく見る" />
          </div>
          <div className={style.news}>
            <h1>｜お知らせ｜</h1>
            <div className={style.newsPlace}>
              <div>
                <Link href="/news/WhatIsNews" className={style.fixationNew}>
                  お知らせとは...？
                </Link>
                {getNews.map((item) => {
                  return (
                    <Link href={`/news/${item.date}`} className={style.new}>
                      {item.date} ・{item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={style.mapList}>
          <h1>過去作</h1>
          <MapList />
        </div>
      </div>
    </>
  );
}
