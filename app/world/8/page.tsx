import style from "@/components/World/world.module.css";
import { mapdata, imgSize } from "@/public/dataBase/MapData";
import Image from "next/image";
import Link from "next/link";

export default function World() {
  return (
    <div className={style.main}>
      <div className={style.test}>
        <iframe
          className={style.youtube}
          src="https://www.youtube.com/embed/nmF8JFw_GZI?si=j14rS4wTPfA5pnOT"
          allowFullScreen
        ></iframe>

        <div className={style.otherMap}>
          {mapdata.map((item) => {
            return (
              <Link href={item.link}>
                <div>
                  <Image
                    src={item.mapImgLink}
                    alt={item.alt}
                    width="180"
                    height="101"
                  />
                  <h3>{item.mapName}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
