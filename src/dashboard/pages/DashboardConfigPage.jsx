import { SideBar } from "../../components/SideBar";
import { NavBar } from "../../components/NavBar";

export const DashboardConfigPage = () => {
  return (
    <div className="dashboard-container">
      <NavBar />
      <div className="main-container">
        <SideBar />
        <div className="content-container">
          <main className="p-12">
            <h1>DashboardConfigPage</h1>
          </main>
        </div>
      </div>
    </div>
  );
};
