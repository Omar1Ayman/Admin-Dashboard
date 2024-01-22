import React from "react";
import PieComponent from "./PieComponent";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Pie = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h5" color={theme.palette.primary.dark}>
        Pie Chart
      </Typography>
      <Typography mb={"40px"} fontSize={"15px"}>
        Simple Pie Chart
      </Typography>
      <PieComponent />
    </>
  );
};

export default Pie;
