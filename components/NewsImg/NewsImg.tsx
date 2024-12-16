import Image from "next/image";

type props = {
  link: string;
  alt?: string;
};

export default function NewsImg(props: props) {
  // 比率はここで設定
  const width = 320;
  const height = width * 0.5625;
  return (
    <Image
      src={props.link}
      alt={props.alt || "代替テキストが設定されていません"}
      width={width}
      height={height}
    />
  );
}
