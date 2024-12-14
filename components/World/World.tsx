"use client";
import style from "@/components/World/world.module.css";
import { mapdata } from "@/public/dataBase/MapData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListButton } from "../Button/LinkButton";
import { useState, useEffect } from "react";
import { pageName } from "@/public/dataBase/pageName";

type hint = {
  title?: string; // ヒントタイトル
  open?: string; // ヒントを開いたときに表示される内容
  hint?: boolean; // trueの場合ヒント、falseの場合答え (省略可能: デフォルト true)
  img?: string; // 表示する画像リンク (省略可能)
  alt?: string; // 画像の代替テキスト (imgが指定された場合は必須)
};

type props = {
  explain: JSX.Element; // 概要欄の内容
  hint: hint[]; // ヒント配列
};

export default function World(props: props) {
  const [isOpen, setIsOpen] = useState(false);
  const copyRightInfoOpen = () => setIsOpen(true);
  const copyRightInfoClose = () => setIsOpen(false);
  const aspect = 168;
  const hintAspect = 300;
  const pathName = usePathname();
  const foundData = mapdata.find((item) => "/world/" + item.mapNum == pathName);
  useEffect(() => {
    document.title = `${foundData?.mapName}${pageName}`;
  }, []);
  return (
    <div className={style.main}>
      <div className={style.margin}>
        <div className={style.mediaSection}>
          <iframe
            className={style.youtube}
            src={foundData?.youtube}
            allowFullScreen
          ></iframe>
          <h2>
            #{foundData?.mapNum} {foundData?.mapName}
          </h2>
          <div className={style.iconCopyRight}>
            <Image src="/img/favicon.svg" width={48} height={48} alt="" />
            <a onClick={copyRightInfoOpen}>権利情報を確認する</a>
          </div>
          {isOpen && (
            <div className={style.background}>
              <div className={style.copyRightList}>
                <h2>権利情報（敬称略）</h2>
                {foundData?.copyRight.length == 0 && (
                  <p>
                    本作に使用している外部素材はありません（ロゴのフォントを除く）
                  </p>
                )}
                {foundData?.copyRight.map((item) => {
                  return <p key={item}>{item}</p>;
                })}
                <a className={style.erase} onClick={copyRightInfoClose}>
                  閉じる
                </a>
              </div>
            </div>
          )}
          <div className={style.description}>
            <p>公開日：{foundData?.date}</p>
            <table>
              <tr>
                <th>公開状況</th>
                {foundData?.visibility == "public" ? (
                  <td className={style.public}>公開</td>
                ) : null}
                {foundData?.visibility == "timeLocal" ? (
                  <td className={style.timeLocal}>一時非公開中</td>
                ) : null}
                {foundData?.visibility == "local" ? (
                  <td className={style.local}>非公開</td>
                ) : null}
              </tr>
            </table>
            <ListButton
              url={foundData?.distributionLink || "notfound"}
              title="配布ページへ【外部】"
              visibility={foundData?.visibility || "public"}
            />
            <div className={style.explain}>
              <div>{props.explain}</div>
            </div>
            <div className={style.hints}>
              {props.hint.length > 0 && <h2>～ヒント一覧～</h2>}
              {props.hint.map((item: hint) => {
                if (item.hint == undefined) {
                  item.hint = true;
                }
                return (
                  <details key={item.title}>
                    <summary
                      className={item.hint ? style.colorTrue : style.colorFalse}
                    >
                      {item.title}
                    </summary>
                    {item.open && (
                      <p className={style.openElement}>{item.open}</p>
                    )}
                    {item.img && (
                      <Image
                        className={style.openElement}
                        src={item.img}
                        alt={item.alt || "代替テキストが設定されていません"}
                        width={hintAspect}
                        height={hintAspect * 0.5625}
                      />
                    )}
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
              <div
                key={item.link}
                className={`${item.visibility == "local" ? style.none : null}`}
              >
                <Link href={item.link}>
                  <Image
                    src={item.mapImgLink}
                    alt={item.alt || "代替テキストが設定されていません"}
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
