import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Header from "./component/Header/header.tsx";
import Footer from "./component/Footer/footer.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
