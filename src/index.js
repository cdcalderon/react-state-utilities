import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import { App } from "./current/App";
import reportWebVitals from "./reportWebVitals";

//import { App } from "./01-useStateTraining/App";
//import { App } from "./02-useReducer/App";
//import { App } from "./03-useContext/App";
import { App } from "./04-useEffect/App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
