import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { DashboardConfigPage } from "../pages/DashboardConfigPage";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/config" element={<DashboardConfigPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
