import React from "react";
import Row1 from "./row1/Row1";
import Row2 from "./row2/Row2";
import Row3 from "./row3/Row3";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import HeadingComponent from "../HeadingComponent";

const Dashboard = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <HeadingComponent
          title="Dashboard"
          subtitle={"welcome to your dashboard"}
        />

        <Box textAlign={"right"} my={2.5}>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
            }}
            size="small"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <Row1 />
      <Row2 />
      <Row3 />
    </>
  );
};

export default Dashboard;
