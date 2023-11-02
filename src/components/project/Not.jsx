import { useNavigate } from "react-router-dom";

export default function Not() {
  const navigate = useNavigate();
  return (
    <div>
      <p>해당 프로젝트 현재 수정중에 있습니다</p>
      <button onClick={() => navigate("/")}>home</button>
    </div>
  );
}
