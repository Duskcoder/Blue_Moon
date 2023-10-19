import React from "react";
import { AboutUs } from "./AboutUs";

function Home() {
  return (
    <div>
      <div className="home-bg ">
        <div className="container position-relative text-white home-text-center">
          <div className="text-align-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h1>YOUR HOME</h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h3>Away</h3>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
              <h1>FROM HOME</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-evenly j mb-5  mt-5">
        <div class="col-3  text-center  pt-5 ">
          <div className="home-room-button fflot-inlineend ">
            <div className="m-r-75px">
              <h4 className="ms-4 ">Rooms</h4>
            </div>
            <br />
            <div>
              <br />
              <button className="mt-4">View ALL</button>
            </div>
          </div>
        </div>
        <div class="col-3   text-white fs-2    home-room">
          <p className="mt-40px d-flex justify-content-center">Mercury Room</p>
        </div>
        <div class="col-3  text-white  fs-2 home-rooms">
          <p className="mt-40px d-flex justify-content-center">Uranus Room</p>
        </div>
      </div>
      
      <div>
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;
