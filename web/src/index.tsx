import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { GlobalStyles } from "@mui/material";
import { pallete } from "./style";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
        <App />
      </React.StrictMode>
    </LocalizationProvider>
  </ThemeProvider>
);
