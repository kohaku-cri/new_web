import style from "@/components/Tools/ToolList.module.css";
import { mapdata, imgSize } from "@/public/dataBase/ToolList";
import Image from "next/image";
import { ListButton } from "@/components/Button/LinkButton";

export function ToolList() {
  return (
    <div className={style.mapList}>
      {mapdata.map((item) => {
        return (
          <div className={style.map} key={item.mapName}>
            <Image
              src={item.mapImgLink}
              width={imgSize.width}
              height={imgSize.height}
              alt={item.alt  || "代替テキストが設定されていません"}
            />
            <h2>{item.mapName}</h2>
            <p>{item.date}</p>
            <ListButton
              url={item.link}
              title="詳しく見る"
              visibility={item.visibility}
            />

            {item.visibility == "public" && (
              <p className={`${style.visibility} ${style.public}`}>公開</p>
            )}
            {item.visibility == "local" && (
              <p className={`${style.visibility} ${style.local}`}>非公開</p>
            )}
            {item.visibility == "timeLocal" && (
              <p className={`${style.visibility} ${style.timeLocal}`}>
                一時非公開中
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
