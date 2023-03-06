import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/CSSReset/CSSReset.scss";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
