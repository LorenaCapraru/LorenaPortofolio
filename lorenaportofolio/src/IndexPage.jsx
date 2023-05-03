import React from "react";
import { Footer } from "./Footer";
import { LeftHalf } from "./LeftHalf";
import { RightHalf } from "./RighHalf";

export const IndexPage = () => {
  return (
    <div className="main">
      <RightHalf />
      <LeftHalf />
      <Footer />
    </div>
  );
};
