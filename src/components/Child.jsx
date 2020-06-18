import React, { useContext } from "react";

import myContext from "../context/GlobalState";
export const Child = () => {
  let myValue = useContext(myContext);
  // console.log(myValue[0]);

  return (
    <div>
      <h3>This is the first child</h3>
      The value of myValue is :{" "}
      <span className="bg-warning rounded-circle py-1 px-2 ml-1 text-black">
        {myValue[0]}
      </span>
      <br />
      <button
        className="btn btn-primary my-2 text-capitalize"
        onClick={() => myValue[1](++myValue[0])}
      >
        Increment button context
      </button>
      <br />
      <br />
      <br />
    </div>
  );
};
