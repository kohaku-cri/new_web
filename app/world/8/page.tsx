import style from "@/components/World/world.module.css"

export default function World() {
  return (
    <div className={style.main}>
      <iframe className={style.youtube} src="https://www.youtube.com/embed/nmF8JFw_GZI?si=j14rS4wTPfA5pnOT" allowFullScreen></iframe>
    </div>
  );
}
