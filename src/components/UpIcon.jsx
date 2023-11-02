import { BsArrowUpCircleFill } from "react-icons/bs";

export default function UpIcon({ size = 40 }) {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={scrollUp} style={{ width: "fit-content" }}>
      <BsArrowUpCircleFill size={size} />
    </div>
  );
}
