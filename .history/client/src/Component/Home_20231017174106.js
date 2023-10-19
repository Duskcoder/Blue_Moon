import React from "react";
import { AboutUs } from "./AboutUs";
import White1 from "../images/white1.jpg";
import whitever from "../images/white eversest gold logo1.jpg";
import white from "../images/white.jpg";
import putha from ""

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
      <div className="container mt-4">
        <div className="d-flex justify-content-center text-primary">
          <h3>Amenities & Facilities</h3>
        </div>
        <div class="row">
          <div class="col-sm-3 mb-3 mb-sm-0">
            <div class="card">
            <img src={White1} alt="" />
              <div class="card-body">
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
              <img src={whitever} alt=""/>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mb-3 mb-sm-0">
            <div class="card">
            <img src={white} alt=""/>
              <div class="card-body">
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mb-3 mb-sm-0">
            <div class="card">
            <img/>
              <div class="card-body">
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
