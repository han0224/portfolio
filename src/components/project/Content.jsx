import styles from "./Content.module.css";

function ListComponent({ children }) {
  return (
    <>
      {children.map((e) => (
        <div key={e}>
          {Array.isArray(e) ? (
            e.map((v, i) => (
              <li key={`second-list-${i}`} className={styles["second-list"]}>
                {v}
              </li>
            ))
          ) : (
            <li className={styles["first-list"]}>{e}</li>
          )}
        </div>
      ))}
    </>
  );
}

export default function Content({ project }) {
  return (
    <div className={styles.content}>
      {project.map((v, i) => (
        <div key={i}>
          <h2>{v.title}</h2>
          <div className={styles["content-detail"]}>
            {v.img ? (
              <div className={styles.img}>
                <img src={v.img} alt="" />
              </div>
            ) : (
              <></>
            )}
            <ul className={v.img ? styles["img-right"] : styles.list}>
              <ListComponent>{v.content}</ListComponent>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
