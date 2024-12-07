import style from "@/components/MapList/MapList.module.css";
import { mapdata, imgSize } from "@/public/dataBase/MapData";
import Image from "next/image";
import { ListButton } from "@/components/Button/LinkButton";

export function MapList() {
  return (
    <div className={style.mapList} key="mapList">
      {mapdata.map((item) => {
        return (
          <div className={style.map}>
            <Image
              src={item.mapImgLink}
              width={imgSize.width}
              height={imgSize.height}
              alt={item.alt}
            />
            <h2>{item.mapName}</h2>
            <p>{item.date}</p>
            <ListButton url={item.link} title="詳しく見る" />
          </div>
        );
      })}
    </div>
  );
}
