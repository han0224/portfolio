/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import styles from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((v) => !v);
  };

  const menuName = [
    { name: "About me", event: props.event[1] },
    { name: "Skills", event: props.event[2] },
    // { name: "Archiving", event: props.event[3] },
    { name: "Projects", event: props.event[4] },
  ];
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.title}>YUNSEO's Portfolio</div>
        <div className={styles.menu}>
          <ul>
            {menuName.map((v) => (
              <li key={v.name} onClick={() => v.event.onMoveScroll()}>
                {v.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["menu_btn"]}>
          <div onClick={onClick}>
            <GiHamburgerMenu size={30} />
          </div>
          <ul className={isOpen ? styles.open : styles.close}>
            {menuName.map((v) => (
              <li key={v.name} onClick={() => v.event.onMoveScroll()}>
                {v.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
