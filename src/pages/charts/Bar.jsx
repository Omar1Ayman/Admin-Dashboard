import { Typography } from "@mui/material";
import BarComponent from "./BarComponent";
import { useTheme } from "@emotion/react";

const Bar = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h5" color={theme.palette.primary.dark}>
        Bar Chart
      </Typography>
      <Typography mb={"40px"} fontSize={"15px"}>
        informaton about
      </Typography>
      <BarComponent isDashboard={false} />
    </>
  );
};

export default Bar;
