import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";

import { CheckingAuth } from "../ui/";

import { useAuthStore } from "../hooks";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  //let status = "authenticated";
  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <CheckingAuth />;
  }
  console.log("jsg status");
  console.log(status);

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<DashboardRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );

  /*
  return (
    <Routes>
      <Route path="/*" element={<DashboardRoutes />} />

      <Route path="/auth/*" element={<AuthRoutes />} />

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );*/
};
