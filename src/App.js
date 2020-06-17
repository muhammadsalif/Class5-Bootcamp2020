import React, { useState } from "react";
import "./App.css";
import { Parent } from "./components/Parent";
import myContext from "./context/GlobalState";

function App() {
  let countState = useState(1);

  return (
    <myContext.Provider value={countState}>
      <Parent></Parent>
    </myContext.Provider>
  );
}

export default App;
