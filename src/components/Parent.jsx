import React from "react";
import { Child } from "./Child";
import { Child2 } from "./Child2";

export const Parent = () => {
  return (
    <div className="container bg-info  pt-3 d-flex justify-content-center align-items-center flex-column ">
      <h3 className="text-capitalize">This is parent</h3>
      <br />
      <div>
        <Child></Child>
        <Child2></Child2>
      </div>
    </div>
  );
};
