import { ListButton } from "@/components/Button/LinkButton";
import Snow from "@/components/Snow";
import World from "@/components/World/World";

export default function Worlds() {
  return (
    <World
      explain={
        //ここに概要欄の内容を入力 JSX（ヒント＆答えは別箇所）
        <>
          <Snow />
          <h3>ヒント＆答え</h3>
          <p>Googleサイトにて公開中</p>
          <ListButton
            url="https://sites.google.com/view/kohaku-datsusyutu/%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%9E%E3%83%83%E3%83%97"
            title="ヒントはこちら"
            visibility=""
          />
        </>
      }
      //ヒントは配列内のオブジェクトに記述
      //title・・・常に表示される文
      //open・・・クリックしたときに表示される文

      //hint = true・・・ヒントとして表示　※hintは省略可能（デフォルト値 true）
      //hint = false・・・答えとして表示

      //img・・・画像のリンクを入力（省略可能）　※imgの使用にはaltの入力が必要
      hint={[]}
      // 空配列の場合は情報は「修正されたバグはありません」と表示される
      // title バグ修正の概要
      // date 修正日
      // importance バグの重要度（A＝非常に重大、B＝通常の問題、C＝軽微な問題）
      bugsFix={[
        {title:"本の補足を追加",date:"",importance:"C"},
        {title:"井戸から水が採取可能な問題",date:"",importance:"B"},
        {title:"サンタ帽がダメージにより壊れてしまう問題",date:"",importance:"C"},
        {title:"ブーツがマルチ時正しく動作しない問題",date:"",importance:"B"},
        {title:"光源の調整",date:"",importance:"C"},
        {title:"マルチ時パワースターが正しく動作しない問題",date:"",importance:"B"},
        {title:"画面中央に不適当なUIが表示される問題",date:"",importance:"B"},
        {title:"サンタ帽が被れない問題",date:"",importance:"B"},
        {title:"ver1.21.30にて予定されているバナーテクスチャ変更に対応",date:"",importance:"C"},
        {title:"cameraコマンドの修正",date:"",importance:"A"},
        {title:"画用紙の名前が正しく表示されない問題（バージョンアップにより発生）",date:"2025/1/25",importance:"A"},

      ]}
    />
  );
}
