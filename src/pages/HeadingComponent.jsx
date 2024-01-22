import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";

const HeadingComponent = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        sx={{ textTransform: "uppercase", fontWeight: "bold" }}
        variant="h4"
        color={theme.palette.info.light}
      >
        {title}
      </Typography>
      <Typography variant="body1" fontSize={"15px"}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default HeadingComponent;
