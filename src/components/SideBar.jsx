import * as React from "react";
import { styled, useTheme, alpha, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Avatar, Stack, Tooltip, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const array1 = [
  { text: "Dashboard", icon: <HomeIcon />, path: "/" },
  { text: "Manage Item", icon: <PeopleOutlineIcon />, path: "/team" },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];

const array2 = [
  { text: "Profile Form", icon: <PersonOutlineOutlinedIcon />, path: "/form" },
  { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
  {
    text: "FAQ Page",
    icon: <HelpOutlinedIcon />,
    path: "/faq",
  },
];

const array3 = [
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutlinedIcon />, path: "/pie" },
  {
    text: "Line Chart",
    icon: <TimelineOutlinedIcon />,
    path: "/line",
  },
  {
    text: "Geography Chart",
    icon: <MapOutlinedIcon />,
    path: "/geography",
  },
];

const SideBar = ({ open, handleDrawerClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <Avatar
        alt="Remy Sharp"
        src="https://www.unicef.org/pakistan/sites/unicef.org.pakistan/files/styles/press_release_feature/public/AZ_WASH_Punjab_132.JPG.webp?itok=t_lFbQD5"
        sx={{
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          marginLeft: open ? 0 : 0.4,
          mx: "auto",
          my: 1,
          border: "2px solid gray",
          transition: ".25s",
        }}
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? 20 : 0, transition: ".25s" }}
      >
        Omar Ayman
      </Typography>
      <Typography
        align="center"
        sx={{ fontSize: open ? 17 : 0, transition: ".25s" }}
        color={theme.palette.info.main}
      >
        Admin
      </Typography>

      <Divider />

      <List>
        {array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip placement="left" title={open ? null : item.text}>
              <ListItemButton
                onClick={(e) => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode == "dark"
                        ? grey[800]
                        : grey[200]
                      : "",
                  transition: ".25s",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip placement="left" title={open ? null : item.text}>
              <ListItemButton
                onClick={(e) => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode == "dark"
                        ? grey[800]
                        : grey[200]
                      : "",
                  transition: ".25s",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip placement="left" title={open ? null : item.text}>
              <ListItemButton
                onClick={(e) => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode == "dark"
                        ? grey[800]
                        : grey[200]
                      : "",
                  transition: ".25s",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
