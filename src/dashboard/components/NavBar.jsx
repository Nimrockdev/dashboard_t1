import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const NavBar = (drawerWidth = 240) => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4 custom-navbar">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp; Proyecto ...
      </span>
      <Link to="/auth/login">
        <button className="btn btn-outline-danger">
          <i className="fas fa-sign-out-alt"></i>

          <span>Salir</span>
        </button>
      </Link>
    </div>
  );
};

/*
   
*/
/*    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            {" "}
            Dash{" "}
          </Typography>

          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>*/
