"use client";
import Link from "next/link";
import style from "@/components/Header/Header.module.css";
import Image from "next/image";
import { useState } from "react";
import nextConfig from "../../next.config";

export function Header() {
  const BASE_PATH = nextConfig.basePath || "";
  const [hamburgerMenu, sethamburgerMenu] = useState(false);
  const MenuOpen = () => sethamburgerMenu(true);
  const MenuClose = () => sethamburgerMenu(false);

  return (
    <>
      <div className={style.header}>
        <Link href="/" className={style.link}>
          ホーム
        </Link>
        <Link href="/information" className={style.link}>
          各種ガイドライン
        </Link>
        <Link href="/news" className={style.link}>
          お知らせ一覧
        </Link>
        <Link href="/tools" className={style.link}>
          ツール
        </Link>
        <Link href="/FQA" className={style.link}>
          FQA
        </Link>
      </div>
      <div className={style.phoneHeader}>
        <Image
          src={`${BASE_PATH}/img/hamburger.png`}
          alt=""
          width={42}
          height={42}
          className={style.hamburgerMenuButton}
          onClick={MenuOpen}
        />
        <div
          className={`${style.hamburgerMenu} ${hamburgerMenu && style.open} ${
            hamburgerMenu ? null : style.none
          }`}
        >
          {/* ここにハンバーガーメニューの表示を書く */}
          <h3 className={style.closeButton} onClick={MenuClose}>
            メニューを閉じる
          </h3>
          <div className={style.hamburgerLink}>
          <Link href="/" onClick={MenuClose}>
            ホーム
          </Link>
          <Link href="/information" onClick={MenuClose}>
            配信者ガイドライン
          </Link>
          <Link href="/news" onClick={MenuClose}>
            お知らせ一覧
          </Link>
          <Link href="/tools" onClick={MenuClose}>
            ツール
          </Link>
          <Link href="/fqa" onClick={MenuClose}>
            FQA
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}
