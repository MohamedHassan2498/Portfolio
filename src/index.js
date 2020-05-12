import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { jsx } from "@emotion/core";
import App from "./App";
import { ThemeProvider } from "emotion-theming";
import "semantic-ui-css/semantic.min.css";

const themeLight = {
  text: "#000",
  background: "#fff",
  buttonText: "#000",
  buttonTextHover: "#fff",
  buttonBorder: "#000",
  buttonBg: "rgba(0, 0, 0, 0)",
  buttonBgHover: "rgba(0, 0, 0, 1)"
};

const themeDark = {
  text: "#fff",
  background: "#121212",
  buttonText: "#fff",
  buttonTextHover: "#000",
  buttonBorder: "#fff",
  buttonBg: "rgba(255, 255, 255, 0)",
  buttonBgHover: "rgba(255, 255, 255, 1)"
};

function Root() {
  const [isDark, setIsDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <App isDark={isDark} setIsDark={setIsDark} />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
