import styles from "./Tab.module.css";
import { useState } from "react";

export default function Tab({ components }) {
  const [currentTab, setCurrentTab] = useState(0);
  const changeTab = (index) => {
    setCurrentTab(index);
  };
  return (
    <div className={styles.tab}>
      <div className={styles["btn-wrap"]}>
        {components.map((component, index) => (
          <button
            key={component.name}
            onClick={() => changeTab(index)}
            className={currentTab === index ? styles.current : ""}
          >
            {component.name}
          </button>
        ))}
      </div>
      {components[currentTab].component}
    </div>
  );
}
