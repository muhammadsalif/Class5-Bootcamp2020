import React, { useState } from "react";
import "./App.css";
import { Parent } from "./components/Parent";
import myContext from "./context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let countState = useState(0);

  return (
    <myContext.Provider value={countState}>
      <Parent></Parent>
    </myContext.Provider>
  );
}

export default App;
