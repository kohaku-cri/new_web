import style from "@/components/News/news.module.css";
import News from "@/components/News/News";

export default function NewsText() {
  return (
    <News
      text={
        <>
          <p>もうすぐクリスマスですね！</p>
          <p>さて今このサイトには雪が降っています</p>
        </>
      }
    />
  );
}
