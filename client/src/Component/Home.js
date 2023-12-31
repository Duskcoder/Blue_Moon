import React from "react";
// import { AboutUs } from "./AboutUs";
// import White1 from "../images/white1.jpg";
// import whitever from "../images/white eversest gold logo1.jpg";
// import white from "../images/white.jpg";
// import butha from "../images/butha.jpg";
// import reception from "../images/reception.jpg";
import kitchen from "../images/kitchen.jpg";
import Header from "./Header";
import reception2 from "../images/reception2.png";
import Footer from "./Footer";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { RiTwitterXLine } from "react-icons/ri";
import { About } from "./About/About";
import "../Component/Home.css";
import { useNavigate } from "react-router-dom";
import Saturn from "../images/Saturn.jpg";
import Uranus from "../images/Uranus.jpg";
import mercury from "../images/mercury.jpg";
import Neptune from "../images/Neptune.jpg";

function Home() {
  const navigate = useNavigate();
  const handleStyle={
    color: "white", position: "absolute", zIndex: "53", marginLeft: "100px", textDecoration: "underline" 
  }
  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <div className="home-bg  col-12 overflow-hidden">
          <div className="container position-relative home-text-center ">
            <div
              className="text-align-center col-lg-6 "
              style={{ background: "#17161670", width: "60%", top: "40px" }}
            >
              <div
                id="home-mobile"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h1 className="your text-white">YOUR HOME</h1>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1000">
                <h3 className="away " id="home-mobile-away">
                  Away
                </h3>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                id="home-mobile-from"
              >
                <h1 className="from text-white ">FROM HOME</h1>
              </div>
            </div>
          </div>
          <div className="container homes-text-center">
            <div
              className="col-lg-6 col-12 text-align-center justify-content m-auto "
              style={{ background: "#17161670", width: "50%", height: "100%" }}
            >
              <div data-aos="fade-right" data-aos-duration="1000">
                <h1 className="your text-white fs-2 mt-5 ">YOUR HOME</h1>
              </div>
              <div data-aos="zoom-in " data-aos-duration="1000">
                <h3 className="away fs-2">Away</h3>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <h1 className="from text-white fs-2">FROM HOME</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-evenly  mb-5  mt-5  room-booking">
          <div className="col-5 col-lg-3 m-auto">
            <div className="systembutton">
              <h4
                className=" justify-content-center d-flex font-family-hoz"
                style={{ color: "#0c617d" }}
              >
                Rooms
              </h4>

              <button
                className="mt-2 col-lg-4   mb-2 view font-family-hoz"
                onClick={() => navigate("/room")}
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                Book Now
              </button>
            </div>

            <div className="mobilebutton">
              <h4
                id="mobileheading"
                className=" justify-content-center d-flex font-family-hoz"
                style={{ color: "#0c617d" }}
              >
                Rooms
              </h4>

              <button
                className="mt-2 col-lg-4 mobileview    mb-2"
                id="font-family-hoz"
                onClick={() => navigate("/room")}
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="col-lg-4  col-12 text-white fs-2 ">

            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <p style={handleStyle} className="text-center UranusRooms">
                Mercury Rooms
              </p>
              <div class="carousel-inner ">
                <div class="carousel-item active">
                  <img src={Saturn} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Uranus} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={mercury} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Neptune} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>

            </div>

          </div>
          <div className="col-lg-4 col-12  text-white  fs-2 ">
            <div
              id="carouselExampleInterval"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <p style={handleStyle} className="text-center UranusRooms">
                Uranus Rooms
              </p>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={mercury} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={Saturn} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Neptune} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Uranus} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

          </div>
        </div>

        <div>
          <About />
        </div>
        <div className="container mt-4 mb-5">
          <div className="d-flex justify-content-center text-primary">
            {/* <h3>Amenities & Facilities</h3> */}
          </div>
          <div className="row mt-4">
            <div className="col-sm-12 col-lg-3 mb-3 mb-sm-0">
              <div className="card card-amen">
                <div className="card-image">
                  <img
                    className="img-butha"
                    src={require("../images/white1.jpg")}
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="card-body text-center">
                  <h4>Selfie Spot</h4>
                  <p className="card-text">
                    Cherish Each and every moment and make those moments
                    memorable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 mb-3 mb-sm-0">
              <div className="card card-amen">
                <div className="card-image">
                  <img
                    className="img-butha"
                    src={require("../images/champ.jpg")}
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="card-body text-center">
                  <h4>Camp Fire</h4>
                  <p className="card-text">
                    Gather wood, Build a fire, and Stay up all night with fire &
                    stars. The fire is the main comfort of the camp.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 mb-3 mb-sm-0">
              <div className="card card-amen">
                <div className="card-image">
                  <img
                    className="img-butha"
                    src={require("../images/white.jpg")}
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="card-body text-center">
                  <h4>Hut</h4>
                  <p className="card-text">
                    A space for solitude seekers peace lovers and nature lovers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 mb-3 mb-sm-0">
              <div className="card card-amen">
                <div className="card-image">
                  <img
                    className="image-responsive"
                    src={require("../images/butha.jpg")}
                    alt=""
                    width="100%"
                    height="230px"
                  />
                </div>
                <div className="card-body text-center">
                  <h4>Water Fountain</h4>
                  <p className="card-text">
                    A kind heart is a fountain of gladness, making everything in
                    its vicinity freshen into smiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <h2 className="trun mb-5 text-center ">
            <b>Blue moon bungalow gallery </b>
          </h2>
          <div className="row ">
            <div className="rooter col-12 col-lg-6  text-end mt-2">
              <img
                className="img-responsive"
                src={kitchen}
                alt=""
                width="70%"
              />
            </div>
            <div className="rooters col-12 col-lg-6 mt-5 mt-md-2">
              <img className="img-responsive" src={reception2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
