import styles from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";
import { PiGithubLogo } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.icons}>
        <a href="https://github.com/han0224">
          <AiFillGithub size={30} />
        </a>
        <a href="https://han0224.github.io/">
          <PiGithubLogo size={30} />
        </a>
        <a href="mailto:dbn0224@gmail.com">
          <BiLogoGmail size={30} />
        </a>
      </div>
      <p>© 2023. Han YunSeo. All rights reserved.</p>{" "}
    </div>
  );
}
