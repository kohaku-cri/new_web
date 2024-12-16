import Image from "next/image";
import nextConfig from "../../next.config";

type props = {
  link: string;
  alt?: string;
};
// 画像リンクの入力方法  /img/ファイル名
export default function NewsImg(props: props) {
  const BASE_PATH = nextConfig.basePath || "";
  // 比率はここで設定
  const width = 320;
  const height = width * 0.5625;
  return (
    <Image
      src={`${BASE_PATH}/${props.link}`}
      alt={props.alt || "代替テキストが設定されていません"}
      width={width}
      height={height}
    />
  );
}
