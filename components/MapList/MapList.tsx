import style from "../components/MapList/MapList.module.css";
import { mapdata, imgSize } from "./MapData";
import Image from "next/image";

export function MapList() {
  return (
    <>
      {mapdata.map((item) => {
        return (
          <>
            <Image
              src={item.mapImgLink}
              width={imgSize.width}
              height={imgSize.height}
              alt={item.alt}
            />
            <h2>{item.mapName}</h2>
            <p>{item.description}</p>
          </>
        );
      })}
    </>
  );
}
