import React from "react";
import ReactDOM from "react-dom/client";
import Effect from "./App.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App2.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      <Routes>
        <Route path="/app2" element={<App />} />
        <Route path="/app3" element={<Effect />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
