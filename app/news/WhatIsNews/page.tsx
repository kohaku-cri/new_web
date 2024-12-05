import style from "@/components/news.module.css";

export default function WhatIsNews() {
  return (
    <div className={style.main}>
      <div>
        <div>
          <h2>『お知らせ』とは...？</h2>
          <p>
            『お知らせ』は脱出マップなどの制作に関連するそこまで緊急性の高くないお知らせ事項を掲載するスペースです
          </p>
          <p>
            また『お知らせ』という名前ですがブログや制作秘話的なことも気分次第で掲載していく予定です
          </p>
          <h3 className={style.marTop40}>下の内容を掲載予定</h3>
          <ul>
            <li>・マップの公開、非公開、一時非公開などの情報</li>
            <li>・マインクラフトの技術的アップデートの情報</li>
            <li>・制作日記や制作秘話</li>
            <li>・日記</li>
          </ul>
          <h3  className={style.marTop40}>なぜ『お知らせ』を設置したのか</h3>
          <ul>
<li>ちょっとしたお知らせを掲載するため</li>
            <li>・こはくさんの日本語力向上のため</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
