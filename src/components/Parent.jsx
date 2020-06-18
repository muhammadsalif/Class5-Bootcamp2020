import React from "react";
import { Child } from "./Child";
import { Child2 } from "./Child2";

export const Parent = () => {
  return (
    <div>
      This is parent
      <Child></Child>
      <Child2></Child2>
    </div>
  );
};
