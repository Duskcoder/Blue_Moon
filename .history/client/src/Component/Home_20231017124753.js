import React from "react";
import { AboutUs } from "./AboutUs";

function Home() {
  return (
    <div>
      <div className="home-bg ">
        <div className="container position-relative text-white home-text-center">
          <div className="text-align-center">
            <div>
              <h1>YOUR HOME</h1>
            </div>
            <div>
              <h3>Away</h3>
            </div>
            <div>
              <h1>FROM HOME</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5 grid-container container mb-5">
        <div class="col-lg-2 ">
          <div>
            <h4>Rooms</h4>
            <div>
              <button>View ALL</button>
            </div>
          </div>
        </div>
        <div class="col-lg-5  home-room">
          <p>Mercury Room</p>
        </div>
        <div class="col-lg-5  home-rooms">
            <p>Uranus Room</p>
        </div>
      </div>
      <div>
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;
