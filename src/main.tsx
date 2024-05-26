import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Header from "./component/Header/header.tsx";
import Footer from "./component/Footer/footer.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
