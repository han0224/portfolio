import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage, DetailPage, NotFound } from "./pages";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project/:id" element={<DetailPage />} />
      <Route path="/notFound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/notFound" />} />
    </Routes>
  );
}
