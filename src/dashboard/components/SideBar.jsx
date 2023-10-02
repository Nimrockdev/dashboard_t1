import {
  Grid,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import { AppBar, IconButton } from "@mui/material";
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

/*    <div className="custom-sidebar">
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
    </div>*/

/*       {notes.map((note) => (
            <SideBarItem key={note.id} {...note} />
          ))}*/

/*      <Drawer
        variant="permanent" // temporary
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {"displayName"}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon></ListItemIcon>
              <Grid container>
                <ListItemText primary={"Dashboard"} />
              </Grid>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/config">
              <ListItemIcon></ListItemIcon>
              <Grid container>
                <ListItemText primary={"Configuración"} />
              </Grid>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>*/

/*<Box component="nav" mt={10}>
      <h1>ppppppppppppppppppppp</h1>
      <h1>ppppppppppppppppppppp</h1>
      <h1>ppppppppppppppppppppp</h1>
      <h1>ppppppppppppppppppppp</h1>
      <h1>ppppppppppppppppppppp</h1>

      <Drawer
        variant="permanent" // temporary
        mt={10}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            {"displayName"}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon></ListItemIcon>
              <Grid container>
                <ListItemText primary={"Dashboard"} />
              </Grid>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/config">
              <ListItemIcon></ListItemIcon>
              <Grid container>
                <ListItemText primary={"Configuración"} />
              </Grid>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>*/
