import React from "react";
import Home from "./components/Home";
import "./styles/global.scss";

require('dotenv').config()

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
