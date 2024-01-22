import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.error.main} variant="h5">
        There is no design yet
      </Typography>
      <br />
      <br />
      Please try later...
    </Box>
  );
};

export default NotFound;
