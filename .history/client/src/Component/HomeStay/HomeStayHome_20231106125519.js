import React from "react";
import { AboutUs } from "../AboutUs";
import white1 from "../../images/white1.jpg";
import champ from "../../images/champ.jpg";
import white from "../../images/white.jpg";
import butha from "../../images/butha.jpg";
import kitchen from "../../images/kitchen.jpg";
import reception from "../../images/reception.jpg";
import { About } from "../About/About";
import Header1 from "../Header1";
import CardBox from "../Gallery/Gallery";

function HomeStayHome() {
  return (
    <div>
    <Header1/>
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

      <div className="row justify-content-evenly  mb-5  mt-5 room-booking">
        <div class="col-3 pt-5 m-auto">
          <h4 className="mt-5 justify-content-center d-flex">Rooms</h4>

          <button className="mt-2 mx-auto d-flex">View ALL</button>
        </div>
        <div class="col-lg-4  col-12 text-white fs-2 roos-home-card   home-room">
          <p className="mt-40px d-flex justify-content-center">Mercury Room</p>
        </div>
        <div class="col-lg-4 col-12  text-white  fs-2 home-rooms">
          <p className="mt-40px d-flex justify-content-center">Uranus Room</p>
        </div>
      </div>

      <div>
        <About />
      </div>
      <div className="container mt-4 mb-5">
        <CardBox/>
      </div>

      <div>
        <R
      </div>
    </div>
  );
}

export default HomeStayHome;
