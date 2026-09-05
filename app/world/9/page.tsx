import World from "@/components/World/World";

export const metadata = {
  description: "9作目脱出マップ",
};

export default function Worlds() {
  return (
    <World
      explain={
        //ここに概要欄の内容を入力 JSX（ヒント＆答えは別箇所）
        <>
          <p>PVとヒントは準備中です</p>
        </>
      }
      //ヒントは配列内のオブジェクトに記述
      //title・・・常に表示される文
      //open・・・クリックしたときに表示される文

      //hint = true・・・ヒントとして表示　※hintは省略可能（デフォルト値 true）
      //hint = false・・・答えとして表示

      //img・・・画像のリンクを入力（省略可能）　※imgの使用にはaltの入力が必要
      hint={[
        { title: "最初の小島の謎①", open: `乾いたガストを起点にする` },
        { title: "最初の小島の謎②", open: `ガストの視線` },
        { title: "最初の小島の謎③", open: `感圧版の位置関係が重要` },
        { title: "最初の小島の謎④", open: `視線は曲がる` },
        { title: "矢と色ガラスの謎①", open: `渡される各色のガラスの個数が重要` },
        { title: "矢と色ガラスの謎②", open: `矢の視線と道筋がとても大事` },
        { title: "矢と色ガラスの謎③", open: `すべてのマスには0から3の数字が入る` },
        { title: "矢と色ガラスの謎④", open: `色ガラスの個数と一致させられないだろうか` },
      ]}
      // 空配列の場合は情報は「修正されたバグはありません」と表示される
      // title バグ修正の概要
      // date 修正日 （""　空文字列の場合はハイフンが表示）
      // importance バグの重要度（A＝非常に重大、B＝通常の問題、C＝軽微な問題）
      bugsFix={[]}
    />
  );
}
