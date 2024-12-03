import style from "../components/error404.module.css";
import { ListButton } from "@/components/Button/LinkButton";

export default function error404() {
  return (
    <div className={style.main}>
      <h2 className={style.margin}>404Error</h2>
      <h2>ページが見つかりませんでした</h2>
      <p>削除されたか無効なURLです</p>
      <ListButton url="/" title="ホームに戻る" />
    </div>
  );
}
