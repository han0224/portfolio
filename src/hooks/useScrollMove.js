import { useRef } from "react";

export default function useScrollMove(dom = null) {
  const element = dom || useRef();
  const onMoveScroll = () => {
    console.log(element);
    element?.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { element, onMoveScroll };
}
