import { BsArrowUpCircleFill } from "react-icons/bs";
import useScrollMove from "../hooks/useScrollMove";
import { useEffect, useState } from "react";

export default function UpIcon({ size = 40, dom = null }) {
  const [visible, setVisible] = useState(true);

  const scrollUp = () => {
    if (dom) {
      const { element, onMoveScroll } = useScrollMove(dom);
      onMoveScroll();
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    if (!dom) {
      setVisible(true);
      return;
    }
    if (dom && dom.current) {
      const options = {
        root: null, // 뷰포트를 기준으로 타켓의 가시성 검사
        rootMargin: "0px 0px 0px 0px", // 확장 또는 축소 X
        threshold: 0, // 타켓의 가시성 0%일 때 옵저버 실행
      };

      const intersectionObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
            } else {
              setVisible(false);
            }
          });
        },
        options
      );
      intersectionObserver.observe(dom.current);
    }
  }, [dom]);

  return (
    <>
      {visible ? (
        <div onClick={scrollUp} style={{ width: "fit-content" }}>
          <BsArrowUpCircleFill size={size} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
