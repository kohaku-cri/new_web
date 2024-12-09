import style from "@/components/news.module.css";

export default function information() {
  return (
    <div className={style.main}>
      <div>
        <div>
          <h2>｜ガイドライン</h2>
          <p>
            配布ページなどに個々の事項についての特別の記載がない限り下記のガイドラインを適用します
          </p>
          <table>
            <tr>
              <th>配信利用</th>
              <td>〇</td>
            </tr>
            <tr>
              <th>配信による収益化</th>
              <td>〇</td>
            </tr>
            <tr>
              <th>作者のクレジット表記</th>
              <td>任意</td>
            </tr>
            <tr>
              <th>利用報告</th>
              <td>任意</td>
            </tr>
            <tr>
              <th>二次配布</th>
              <td>×</td>
            </tr>
          </table>
          <h3 className={style.marTop110}>〇ロゴ及びサムネの使用について</h3>
          <p>
            「そのまま」 「改造して」 「ロゴを抽出して」
            などご自由にお使いください
          </p>
          <h3 className={style.marTop110}>〇非自作コンテンツについて</h3>
          <p>
            主にマップのロゴに下記の素材を使わせていただいている場合があります
          </p>
          <ul>
            <li>
              ・
              <a href="https://icooon-mono.com/" className={style.link}>
                icooon-mono
              </a>
            </li>
            <li>
              ・
              <a href="https://www.ac-illust.com/" className={style.link}>
                illustAC
              </a>
            </li>
          </ul>
          <h3 className={style.marTop110}>〇リンク</h3>
          <p>サイトへのリンクはご自由に行っていただいて構いません</p>
          <p>画像やファイルの直リンクはご遠慮ください</p>
          <h3 className={style.marTop200}>〇用語について</h3>
          <p>配信・・・ライブ、動画化、プレイ画像の公開</p>
          <p className={style.marTop110}>
            〇その他不明点などはTwitterのDMまでお気軽にお問い合わせください
          </p>
        </div>
      </div>
    </div>
  );
}
