import styles from "./Project.module.css";
import Card from "./Card";

export default function Project() {
  const projects = [
    {
      id: 3,
      img: "src/assets/imgs/Bg.jpg",
      name: "goodFriends111",
      date: "00.00.00 ~ 00.00.00",
      team: "개인 프로젝트",
      // url: "https://goodfriends.life/",
      urlInfo: "배포전",
      skill: ["typescript", "vue.js"],
      gitHub: "https://github.com/woorifisa-projects/GoodFriends",
    },
    {
      id: 2,
      img: "src/assets/imgs/Bg.jpg",
      name: "goodFriends2",
      date: "00.00.00 ~ 00.00.00",
      team: "팀 프로젝트(프론트엔드 담당)",
      url: "https://goodfriends.life/",
      skill: ["typescript", "vue.js"],
      gitHub: "https://github.com/woorifisa-projects/GoodFriends",
    },
    {
      id: 1,
      img: "src/assets/imgs/Bg.jpg",
      name: "goodFriends111",
      date: "00.00.00 ~ 00.00.00",
      team: "개인",
      url: "https://goodfriends.life/",
      skill: ["typescript", "vue.js"],
      gitHub: "https://github.com/woorifisa-projects/GoodFriends",
    },
  ].sort((a, b) => a.id - b.id);

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
