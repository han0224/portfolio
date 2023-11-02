import { useRef } from "react";

export default function useScrollMove() {
  const element = useRef();
  const onMoveScroll = () => {
    console.log(element);
    element?.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { element, onMoveScroll };
}
