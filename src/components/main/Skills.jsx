import styles from "./Skills.module.css";
import { TbBrandNextjs, TbBrandGithubFilled } from "react-icons/tb";
import {
  BiLogoReact,
  BiLogoVuejs,
  BiLogoTypescript,
  BiLogoJavascript,
} from "react-icons/bi";

const icon = (type) => {
  const size = 70;
  const color = {
    js: "#F0DB4F",
    ts: "#3178C6",
    react: "#61DAFB",
    vue: "#4FC08D",
    next: "#000000",
    git: "#181717",
  };
  const iconType = {
    js: <BiLogoJavascript size={size} color={color.js} />,
    ts: <BiLogoTypescript size={size} color={color.ts} />,
    react: <BiLogoReact size={size} color={color.react} />,
    vue: <BiLogoVuejs size={size} color={color.vue} />,
    next: <TbBrandNextjs size={size} color={color.next} />,
    git: <TbBrandGithubFilled size={size} color={color.git} />,
  };

  return iconType[type];
};

export default function Skills() {
  const keys = ["js", "ts", "react", "vue", "next", "git"];
  const text = {
    js: [
      "Javascript",
      "ES6 이후 문법에 능숙합니다.",
      " 내부 동작 원리 및 내부 구조를 이해하고 있습니다.",
    ],
    ts: ["Typescript", "타입을 이용한 정적 프로그래밍이 가능합니다."],
    react: [
      "React.js",
      "Hook을 적절히 사용하며 원하는 Custom Hook을 구현할 수 있습니다.",
      "가상돔과 반응성의 원리에 대해 이해하고 있습니다.",
    ],
    vue: [
      "Vue.js",
      "Vue.js의 라이프 사이클을 이해하고 있으며 이를 적절히 사용할 수 있습니다.",
      "Vue3의 Composition API에 익숙하며 Vue.js에서 제공하는 템플릿을 적절히 사용할 수 있습니다.",
    ],
    next: [
      "Next.js",
      "프레임워크의 필요성을 이해하고 있습니다.",
      "SSR의 필요성과 CSR과 SSR의 차이점을 이해하고 있습니다.",
    ],
    git: ["Git", "Git flow 전략을 이용해 협업한 경험이 있습니다."],
  };
  return (
    <div className={styles.skills}>
      <h2>기술</h2>
      <div className={styles["skills-box"]}>
        {keys.map((v) => (
          <div className={styles.skill} key={v}>
            <div className={styles.icon}>{icon(v)}</div>
            <div className={styles.context}>
              <p>{text[v][0]}</p>
              <ul className={styles.detail}>
                {text[v].slice(1).map((t, index) => (
                  <li key={`${v}-${text}-${index}`}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
