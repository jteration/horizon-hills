import { createRoot } from "react-dom/client";
import App from "./App";
import { register } from "./registerServiceWorker";
import "bulma/css/bulma.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
register();
