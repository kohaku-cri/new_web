import { MapList } from "@/components/MapList/MapList";
import style from "../components/index/index.module.css";
import { ListButton } from "../components/LinkButton";
import { mapdata, imgSize } from "../components/MapList/MapData";
import Image from "next/image";

export default function Home() {
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
            <p className={`${style.sanserif} ${style.newMapDescription}`}>
              {mapdata[0].description}
            </p>
            <ListButton url="https://www.google.com/" />
          </div>
          <div className={style.news}>
            <h1>｜お知らせ｜</h1>
            <div className={style.newsPlace}></div>
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
