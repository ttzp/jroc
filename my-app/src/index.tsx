import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/App";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import theme from "./app/themes"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("groot")
);
