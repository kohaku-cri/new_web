"use client";
import style from "@/components/World/world.module.css";
import { mapdata } from "@/public/dataBase/MapData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function World() {
  const aspect = 168;
  const pathName = usePathname();
  const foundData = mapdata.find((item) => "/world/" + item.mapNum == pathName);
  return (
    <div className={style.main}>
      <div className={style.youtube}>
        <iframe
          src="https://www.youtube.com/embed/nmF8JFw_GZI?si=j14rS4wTPfA5pnOT"
          allowFullScreen
        ></iframe>
        <h2>
          #{foundData?.mapNum} {foundData?.mapName}
        </h2>
      </div>
      <div className={style.maps}>
        {mapdata.map((item) => {
          return (
            <div className={style.mapList}>
              <Link href={item.link}>
                <div>
                  <Image
                    src={item.mapImgLink}
                    alt={item.alt}
                    width={aspect}
                    height={aspect * 0.5625}
                  />
                  <h3>{item.mapName}</h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
