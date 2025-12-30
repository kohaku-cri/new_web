import style from "@/components/error.module.css";
import { pageName } from "@/public/dataBase/pageName";
import { ListButton } from "@/components/Button/LinkButton";

export const metadata = {
  title: `各種ガイドライン${pageName}`,
};

export default function information() {
  return (
    <div className={style.main}>
      <h2>ガイドラインページのURLは変更されました。</h2>
      {/* <p>5秒後に新URLへリダイレクトします...</p> */}
      <ListButton url="/guideline" visibility="" title="新ページへ移動する" />
    </div>
  );
}
