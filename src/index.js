// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css"; // Add your global styles here

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );




// import React from "react";
// import { createRoot } from "react-dom/client"; // Import createRoot
// import App from "./App";
// import "./index.css"; // Add your global styles here

// const container = document.getElementById("root");
// const root = createRoot(container); // Create a root

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );






import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App";
import "./index.css"; // Add your global styles here

const container = document.getElementById("root");
const root = createRoot(container); // Create a root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
