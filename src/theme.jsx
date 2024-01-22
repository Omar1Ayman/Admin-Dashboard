import { amber, deepOrange, grey } from "@mui/material/colors";
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light" ? {} : {}),
  },
});
