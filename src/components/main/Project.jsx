import styles from "./Project.module.css";
import Card from "./Card";
import project from "../../assets/projectInfo.json";
export default function Project() {
  const projects = project.sort((a, b) => a.id - b.id);

  return (
    <div className={styles.project}>
      <h2>프로젝트</h2>
      <div className={styles.cards}>
        {projects.map((project) => (
          <Card props={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}
