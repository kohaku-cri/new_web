import style from "@/components/News/news.module.css";
import News from "@/components/News/News";

export default function NewsText() {
  // 下線はclass link
  return (
    <News
      text={
        <>
          <p className={style.marTop40}>もうすぐクリスマスですね！</p>
          <p>
            本来なら去年と同じようにクリスマスに関連する脱出マップを制作するつもりだったのですが
          </p>
          <p>
            主にモチベが理由で何も手を付けず気が付けば１２月に突入していました
          </p>
          <p>
            とはいえもう１２月に入ってしまい今から３週間ほどで１作品作ろうなど不可能なお話・・・
          </p>
          <p>そうだ、サイトをリニューアルしよう</p>
          <p>そう思い２週間程で制作したのがこちらのサイトです</p>
          <p>大体は旧サイトのデザインを参考にしましたが一部を変更したり新機能を追加したりしてみました</p>
          <p>旧サイトよりもより見やすく便利なったかなと思います</p>
          <p className={style.marTop40}>
            さて話は変わりますが今このサイトには雪が降っていますね
          </p>
          <p>クリスマスシーズンの期間限定として追加してみました</p>
          <p>（クリスマス関連のページは常に降らせるかも・・）</p>
          <p>雪を降らせただけなのに一気に雰囲気を演出することができてとても満足しています♪</p>
          <p>降雪の演出は <a href="https://github.com/cahilfoley/react-snowfall" className={style.link}>react-snowfall</a> というパッケージを使わせていただきました</p>
          <p>reactの名前が含まれていますがバニラのJSでも動作するとのことです</p>
          <p>もし何らかのサイトを管理している方がいましたら是非導入してみてくださいね⛄</p>
<p>降雪量や色なども細かく設定できるのでめちゃくちゃおすすめです</p>
        </>
      }
    />
  );
}
