import React from "react";
import { Footer } from "./Footer";
import "./Timeline.css";

export const Timeline = () => {
  return (
    <div className="design-section">
      <div className="timeline">
        <div className="timeline-empty"></div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-component timeline-content">
          <h3>HTML</h3>
          <p>Some Text</p>
        </div>
        <div className="timeline-component timeline-content">
          <h3>CSS</h3>
          <p>Some Text.</p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-empty"></div>

        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className=" timeline-component timeline-content">
          <h3>Javascript</h3>
          <p>Some Text.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
