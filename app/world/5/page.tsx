import { ListButton } from "@/components/Button/LinkButton";
import World from "@/components/World/World";

export default function Worlds() {
  return (
    <World
      explain={
        //ここに概要欄の内容を入力 JSX（ヒント＆答えは別箇所）
        <>
          {" "}
          <h3>ヒント＆答え</h3>
          <p>Googleサイトにて公開中</p>
          <ListButton
            url="https://sites.google.com/view/kohaku-datsusyutu/%E3%83%8F%E3%83%AD%E3%82%A6%E3%82%A3%E3%83%B3%E3%83%8F%E3%82%A6%E3%82%B9%E3%81%8B%E3%82%89%E3%81%AE%E8%84%B1%E5%87%BA"
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
        {title:"タイトルの一部を削除",date:"",importance:"C"},
        {title:"オープニングが正しく表示されない問題",date:"",importance:"B"},
        {title:"無限アイテムの補充頻度の問題（応急的修正）",date:"",importance:"A"},

      ]}
    />
  );
}
