import style from "@/components/news.module.css";

export default function information() {
  return (
    <div className={style.main}>
      <div>
        <div>
          <h2>｜ガイドライン</h2>
          <p>
            これはデフォルトのガイドラインで配布ページに特別の記載がない箇所に対して適用されます
          </p>
          <p>
            またこのガイドラインは各種法令、使用素材の規約、及びマインクラフトエンドユーザーライセンス契約の下に適用されます
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
              <th>作者のクレジット表記及び報告</th>
              <td>任意</td>
            </tr>
            <tr>
              <th>二次配布</th>
              <td>×</td>
            </tr>
          </table>

          <h3 className={style.marTop110}>〇非自作コンテンツについて</h3>
          <p>
            主にマップのロゴに下記の素材を使わせていただいている場合があります
          </p>
          <ul>
            <li>
              ・
              <a href="https://icooon-mono.com/" className={style.linkColor}>
                icooon-mono
              </a>
            </li>
            <li>
              ・
              <a href="https://www.ac-illust.com/" className={style.linkColor}>
                illustAC
              </a>
            </li>
          </ul>
          <p className={style.marTop110}>
            〇その他不明点などはTwitterのDMまでお気軽にお問い合わせください
          </p>
        </div>
      </div>
    </div>
  );
}
