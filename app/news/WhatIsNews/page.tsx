import style from "@/components/News/news.module.css";
import { pageName } from "@/public/dataBase/pageName";

export const metadata = {
  title: `お知らせとは？${pageName}`,
};

export default function WhatIsNews() {
  return (
    <div className={style.main}>
      <div>
        <div>
          <h2>『お知らせ』とは...？</h2>
          <p>※ホームには新着５件のお知らせ記事を表示</p>
          <h3 className={style.marTop40}>下の内容を掲載予定</h3>
          <ul>
            <li>・マップの公開、非公開、一時非公開などの情報</li>
            <li>・サイト更新情報</li>
            <li>・マインクラフトのアドオン、コマンド関連のお話</li>
            <li>・制作日記や制作秘話</li>
            <li>・日記</li>
          </ul>
          <h3 className={style.marTop110}>URLと日付の意味</h3>
          <p>西暦ー月ー日ー番号</p>
          <h3 className={style.marTop400}>お知らせの秘めたる目的</h3>
          <p>こはくさん（作者）の文章力上昇のため</p>
        </div>
      </div>
    </div>
  );
}
