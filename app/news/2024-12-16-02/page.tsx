import style from "@/components/News/news.module.css";
import News from "@/components/News/News";

export default function NewsText() {
  return (
    <News
      text={
        <>
          <p>もうすぐクリスマスですね！</p>
          <p>本来は去年と同じようにクリスマスに関連する脱出マップを制作するつもりだったのですが</p>
          <p>主にモチベが理由で何も手を付けず気が付けば１２月に突入していました</p>
          <p>とはいえもう１２月に入ってしまい今から３週間ほどで１作品作ろうなど不可能なお話・・・</p>
          <p>そうだ、サイトをリニューアルしよう</p>
          <p>そう思い２週間程で制作したのがこちらのサイトです</p>
          <p>なぜリニューアルしたのかその理由はいくつかあるのですが</p>
          <p>やはり一番はサイトの管理を楽にするため</p>
        <p className={style.marTop20}>さて話は変わりますが今このサイトには期間限定で雪が降っています</p>
        <p></p>
        </>
      }
    />
  );
}
