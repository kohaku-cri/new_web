import { ListButton } from "@/components/Button/LinkButton";
import World from "@/components/World/World";

export default function Worlds() {
  return (
    <World
      explain={
        //ここに概要欄の内容を入力 JSX（ヒント＆答えは別箇所）
        <>
          {" "}
        </>
      }
      //ヒントは配列内のオブジェクトに記述
      //title・・・常に表示される文
      //open・・・クリックしたときに表示される文

      //hint = true・・・ヒントとして表示　※hintは省略可能（デフォルト値 true）
      //hint = false・・・答えとして表示

      //img・・・画像のリンクを入力（省略可能）　※imgの使用にはaltの入力が必要
      hint={[
        {title:"テレビの前のボタン謎①",open:"窓の外のライトとの関連があるようだ"},
        {title:"テレビの前のボタン謎②",open:"マングローブが起点になりそうだ"},
        {title:"テレビの前のボタン謎",open:"入力順 →23145",hint:false},
        {title:"水バケツの入手方法①",open:"マイクラの小ネタを使う必要がある"},
        {title:"水バケツの入手方法②",open:"濡れたスポンジ、かまど、バケツ、燃料を使用して水をバケツに入れられないだろうか"},
        {title:"水バケツの入手方法",open:"1.燃料にブレイズロッドを使用して、濡れたスポンジを焼く。2.焼いている最中に燃料部分にバケツを置く",hint:false},
        {title:"MOBの頭の謎",open:"MOBの頭の向きと高さに注目"},
        {title:"MOBの頭の謎",open:"MOBの頭が向いている方向に看板があり数字を並べると8259になる",hint:false},
        // ---
        {title:"音ブロックの謎",open:"再生されたものと同じ音に設定できないだろうか"},
        {title:"パズルの謎",open:"お手本の配置に合わせる"},
        // ---
        {title:"ネザーウォートの場所",open:"MOBの頭の謎の回答部屋の天井",hint:false},
        {title:"グローストーンの場所",open:"玄関の天井付近",hint:false},
        // ---
        {title:"ポーションの謎",open:"跳躍ポーションを使用することで入手できるアイテムがある"},
        {title:"ポーションの謎",open:"跳躍ポーションレベル2を醸造し２階のアメジスト天井にある樽を開ける",hint:false},
        {title:"海に帰りたい魚",open:"ありがとう案件と呼ばれるもの"},
        {title:"海に帰りたい魚",open:"魚をトイレに流す",hint:false},
        // ---
        {title:"かぼちゃの謎",open:"１階にヒントがあるようだ"},
        {title:"かぼちゃの謎",open:"MOBの頭の謎を解いた部屋の前のカボチャの種類順",hint:false},


      ]}
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
