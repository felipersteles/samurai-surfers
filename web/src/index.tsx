import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { GlobalStyles } from "@mui/material";
import { pallete } from "./style";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles
      styles={{
        body: { backgroundColor: pallete.blue, margin: 0, overflowX: "hidden" },
      }}
    />

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </LocalizationProvider>
  </ThemeProvider>
);
