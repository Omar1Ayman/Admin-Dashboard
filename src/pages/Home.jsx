import * as React from "react";
import { styled, useTheme, alpha, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { getDesignTokens } from "../theme";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Home() {
  const [mode, setMode] = React.useState(
    Boolean(localStorage.getItem("currentMode"))
      ? localStorage.getItem("currentMode")
      : "light"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    console.log("true");
    setOpen(true);
  };
  const handleDrawerClose = () => {
    console.log("fasle");

    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar
          setMode={setMode}
          open={open}
          handleDrawerOpen={handleDrawerOpen}
        />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />

        <Box component="main" sx={{ flexGrow: 1, p: 1.5 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
