import styles from "./Info.module.css";
import { Urls } from "../index";
export default function Info({ project }) {
  return (
    <div className={styles.info}>
      <div className={styles.img}>
        <img src={project?.img} alt="project img" />
      </div>
      <div className={styles["project-info"]}>
        <div className={styles.box}>
          <p>프로젝트 명:</p>
          <span>{project.name}</span>
        </div>
        <div className={styles.box}>
          <p>기간:</p>
          <span>{project.date}</span>
        </div>
        <div className={styles.box}>
          <p>기술 스택:</p>
          <div className={styles.skill}>
            {project.skill?.map((s) => (
              <span className="tag" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.box}>
          <p>{project.team}</p>
        </div>
        <div style={{ width: "100%" }}>
          <Urls
            github={project.github}
            urlInfo={project.urlInfo}
            url={project.url}
          />
        </div>
      </div>
    </div>
  );
}
