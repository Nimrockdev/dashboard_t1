import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";

const drawerWidth = 220;

export const DashboardLayout = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ marginLeft: 25, flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};
/*
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>    

      

     

*/
