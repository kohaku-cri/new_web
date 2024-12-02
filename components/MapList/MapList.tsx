import style from "./MapList.module.css";
import { mapdata, imgSize } from "./MapData";
import Image from "next/image";
import { ListButton } from "../Button/LinkButton";

export function MapList() {
  return (
    <div>
      {mapdata.map((item) => {
        return (
          <div className={style.mapList}>
            <div>
              <Image
                src={item.mapImgLink}
                width={imgSize.width}
                height={imgSize.height}
                alt={item.alt}
              />
              <h2>{item.mapName}</h2>
              {/* <p>{item.description}</p> */}
              <ListButton url={item.link}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}
