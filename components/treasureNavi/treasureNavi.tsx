"use client";
import style from "@/components/Tools/tools.module.css";
import { useState } from "react";
import NewsImg from "../NewsImg/NewsImg";

export default function TreasureNavi() {
  const [value, setValue] = useState("---");
  const [input, setInput] = useState("");

  function search() {
    const inputValue = input.trim();
    const value = inputValue.split(" ");
    let x = parseInt(value[0]);
    let z = parseInt(value[2]);
    x /= 16;
    z /= 16;
    x = Math.floor(x);
    z = Math.floor(z);
    x *= 16;
    z *= 16;
    x += 8;
    z += 8;
    const result_text = `${x} ~ ${z}`;
    if (!result_text.match("NaN")) {
      setValue(`${result_text}に見つかりました`);
    } else {
      setValue(`※無効な入力形式です※`);
    }
  }

  function reset() {
    setInput("");
    setValue("---");
  }

  return (
    <div className={style.main}>
      <h2>財宝ナビ</h2>
      <p className={style.marTop60}>
        マインクラフト統合版の埋もれた財宝の位置を
        <br />
        特定することのできるツールです
      </p>
      <input
        type="text"
        className={style.inputText}
        placeholder="ここに座標を入力"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className={style.btnField}>
        <button onClick={reset}>リセット</button>
        <button onClick={search}>財宝を探す</button>
      </div>
      <div className={style.resultField}>
        <h3>探索結果</h3>
        <h3>{value}</h3>
      </div>
      <div className={style.descriptionField}>
        <h3>使い方</h3>
        <p className={style.marTop20}>入力の例（半角英数字）：104 64 -235</p>

        <div>
          <div>
            <NewsImg link="img/navi1.png" />
            <h3>宝の地図を見つける</h3>
          </div>
          <div>
            <NewsImg link="img/navi2.png" />
            <h3>×印に向かう</h3>
          </div>
          <div>
            <NewsImg link="img/navi3.png" />
            <h3>×印付近の座標を入力する</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
