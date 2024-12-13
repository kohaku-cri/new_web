import style from "@/components/error.module.css";
import { ListButton } from "@/components/Button/LinkButton";
import { pageName } from "@/public/dataBase/pageName";

export const metadata = {
  title: `404エラー${pageName}`,
};

export default function error404() {
  return (
    <div className={style.main}>
      <h2 className={style.margin}>404Error</h2>
      <h2>ページが見つかりませんでした</h2>
      <p>削除されたか無効なURLです</p>
      <ListButton url="/" title="ホームに戻る" visibility="" />
    </div>
  );
}
