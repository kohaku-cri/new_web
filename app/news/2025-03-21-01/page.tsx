import style from "@/components/News/news.module.css";
import News from "@/components/News/News";
import Link from "next/link";

export default function NewsText() {
  // 下線はclass link
  return (
    <News
      text={
        <>
          <h3 className={`${style.marTop40} ${style.border}`}>※一部に独自解釈を含みます（クレジット表記ルールの緩和）</h3>
          <h3 className={style.marTop80}>○MITライセンスの概要</h3>
          <p>
            MITライセンスはマサチューセッツ工科大学（MIT）を起源とし著作権者によって無償で非独占的に付与されるライセンス
          </p>
          <a className={style.link} href="https://opensource.org/license/mit">（MITライセンスの原文はこちら）</a>
          <h3 className={style.marTop40}>○大前提</h3>
          <p>MITライセンスを適用する場合はその旨を配布サイト等に記載しています</p>
          <p>
            作品に付与しているMITライセンスは"作者の著作権が及ぶ範囲にのみ"適用されています
          </p>
          <p>
            マインクラフト関連の利用の際は<a className={style.link} href="https://www.minecraft.net/ja-jp/eula">マインクラフトエンドユーザーライセンス契約（EULA）</a>（特に商用利用）
          </p>
          <p>
            再配布を伴う場合は配布するプラットフォームの利用規約などそちらも確認して従ってください
          </p>
          <h3 className={style.marTop40}>○用語</h3>
          <p>作品：MITライセンスを適用していることを配布サイト等に明示している配布データ（マップやアドオンetc..）のこと</p>
          <p>作者：制作者</p>
          <p>ユーザー：制作されたものをプレイする全てのプレイヤーのこと</p>
          <h3 className={style.marTop40}>○MITライセンスの特徴</h3>
          <p>MITライセンスは具体的に以下の方法で利用をする許可を与えています（一部意訳）</p>
          <table>
            <tr>
              <th>利用（個人・法人問わない）</th>
              <td>○</td>
            </tr>
            <tr>
              <th>商用利用</th>
              <td>○</td>
            </tr>
            <tr>
              <th>複製</th>
              <td>○</td>
            </tr>
            <tr>
              <th>改変</th>
              <td>○</td>
            </tr>
            <tr>
              <th>結合</th>
              <td>○</td>
            </tr>
            <tr>
              <th>再許諾</th>
              <td>○</td>
            </tr>
            <tr>
              <th>再配布</th>
              <td>○</td>
            </tr>
          </table>
          <p className={style.borderBottom}>また"MITライセンスが既に適用されている部分"に対して追加の制約を課すことはできません</p>
          <p className={style.marTop40}>※結合とは他のものと組み合わせて利用すること</p>
          <p>（ご自身の著作物ではないものと結合する場合は相手の規約等を確認してください）</p>
          <p className={style.marTop20}>※再許諾とはライセンスに基づいて許諾された権利をさらに第三者に許諾すること</p>
          <p className={style.marTop20}>※再配布とは作品の全部または一部を他の人に提供すること</p>
          <p>（不特定多数や特定少数は問わない）</p>
          <h3 className={style.marTop80}>○クレジット表記について（一部独自解釈）</h3>
          <p>利用には著作権表示（クレジット表記）とMITライセンスの全文（もしくは全文へアクセス可能なURL）が本来なら必要になりますが</p>
          <p>"再配布を伴わない"利用の場合は記載しなくても構いません（通常の<Link href="/information" className={style.link}>ガイドライン</Link>と同等）</p>
          <p>※もしご厚意で記載してくださる場合はクレジットの書き方を問いません</p>
          <p className={style.marTop40}>"再配布を伴う"利用の場合は著作権表示とMITライセンスの全文が必要です</p>
          <p>ですがソースコード内に既に記載しているため追加で記載する必要はありません</p>
          <p>※ユーザーが平文のクレジットに規約的にもアクセスできる必要があります</p>
          <h3 className={style.marTop80}>○免責事項</h3>
          <p>作品は無保証で提供されます</p>
          <p>作者は作品に関していかなる責任も負いません</p>
          <p className={style.marTop20}>※例として作品には『バグがない保証』がなくまたその『バグを修正する責任』も作者は負わないという意味</p>
          <p>（可能な限り対応したいとは考えていますが...）</p>
        </>
      }
    />
  );
}
