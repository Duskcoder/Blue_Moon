import React from 'react';
import { AboutUs } from "../AboutUs";
import white1 from "../../images/white1.jpg";
import champ from "../../images/champ.jpg";
import white from "../../images/white.jpg";
import butha from "../../images/butha.jpg";
import kitchen from "../../images/kitchen.jpg";
import reception from "../../images/reception.jpg";




function HomeStayHome() {
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
      <AboutUs />
    </div>
    <div className="container mt-4 mb-5">
      <div className="d-flex justify-content-center text-primary">
        {/* <h3>Amenities & Facilities</h3> */}
      </div>
      <div class="row mt-4">
        <div class="col-sm-12 col-lg-3 mb-3 mb-sm-0">
          <div class="card card-amen">
            <div className="card-image">
              <img
                className="img-butha"
                src={white1}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
            <div class="card-body text-center">
              <h4>Selfie Spot</h4>
              <p class="card-text">
                Cherish Each and every moment and make those moments
                memorable.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 mb-3 mb-sm-0">
          <div class="card card-amen">
            <div className="card-image">
              <img
                className="img-butha"
                src={champ}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
            <div class="card-body text-center">
              <h4>Camp Fire</h4>
              <p class="card-text">
                Gather wood, Build a fire, and Stay up all night with fire &
                stars. The fire is the main comfort of the camp.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 mb-3 mb-sm-0">
          <div class="card card-amen">
            <div className="card-image">
              <img
                className="img-butha"
                src={white}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
            <div class="card-body text-center">
              <h4>Hut</h4>
              <p class="card-text">
                A space for solitude seekers peace lovers and nature lovers.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 mb-3 mb-sm-0">
          <div class="card card-amen">
            <div className="card-image">
              <img
                className="image-responsive"
                src={require("../images/butha.jpg")}
                alt=""
                width="100%"
                height="195px"
              />
            </div>
            <div class="card-body text-center">
              <h4>Water Fountain</h4>
              <p class="card-text">
                A kind heart is a fountain of gladness, making everything in
                its vicinity freshen into smiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <h2 className="trun mb-5 text-center text-info">
        <b>Blue moon bungalow gallery </b>
      </h2>
      <div className="row ">
        <div className="rooter col-12 col-lg-6  text-end mt-2">
          <img
            className="img-responsive"
            // src={kitchen}
            alt=""
            width="70%"
            height="60%"
          />
        </div>
        <div className="rooters col-12 col-lg-6 mt-5 mt-md-2">
          <img
            className="img-responsive"
            // src={reception}
            alt=""
            width="70%"
            height="60%"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeStayHome