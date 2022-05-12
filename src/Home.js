import React, { useState } from "react";
import "./Home.css";

export default function Home({ theme }) {
  const [th, setTh] = useState(theme);
  function changeTheme(theme) {
    setTh(theme);
  }
  return (
    <div class="container">
      <div class="row p-2">
        <div class="col">
          <div class="card bg-purple">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a
                href="#"
                onClick={() => changeTheme("purple")}
                className={`btn btn-${th}`}
              >
                Purple
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-red">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a
                href="#"
                onClick={() => changeTheme("red")}
                className={`btn btn-${th}`}
              >
                Red
              </a>
            </div>
          </div>
        </div>
        <div class="col ">
          <div class="card bg-blue">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className={`btn btn-${th}`}>
                Blue
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-orange">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-orange">
                Yellow
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row p-2">
        <div class="col-3">
          <div class="card bg-dark">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-dark">
                Dark Theme
              </a>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card bg-light">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-light">
                Light Theme
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
