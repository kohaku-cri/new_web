"use client";
import style from "@/components/World/world.module.css";
import { mapdata } from "@/public/dataBase/MapData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function World(props: any) {
  const aspect = 168;
  const pathName = usePathname();
  const foundData = mapdata.find((item) => "/world/" + item.mapNum == pathName);
  return (
    <div className={style.main}>
      <div className={style.margin}>
        <div className={style.mediaSection}>
          <iframe
            className={style.youtube}
            src="https://www.youtube.com/embed/nmF8JFw_GZI?si=Nb6EYpFWQGzytzdq"
            allowFullScreen
          ></iframe>
          <h2>
            #{foundData?.mapNum} {foundData?.mapName}
          </h2>
          <div className={style.description}>
            <p>公開日：{foundData?.date}</p>
            <div className={style.explain}>
              <div>{props.explain}</div>
            </div>
            <div className={style.hints}>
              <h2>～ヒント一覧～</h2>
              {props.hint.map((item: any) => {
                if (item.hint == undefined) {
                  item.hint = true;
                }
                return (
                  <details>
                    <summary
                      className={item.hint ? style.colorTrue : style.colorFalse}
                    >
                      {item.title}
                    </summary>
                    <p className={style.openText}>{item.open}</p>
                  </details>
                );
              })}
            </div>
          </div>
        </div>
        <div className={style.maps}>
          <h1 className={style.mapListTitle}>過去作</h1>
          {mapdata.map((item) => {
            return (
              <div key={item.link}>
                <Link href={item.link}>
                  <Image
                    src={item.mapImgLink}
                    alt={item.alt}
                    width={aspect}
                    height={aspect * 0.5625}
                  />
                  <h3>{item.mapName}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
