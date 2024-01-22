import { createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { getDesignTokens } from "./theme";

// ColorProviderMode.js
import { ThemeProvider } from "@mui/material";

export const ColorModeContext = createContext();

const ColorProviderMode = ({ children }) => {
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode")
      : "light"
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        console.log(theme.palette.mode);
        localStorage.setItem("currentMode", theme.palette.mode);
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [setMode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={{ colorMode, mode, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorProviderMode;
