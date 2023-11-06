import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import Urls from "../Urls";

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
      <Urls github={props.github} urlInfo={props.urlInfo} url={props.url} />
    </div>
  );
}
