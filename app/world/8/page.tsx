import World from "@/components/World/World";

export default function Worlds() {
  return (
    <World
      explain={
        //ここに概要欄の内容を入力 JSX（ヒント＆答えは別箇所）
        <></>
      }
      //ヒントは⇩に記述
      //hint = true・・・ヒントとして表示　※hintは省略可能（デフォルト値 true）
      //hint = false・・・答えとして表示
      hint={[
        {
          title: "タイトル",
          open: "中身",
        },
        {
          title: "タイトル",
          open: "中身",
          hint: false,
        },
      ]}
    />
  );
}
