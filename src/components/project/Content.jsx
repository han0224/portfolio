import styles from "./Content.module.css";

function ListComponent({ children }) {
  return (
    <>
      {children.map((e, i) => (
        <div key={`${e[0]} - ${i}`}>
          {Array.isArray(e) ? (
            e.map((v, i) => (
              <li key={v} className={styles["second-list"]}>
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
        <div key={v.id}>
          <h2>{v.title}</h2>
          <div className={styles["content-detail"]}>
            {v.img ? (
              <div className={styles.img}>
                <img src={v.img} alt="추가적인 이미지" />
              </div>
            ) : (
              <></>
            )}
            <ul className={v.img ? styles["img-right"] : styles.list}>
              <ListComponent>{v.content}</ListComponent>
            </ul>
          </div>
          {v.tag ? (
            <div className={styles["tag-url"]}>
              <a href={v.tag.url}>{v.tag.name}</a>
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}
