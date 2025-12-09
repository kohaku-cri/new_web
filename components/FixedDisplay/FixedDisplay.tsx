import style from "@/components/FixedDisplay/FixedDisplay.module.css";

type props = {
  element: JSX.Element;
};

export default function ListButton(props: props) {
  return (
    <div className={style.FixedDisplayBox}>
      {props.element}
    </div>
  );
}
