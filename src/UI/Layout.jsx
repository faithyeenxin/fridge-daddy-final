import { Toolbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Futura",
  },
  textField: {
    fontFamily: "Futura",
  },
});
const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Toolbar />
      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;
