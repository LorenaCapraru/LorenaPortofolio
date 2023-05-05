import React from "react";
import { Link } from "react-router-dom";

export const RightHalf = () => {
  return (
    <div className="rightHalf">
      {/* <Header /> */}
      <div className="aboutMe">
        <h1>About me</h1>
        <p>
          Lorem ipsum lala meme dada lili mimi dada kiki lili ula lala dodo dudu
        </p>
      </div>
      <div class="data-container">
        <Link to="/timeline">
          {" "}
          <span class="btn">Projects</span>
        </Link>
      </div>
    </div>
  );
};
