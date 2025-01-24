import World from "@/components/World/World";

export default function Worlds() {
  return (
    <World
      explain={
        //ここに概要欄の内容を入力 JSX（ヒント＆答えは別箇所）
        <></>
      }
      //ヒントは配列内のオブジェクトに記述
      //title・・・常に表示される文
      //open・・・クリックしたときに表示される文

      //hint = true・・・ヒントとして表示　※hintは省略可能（デフォルト値 true）
      //hint = false・・・答えとして表示

      //img・・・画像のリンクを入力（省略可能）　※imgの使用にはaltの入力が必要
      hint={[
        {title:"アメジストの謎①",open:`"色々な所にある"アメジストの下のブロック`},
        {title:"アメジストの謎②",open:"回答場所に並べられているブロック（床）とヒント①のブロックは同じ"},
        {title:"3つの頭の謎①",open:"同じような頭が他の場所にもありそうだ"},
        {title:"3つの頭の謎②",open:"全く同じ向きに合わせてみたらどうだろうか"},
        {title:"看板の謎",open:"どこかの巨木に少し色合いの違うブロックがあるような・・"},
        {title:"ボタンの謎（緑の鍵使用後）①",open:"様々なブロックにボタンがついているようだ"},
        {title:"ボタンの謎（緑の鍵使用後）②",open:"ボタンを正しい順番に押せば何かが起こりそうだ・・・"},
        {title:"ボタンの謎（緑の鍵使用後）③",open:"順番を示唆するものがどこかにないだろうか"},
        {title:"干し草の俵集め①",open:"畑に５つ置かれているらしい"},
        {title:"干し草の俵集め②",open:"畑は１か所ではないようだ"},
        {title:"干し草の俵集め③",open:"３人称視点で上から探してみると多少見つけやすいかもしれない・・・"},
        {title:"地底洞窟",open:"とても大きな洞窟には来た道とは別の道があるようだ"},
        {title:"パズル①",open:"気合"},
        {title:"パズル②",open:"全て消せと書かれている"},
        {title:"パズル③",open:"最終手段 「ライツアウト 攻略」で検索"},
        {title:"パズル④",open:"部屋の照明も消さなければならないのだろうか 青い建物を外からよく見ると・・・"},
        {title:"緑羊毛の謎①（花瓶後）",open:"緑の羊毛が３×４の形で置かれている 近くにそれと同じようなものはないだろうか"},
        {title:"緑羊毛の謎②（花瓶後）",open:"ダッシュ"},
        {title:"教会の謎①",open:"置かれている３色のガラスのその向こうのブロックに特に注目"},
        {title:"教会の謎②",open:"同じ色のガラスは別な場所にもあるようだ"},
        {title:"教会の謎③",open:"緑のガラスが一番わかりやすい"},
        {title:"教会の謎④",open:"緑の家をガラスを通して外から見ると・・・"},
        {title:"紫と青の染料の入手",open:"ケーキ屋"},
        {title:"矢の謎（見つけ方）",open:"青い家の中"},
        {title:"矢の謎",open:"ヒントとなる方向を示すものがどこかにありそうだ"},
        {title:"レバーの謎",open:"かぼちゃ"},
        {title:"洞窟の謎①",open:"島全体が使われている"},
        {title:"洞窟の謎②",open:"看板の付いた場所は６か所"},
      ]}
    />
  );
}
