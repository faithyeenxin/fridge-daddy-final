import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  "Home",
  "Evergreen",
  "Baddies",
  "Recipes",
  "Search",
  "Category",
  "User",
  "Log Out",
];
const Navigation = (props) => {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#f93f23" }}>
        Fridge Daddy
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                if (item !== "Log Out") {
                  navigate(`/${item.toLowerCase()}`);
                } else {
                  console.log("Log Out has been clicked");
                }
              }}
            >
              <ListItemText primary={item} sx={{ color: "#f93f23" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            backgroundColor: "#f93f23",
          }}
        >
          <LunchDiningIcon sx={{ mr: 1 }} />
          <Typography
            onClick={() => {
              navigate("/");
            }}
            sx={{
              fontSize: 25,
              flexGrow: 1,
            }}
          >
            Fridge Daddy
          </Typography>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          anchor="right"
          sx={{
            //   display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navigation;
