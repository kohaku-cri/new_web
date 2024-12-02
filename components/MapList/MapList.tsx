import style from "./MapList.module.css";
import { mapdata, imgSize } from "./MapData";
import Image from "next/image";
import { ListButton } from "../Button/LinkButton";

export function MapList() {
  return (
    <div className={style.mapList}>
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
            <ListButton url={item.link} />
          </div>
        );
      })}
    </div>
  );
}
