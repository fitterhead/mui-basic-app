import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            h1 {
              color: grey;
            }
            body {
              background-color: #7DCFB6;
            }
          `,
    },
  },
});

export default theme;
