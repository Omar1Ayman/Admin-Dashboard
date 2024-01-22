import { Grid } from "@mui/material";
import React from "react";
import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import GridComponent from "./GridComponent";
import { useTheme } from "@emotion/react";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <GridComponent
        scheme="accent"
        icon={
          <Email
            sx={{ fontSize: "32px", color: theme.palette.secondary.main }}
          />
        }
        increase={"+14%"}
        title={"12.361"}
        subtitle={"Emaiils Sent"}
      />
      <GridComponent
        scheme="dark2"
        icon={
          <PointOfSale
            sx={{ fontSize: "32px", color: theme.palette.secondary.main }}
          />
        }
        increase={"+12%"}
        title={"431.225"}
        subtitle={"Sales obtained"}
      />
      <GridComponent
        scheme="paired"
        icon={
          <PersonAdd
            sx={{ fontSize: "32px", color: theme.palette.secondary.main }}
          />
        }
        title={"32.441"}
        increase={"+5%"}
        subtitle={"New Clients"}
      />
      <GridComponent
        scheme="set1"
        icon={
          <Traffic
            sx={{ fontSize: "32px", color: theme.palette.secondary.main }}
          />
        }
        increase={"+43%"}
        title={"1.325.134"}
        subtitle={"Traffic Recieved"}
      />
    </Grid>
  );
};

export default Row1;
