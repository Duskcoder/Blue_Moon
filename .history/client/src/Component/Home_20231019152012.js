import React from "react";
import { AboutUs } from "./AboutUs";
import White1 from "../images/white1.jpg";
import whitever from "../images/white eversest gold logo1.jpg";
import white from "../images/white.jpg";
import butha from "../images/butha.jpg";

function Home() {
  return (
    <div style={{border:'1px solid black'}}>
      <div className="home-bg " >
      
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
        <div class="col-3 d-flex flex-direction-column text-center  pt-5 ">
          <div className="  fflot-inlineend ">
            <div className="">
              <h4 className="ms-4 ">Rooms</h4>
            </div>
             <div>
              <button className="mt-4">View ALL</button>
            </div>
          </div>
        </div>
        <div class="col-lg-3   text-white fs-2    home-room">
          <p className="mt-40px d-flex justify-content-center">Mercury Room</p>
        </div>
        <div class="col-lg-3  text-white  fs-2 home-rooms">
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
                <img src={whitever} alt="" width={250}/>
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
              <img src={white} alt="" />
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
              <img src={butha} alt="" />
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
