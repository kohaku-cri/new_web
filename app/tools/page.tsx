import style from "@/components/ToolList/ToolList.module.css";
import { pageName } from "@/public/dataBase/pageName";

export const metadata = {
  title: `ツール${pageName}`,
  description: "すべてのツールを一覧表示",
};

export default function Tools() {
  return (
    <div className={style.main}>
      <h2>このページは現在準備中です...</h2>
    </div>
  );
}
