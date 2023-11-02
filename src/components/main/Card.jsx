import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ props }) {
  return (
    <div className={styles.card}>
      <Link to={"/project/" + props.id}>
        <div className={styles.img}>
          <img src={props.img} alt="project img" />
        </div>
        <div className={styles.info}>
          <p>
            프로젝트 명:<span>{props.name}</span>
          </p>
          <p>
            기술 스택:
            {props.skill?.map((s) => (
              <span className={styles.tag} key={s}>
                {s}
              </span>
            ))}
          </p>
          <p>
            기간:<span>{props.date}</span>
          </p>
          <span>{props.team}</span>
        </div>
      </Link>
      <div className={styles.urls}>
        <p>
          <a href={props.gitHub}>github 링크</a>
        </p>
        {props.url ? (
          <p>
            <a href={props.url}>배포 링크</a>
          </p>
        ) : (
          <p className={styles["not-working"]}>{props.urlInfo}</p>
        )}
      </div>
    </div>
  );
}
