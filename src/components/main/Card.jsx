import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { GoBrowser } from "react-icons/go";
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
              <span className="tag" key={s}>
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
        <div className={styles.url}>
          <a href={props.gitHub}>
            <BsGithub size={30} />
            <p>github 링크</p>
          </a>
        </div>
        {props.url ? (
          <div className={styles.url}>
            <a href={props.url}>
              <GoBrowser size={30} />
              <p>배포 링크</p>
            </a>
          </div>
        ) : (
          <p className={styles["not-working"]}>{props.urlInfo}</p>
        )}
      </div>
    </div>
  );
}
