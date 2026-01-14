//! React Way
import { createRoot } from "react-dom/client";
import App from "./App";
// createRoot(document.getElementById("root")).render(<h1>Hello React</h1>);

// createRoot(document.getElementById("root")).render(App()); -> wrong way
createRoot(document.getElementById("root")).render(<App></App>);


//! JS WAY
// const div = document.getElementById("root");
// const h1 = document.createElement("h1");
// h1.textContent = "Hello React";
// div.append(h1);