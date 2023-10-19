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
      <div class="row  mt-5  grid-container mb-5">
        <div class="col-lg-4  ">
          <div>
            <h4>Rooms</h4>
            <div>
              <button>View ALL</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4  home-room ">
          <p className="mt-40px">Mercury Room</p>
        </div>
        <div class="col-lg-4  home-rooms">
          <p className="mt-40px">Uranus Room</p>
        </div>
      </div>
      <div>
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;
