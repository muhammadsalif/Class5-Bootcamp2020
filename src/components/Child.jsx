import React, { useContext } from "react";

import myContext from "../context/GlobalState";
export const Child = () => {
  let myValue = useContext(myContext);
  console.log(myValue[0]);

  return (
    <div>
      This is child component {myValue[0]}
      <br />
      <button onClick={() => myValue[1](++myValue[0])}>
        Press button to increment
      </button>
    </div>
  );
};
