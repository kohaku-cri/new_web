import Link from "next/link";
import style from "./MapList.module.css";
import { mapdata, imgSize } from "./MapData";
import Image from "next/image";

export function MapList() {
  return (
    <>
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
              <Link href={item.link}>詳しく見る</Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
