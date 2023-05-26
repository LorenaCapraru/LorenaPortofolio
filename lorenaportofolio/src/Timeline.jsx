import React from "react";
import { Footer } from "./Footer";
import "./Timeline.css";

export const Timeline = () => {
  return (
    <div className="design-section">
      <div class="container">
        <a href="https://github.com/lorenacapraru">
          <div class="card">
            <h3 class="title">HTML</h3>

            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>

            <div class="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle class="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
            <h3>HTMLaaa</h3>
          </div>
        </a>
        <div class="card">
          <h3 class="title">CSS</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle class="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
        <div class="card">
          <h3 class="title">JavaScript</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle class="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
        <div class="card">
          <h3 class="title">Asp.net MVC</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle class="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
