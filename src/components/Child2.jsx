import React, { useReducer } from "react";
import myReducer from "./../reducer/CounterReducer";

export const Child2 = () => {
  let [myValue, dispatch] = useReducer(myReducer, 0);

  return (
    <div className="">
      <h3>This is the second child</h3>
      <br />
      The value of myValue is :{" "}
      <span className="bg-warning rounded-circle py-1 px-2 text-black">
        {myValue}
      </span>
      <br />
      <button
        className="btn btn-primary my-2 text-capitalize"
        onClick={() => dispatch("increment")}
      >
        Increment button reducer
      </button>
    </div>
  );
};
