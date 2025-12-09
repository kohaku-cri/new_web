import style from "@/components/News/news.module.css";
import { pageName } from "@/public/dataBase/pageName";
import Link from "next/link";
import FixedDisplay from "@/components/FixedDisplay/FixedDisplay";

export const metadata = {
  title: `各種ガイドライン${pageName}`,
};

export default function information() {
  return (
    <>
      <FixedDisplay
        element={
          <>
            <p>🚧 現在ガイドラインの改定作業中です。🚧</p>
            <p>
              この表示のある間はお知らせ記事なく
              <br />
              軽微な修正が行われる可能性があります。
            </p>
          </>
        }
      />
      <div className={style.main}>
        <div>
          <div>
            <h3 className={style.marTop60}>
              ○
              配布ページに別の規定がない点について、本ページの各種ガイドラインを適用します。
            </h3>
            <h3 className={style.marTop60}>○ 作品ガイドライン</h3>
            <table>
              <tr>
                <th>自作発言</th>
                <td className={style.backRed}>NG</td>
              </tr>
              <tr>
                <th>二次配布</th>
                <td className={style.backRed}>NG</td>
              </tr>
            </table>
            {/* ここから配信者向けガイドライン */}
            <h3 className={style.marTop110}>○ 配信者向けガイドライン</h3>
            <p className={style.marTop60}>
              まず初めに作品の配信を検討してくださりありがとうございます。
            </p>
            <p>
              本ガイドラインは配信者さんへ制約を課すことを目的としておらず、「ここまでやってもいいよ♡」という許諾範囲を明確にすることで、
              <br />
              より安心して配信活動を行っていただけることを目標に策定しています。
            </p>
            <p>
              また何か不明点やご感想などありましたらXのDMの方にお気軽にご連絡ください。
            </p>
            <h3 className={style.marTop60}>用語</h3>
            <p>配信：live配信、動画化、スクショの公開および共有を指します。</p>
            <p>ワールド紹介ページ：本サイトにあるページを指します。</p>
            <p>配布ページ：クラフターズコロニーのページを指します。</p>
            <h3 className={style.marTop60}>概要</h3>
            <table>
              <tr>
                <th>配信利用</th>
                <td className={style.backGreen}>OK</td>
              </tr>
              <tr>
                <th>配信による収益化</th>
                <td className={style.backGreen}>OK</td>
              </tr>
              <tr>
                <th>作者のクレジット表記</th>
                <td className={style.backOrange}>任意</td>
              </tr>
              <tr>
                <th>配信報告</th>
                <td className={style.backOrange}>任意</td>
              </tr>
            </table>
            <h3 className={style.marTop60}>非自作コンテンツ</h3>
            <p>
              音楽、イラスト等、作者が制作していない外部の素材を使用している場合があります。
            </p>
            <p>
              詳細は各ワールド紹介ページのタイトルの下にある権利情報をご参照ください。
            </p>
            <p>
              例：
              <Link href="/world/8" className={style.link}>
                魔法使いと空の孤島（ワールド紹介ページ）
              </Link>
            </p>

            <h3 className={style.marTop60}>ロゴおよびサムネの使用</h3>
            <p>
              「そのまま」「ロゴ部分を切り抜いて」 などご自由にお使いください。
            </p>
            <p>
              ※ただし外部素材を利用している可能性がある点に注意してください。
            </p>
            <h3 className={style.marTop60}>作者の配信参加</h3>
            <p>
              live配信にて作品をプレイされる場合、作者が配信（チャット）へお邪魔する可能性があります。
            </p>
            <p>
              作者の参加を望まない場合は、お手数ですが事前にご自身のアカウントから、XのDMへ下記の文をコピペしてお送りください。
            </p>
            <p>確認次第リアクションを付与します。</p>
            <p className={style.marTop20}>
              例文：
              <br />
              “今後も含め私のアカウントで行うlive配信において、作者参加を望みません。”
            </p>
            <p className={style.marTop40}>
              補足：
              <br />
              作者参加を望まない場合でも、それによってあらゆる不利益を受けることはありません。
            </p>
            <p>ご質問等に関しても通常と変わらないサポートをお約束します。</p>
            {/* <p className={style.marTop110}>
            ○その他不明点等ありましたら、XのDMまでお気軽にお問い合わせください。
          </p> */}
            {/* ここからその他のガイドライン */}
            <h3 className={style.marTop110}>○ その他の規定</h3>

            <h3 className={style.marTop60}>免責</h3>
            <p>
              作者は作品に関してあらゆる保証（バグ修正、質問対応を含む）を義務として負わず、
              <br />
              作品に関連して生じた事象について、いかなる責任も負うことはできません。
            </p>
            <p>ご了承ください。</p>
            <p>
              ※保証については、限界に達しない限り対応するよう努力しています。
            </p>
            <h3 className={style.marTop60}>リンク</h3>
            <p>本サイトへのリンクはご自由に行っていただいて構いません。</p>
            <h3 className={style.marTop60}>ガイドラインの改定と不遡及</h3>
            <p>本ガイドラインは予告なく改定される場合があります。</p>
            <p>
              改定の際は小さな変更であっても「ルール改定」のタグを付けた、お知らせ記事を掲載します。（現在は掲載しない場合があります）
            </p>
            <p>
              改定前に行われた配信が改定後のガイドラインの影響を受けることはありません。
            </p>
            <p className={style.marTop110}>最終更新：2025/12/09</p>
          </div>
        </div>
      </div>
    </>
  );
}
