import styles from "./Info.module.css";
import { useEffect } from "react";

export default function Info({ project }) {
  useEffect(() => {
    console.log(project);
  }, []);
  return (
    <div className={styles.info}>
      <div className={styles.img}>
        <img src={project?.img} alt="project img" />
      </div>
      <div className={styles["project-info"]}>
        <p>
          프로젝트 명:<span>{project.name}</span>
        </p>
        <p>
          기간:<span>{project.date}</span>
        </p>
        <p>
          기술 스택:
          {project.skill?.map((s) => (
            <span className="tag" key={s}>
              {s}
            </span>
          ))}
        </p>
        <p>{project.team}</p>
        <div className={styles.urls}>
          <p>
            <a href={project.gitHub}>github 링크</a>
          </p>
          {project.url ? (
            <p>
              <a href={project.url}>배포 링크</a>
            </p>
          ) : (
            <p className={styles["not-working"]}>{project.urlInfo}</p>
          )}
        </div>
      </div>
    </div>
  );
}
