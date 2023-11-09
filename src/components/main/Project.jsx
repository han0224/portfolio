import styles from "./Project.module.css";
import Card from "./Card";
import project from "../../assets/projectInfo.json";
export default function Project() {
  const projects = project.sort((a, b) => b.id - a.id);

  return (
    <div className={styles.project}>
      <h1>프로젝트</h1>
      <div className={styles.cards}>
        {projects.map((project) => (
          <Card props={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}
