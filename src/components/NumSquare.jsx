import React from "react";
import { NumberComp } from "./NumberComp";
import { Square } from "./Square";

export const NumSquare = () => {
  return (
    <React.Fragment>
      <NumberComp />
      <Square />
    </React.Fragment>
  );
};
