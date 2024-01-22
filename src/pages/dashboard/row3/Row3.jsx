import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import PieComponent from "../../charts/PieComponent";
import BarComponent from "../../charts/BarComponent";
import GeoComponent from "../../charts/GeoComponent";
import { useTheme } from "@emotion/react";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack mt={2} columnGap={2} rowGap={1} direction={"row"} flexWrap={"wrap"}>
      <Paper sx={{ flexGrow: 1, width: "32%", minWidth: "100px" }}>
        <Typography
          variant="h4"
          fontSize={"24px"}
          my={1}
          px={1}
          component="h1"
          color={theme.palette.primary.dark}
        >
          Campagn
        </Typography>
        <PieComponent isDashboard={true} />
        <Typography mt={2} textAlign={"center"} variant="body1" component="h1">
          $85.258.25 revenue generated
        </Typography>
        <Typography textAlign={"center"} my={1} variant="body1" component="h1">
          includenis extra music
        </Typography>
      </Paper>
      <Paper sx={{ flexGrow: 1, width: "32%", minWidth: "100px" }}>
        <Typography
          variant="h4"
          fontSize={"24px"}
          my={1}
          px={1}
          component="h1"
          color={theme.palette.primary.dark}
        >
          Sales Quantity
        </Typography>
        <BarComponent isDashboard={true} />
        <Typography mt={2} textAlign={"center"} variant="body1" component="h1">
          $85.258.25 revenue generated
        </Typography>
        <Typography textAlign={"center"} my={1} variant="body1" component="h1">
          includenis extra music
        </Typography>
      </Paper>
      <Paper
        sx={{ padding: "0 5px", flexGrow: 1, width: "32%", minWidth: "100px" }}
      >
        <Typography
          variant="h4"
          fontSize={"24px"}
          my={1}
          component="h1"
          color={theme.palette.primary.dark}
        >
          Sales Quantity
        </Typography>
        <GeoComponent isDashboard={true} />
        <Typography mt={2} textAlign={"center"} variant="body1" component="h1">
          $85.258.25 revenue generated
        </Typography>
      </Paper>
    </Stack>
  );
};

export default Row3;
