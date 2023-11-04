import styles from "./DetailPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import projectInfo from "../assets/projectInfo.json";
import { useEffect, useState } from "react";
import { Content, Info, Not } from "../components/project";
import { IoIosArrowBack } from "react-icons/io";
import { UpIcon } from "../components";

export default function DetailPage() {
  const { id } = useParams();
  const [viewData, setViewData] = useState({ id: null });
  const navigate = useNavigate();

  useEffect(() => {
    const findData = projectInfo.find(
      (project) => Number(project.id) === Number(id)
    );
    if (findData) {
      setViewData(findData);
    }
  }, []);
  if (!viewData.id) return <Not />;
  else {
    return (
      <div className={styles.detailPage}>
        <button className={styles["home-btn"]} onClick={() => navigate("/")}>
          <IoIosArrowBack size={20} />
        </button>
        <h1>{viewData.name}</h1>
        <Info project={viewData} />
        <Content project={viewData.data} />
        <div className="up-icon">
          <UpIcon size={40} />
        </div>
      </div>
    );
  }
}
