import React from "react";
import LineComponent from "./LineComponent";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Line = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h5" color={theme.palette.primary.dark}>
        Line Chart
      </Typography>
      <Typography mb={"40px"} fontSize={"15px"}>
        Simple Line Chart
      </Typography>
      <LineComponent height={"75vh"} />
    </>
  );
};

export default Line;
