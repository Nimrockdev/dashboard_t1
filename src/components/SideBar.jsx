import { Box, Divider, Drawer, Toolbar, Typography } from "@mui/material";

//import { TurnedInNot } from "@mui/icons-material";
//import { useSelector } from "react-redux";
//import { SideBarItem } from "./";

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <div className="custom-sidebar">
      <div className="sidebar-item">Dashboard</div>
      <div className="sidebar-item">Configuración</div>
      {/* Puedes agregar más opciones según sea necesario */}
    </div>
  );
};
