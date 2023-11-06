import styles from "./DetailPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import projectInfo from "../assets/projectInfo.json";
import { useEffect, useRef, useState } from "react";
import { Content, Info, Not, Tab } from "../components/project";
import { IoIosArrowBack } from "react-icons/io";
import { UpIcon } from "../components";

export default function DetailPage() {
  const { id } = useParams();
  const [viewData, setViewData] = useState({ id: null });
  const tabComponents = [
    { name: "소개", component: <Content project={viewData.info} /> },
    { name: "자세한내용", component: <Content project={viewData.data} /> },
  ];
  const navigate = useNavigate();
  const tabs = useRef();

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
        <div ref={tabs}>
          <Tab components={tabComponents} />
        </div>
        <div className="up-icon">
          <UpIcon size={40} dom={tabs} />
        </div>
      </div>
    );
  }
}
