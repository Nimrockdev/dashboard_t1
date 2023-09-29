import { Link } from "react-router-dom";

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <div className="custom-sidebar">
      <div className="sidebar-item">
        <Link className="sidebar-item" to="/">
          Dashboard
        </Link>
      </div>
      <div className="sidebar-item">
        <Link className="sidebar-item" to="/config">
          Configuración
        </Link>
      </div>
    </div>
  );
};
