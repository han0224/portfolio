import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);

// github page 에서 새로고침시 404가 생김
// hashrouter 하면 그런 문제가 없음
// 검색엔진이 못읽는 단점이 있기는 한데, 프로젝트 상세내용은 검색엔진이 굳이 읽을 필요가 없음
