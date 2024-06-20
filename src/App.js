import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.google.com/">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.google.com/" rel="noreferrer">
          Saran Velmurugan
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.google.com/" rel="noreferrer">
          Web Plus Academy
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
