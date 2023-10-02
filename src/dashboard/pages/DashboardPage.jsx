import { DashboardLayout } from "../layout/DashboardLayout";
import { App } from "../../components/Dash";

export const DashboardPage = () => {
  return (
    <DashboardLayout>
      <App />
    </DashboardLayout>
  );
};

/*<div className="dashboard-container">
      <NavBar />
      <div className="main-container">
        <SideBar />
        <div className="content-container">
          <App />
        </div>
      </div>
    </div>*/
