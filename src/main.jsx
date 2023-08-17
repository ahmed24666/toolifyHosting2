import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./App.jsx";
import MyContextProvidor from "./context/MyContext";
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContextProvidor>
      <App />
    </MyContextProvidor>
  </React.StrictMode>
);
