import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AuthProvider from "./componets/context/auth";

const options = {
  position: positions.MIDDLE,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};
// tema del material ui
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#57D3F0",
    },
    secondary: {
      main: "#C5C5C5",
    },
  },
});

// template para alertas de la app
const AlertTemplate = ({ options, message }) => (
  <div
    className={`py-4 px-10 mx-8 rounded-t-lg  text-center text-white ${
      options.type === "info" && "bg-blue-400"
    }
            ${options.type === "error" && "bg-red-400"}
            ${options.type === "success" && "bg-green-400"}`}
  >
    <span className="text-lg mr-2">{message}</span>
    {options.type === "info" && "!"}
    {options.type === "success" && ":)"}
    {options.type === "error" && ":("}
  </div>
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
