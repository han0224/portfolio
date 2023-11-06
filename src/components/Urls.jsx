import styles from "./Urls.module.css";
import { BsGithub } from "react-icons/bs";
import { GoBrowser } from "react-icons/go";

export default function Urls({ github, urlInfo, url = null }) {
  return (
    <div className={styles.urls}>
      <a href={github}>
        <BsGithub size={30} />
        <p>github 링크</p>
      </a>
      {url ? (
        <a href={url}>
          <GoBrowser size={30} />
          <p>배포 링크</p>
        </a>
      ) : (
        <p className={styles["not-working"]}>{urlInfo}</p>
      )}
    </div>
  );
}
