import React, { useReducer } from "react";
import myReducer from "./../reducer/CounterReducer";

export const Child2 = () => {
  let [state, dispatch] = useReducer(myReducer, 1);

  return (
    <div>
      This is the second child
      <br />
      The value of State is : {state}
      <br />
      <button onClick={() => dispatch("increment")}>
        Increment button reducer
      </button>
    </div>
  );
};
