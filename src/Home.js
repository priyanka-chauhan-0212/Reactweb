import React from "react";
import "./Home.css";

export default function Home() {
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
              <a href="#" class="btn btn-purple">
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
              <a href="#" class="btn btn-red">
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
              <a href="#" class="btn btn-blue">
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
      <div class="row">
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
