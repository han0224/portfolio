import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <div>notFound</div>
      <button onClick={() => navigate("/")}>home</button>
    </div>
  );
}
