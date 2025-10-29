import Snow from "@/components/Snow";
import World from "@/components/World/World";
import nextConfig from "../../../next.config";

export default function Worlds() {
    const BASE_PATH = nextConfig.basePath || "";
  return (
    <World
      explain={
        //ここに概要欄の内容を入力 JSX（ヒント＆答えは別箇所）
        <>
          <Snow />
        </>
      }
      //ヒントは配列内のオブジェクトに記述
      //title・・・常に表示される文
      //open・・・クリックしたときに表示される文

      //hint = true・・・ヒントとして表示　※hintは省略可能（デフォルト値 true）
      //hint = false・・・答えとして表示

      //img・・・画像のリンクを入力（省略可能）　※imgの使用にはaltの入力が必要
      hint={[
        {title:"感圧版の謎",open:"建物の外壁を注意して見る",hint:true},
        {title:"感圧版の謎",img:`${BASE_PATH}/img/6kotae1.png`,hint:false},
        {title:"クロスボウ①",open:"クロスボウを使用するには花火が必要",hint:true},
        {title:"クロスボウ②",img:`${BASE_PATH}/img/6kotae2.png`,hint:true},
        {title:"キッチンの鍵の場所",open:"小さなクリスマスツリーの近く",hint:true},
        {title:"キッチンの謎①",open:"変化のボタンが関連している",hint:true},
        {title:"キッチンの謎②",open:"変化が起こっている間に書見台に書かれている場所を探し出す",hint:true},
        {title:"キッチンの謎③",open:"#1 #2 #3 #4 の順番で見つけ出した数字を並べる",hint:true},
        {title:"キッチンの謎~数字１~",open:"火薬が関係している所",hint:false},
        {title:"キッチンの謎~数字２~",open:"マップの角",hint:false},
        {title:"キッチンの謎~数字３~",open:"建物の中",hint:false},
        {title:"キッチンの謎~数字４~",open:"凍える寒さ",hint:false},
        {title:"パズル",open:"最後の手段「ライツアウト ４×４ 必勝法」で検索",hint:false},
        {title:"パズルα",open:"全て消さなければならない",hint:true},
        {title:"画用紙①",open:"ウォールウィザードブーツが必要",hint:true},
        {title:"画用紙②",open:"外から窓を通してとある建物の室内を見る",hint:true},
        {title:"画用紙の使い道",open:"画用紙を入れられそうななくぼみがどこかにある",hint:true},
        {title:"矢の謎",open:"画用紙をはめた時の模様がヒント",hint:true},
        {title:"魚①",open:"海に繋がっている場所といえば・・・",hint:true},
        {title:"魚②",open:"ありがとう案件と呼ばれるもの",hint:true},
        {title:"魚",open:"トイレに流す",hint:false},
        {title:"氷塊",open:"どうにか溶かせないだろうか",hint:true},
        {title:"銅粉",open:"ちょっとした理科の知識が必要",hint:true},
        {title:"銅粉",open:"炎色反応",hint:false},

      ]}
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
