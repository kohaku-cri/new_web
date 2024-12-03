import { MapList } from "@/components/MapList/MapList";
import style from "../components/index/index.module.css";
import { ListButton } from "../components/Button/LinkButton";
import { mapdata, imgSize } from "../public/dataBase/MapData";
import Image from "next/image";
import Link from "next/link";

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
            {/* <p className={`${style.sanserif} ${style.newMapDescription}`}>
              {mapdata[0].description}
            </p> */}
            <ListButton url={mapdata[0].link} title="詳しく見る" />
          </div>
          <div className={style.news}>
            <h1>｜お知らせ｜</h1>
            <div className={style.newsPlace}>
              <div>
                <Link href="" className={style.fixationNew}>
                  お知らせとは...？
                </Link>
                <Link href="" className={style.new}>
                  2024/12/4 ・サイトの更新情報まとめ
                </Link>
                <Link href="" className={style.new}>
                  2024/12/4 ・サイトの更新情報まとめ
                </Link>
                <Link href="" className={style.new}>
                  2024/12/4 ・サイトの更新情報まとめ
                </Link>
                <Link href="" className={style.new}>
                  2024/12/4 ・サイトの更新情報まとめ
                </Link>
                <Link href="" className={style.new}>
                  2024/12/4 ・サイトの更新情報まとめ
                </Link>
                <Link href="" className={style.new}>
                  2024/12/4 ・サイトの更新情報まとめ
                </Link>
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
