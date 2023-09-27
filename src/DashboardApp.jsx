import { SideBar } from "./components/SideBar";
import { NavBar } from "./components/NavBar";
import { App } from "./components/Dash";

export const DashboardApp = () => {
  return (
    <div className="dashboard-container">
      <NavBar />
      <div className="main-container">
        <SideBar />
        <div className="content-container">
          <App />
        </div>
      </div>
    </div>
  );
};
