import World from "@/components/World/World";

export default function Worlds() {
  return (
    <World
      explain={
        //ここに概要欄の内容を入力 JSX（ヒント＆答えは別箇所）
        <>
          <p>作者の操作ミスによりクラフターズコロニーから消滅した幻のマップ</p>
          {/* <p>このマップはOneDriveにて公開中</p>
        <h2>※修正情報も紛失</h2> */}
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
      bugsFix={[]}
    />
  );
}
