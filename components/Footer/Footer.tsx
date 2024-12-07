import Link from "next/link";
import style from "@/components/Footer/Footer.module.css";

export function Footer() {
  return (
    <div className={style.links}>
      <div>
        <Link
          href="https://www.youtube.com/@kohaku_ch"
          className={style.youtube}
        >
          YouTube
        </Link>
        <Link href="https://twitter.com/kohaku_cri" className={style.twitter}>
          Twitter
        </Link>
        <Link
          href="https://bsky.app/profile/kohaku-cri.bsky.social"
          className={style.bluesky}
        >
          Bluesky
        </Link>
        <Link
          href="https://minecraft-mcworld.com/author/fa4819bad0d33870ae98f5a7d971ae49d4f86553/"
          className={style.crafter}
        >
          クラフターズコロニー
        </Link>
      </div>
    </div>
  );
}
