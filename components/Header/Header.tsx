"use client";
import Link from "next/link";
import style from "@/components/Header/Header.module.css";
import Image from "next/image";
import { useState } from "react";

export function Header() {
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
          ガイドライン
        </Link>
        <Link href="/news" className={style.link}>
          お知らせ一覧
        </Link>
        <Link href="/tools" className={style.link}>
          ツール
        </Link>
        <Link href="/fqa" className={style.link}>
          FQA
        </Link>
      </div>
      <div className={style.phoneHeader}>
        <Image
          src={"/img/hamburger.png"}
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
        </div>
      </div>
    </>
  );
}
