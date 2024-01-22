import React from "react";
import GeoComponent from "./GeoComponent";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Geography = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h5" color={theme.palette.primary.dark}>
        Geography Chart
      </Typography>
      <Typography mb={"40px"} fontSize={"15px"}>
        Simple Geography Chart
      </Typography>
      <GeoComponent />
    </>
  );
};

export default Geography;
