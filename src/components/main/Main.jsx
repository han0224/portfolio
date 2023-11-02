/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import styles from "./Main.module.css";
import { AiFillCaretDown } from "react-icons/ai";

export default function Main(props) {
  const textInterval = useRef(null);
  const text = "안녕하세요 한윤서입니다.";
  const [viewText, setViewText] = useState("");
  const maxIndex = text.length;

  const goAbout = () => {
    console.log(props);
    props.goAbout.onMoveScroll();
  };
  const time = () => {
    if (!textInterval.current) {
      textInterval.current = setInterval(() => {
        setViewText((pre) => {
          if (pre.length >= maxIndex) {
            clearInterval(textInterval.current);
            textInterval.current = null;
            return pre;
          }
          return pre + text[pre.length];
        });
      }, 220);
    }
  };

  // const clearText = () => {
  //   if (!textInterval.current) {
  //     textInterval.current = setInterval(() => {
  //       setViewText((pre) => {
  //         if (pre?.length === 0) {
  //           setFlag(false);
  //           clearInterval(textInterval.current);
  //           textInterval.current = null;
  //           return pre;
  //         }
  //         return pre?.slice(0, pre.length - 1);
  //       });
  //     }, 100);
  //   }
  // };

  useEffect(() => {
    time();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles["info-box"]}>
        <p>{viewText}</p>
        <div className={styles.detail}>
          <p>프론트엔드 개발자를 희망합니다.</p>
          <p>새로운 기술에 관심이 많습니다.</p>
          <p></p>
        </div>
      </div>
      <div onClick={goAbout} className={styles.icon}>
        <AiFillCaretDown size={50} />
      </div>
    </div>
  );
}
