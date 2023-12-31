import React from "react";
import Header1 from "../Header1";
import Footer1 from "../HomeStay/Footer1";

function Gallery1() {
  return (
    <>
      <Header1 />
      <div className="container ">
        <img
          className="img-responsive mt-5"
          src={require("../../images/z.jpg.png")}
          alt=""
          width="100%"
          height="50%"
        />
        <div className="row d-flex justify-content-evenly">
          <div className="wrapper">
            <h2 className="htag">Gallery</h2>
            <div className="parent col-lg-3 col-md-12 mt-4">
              <div className="child bg-one"></div>
            </div>
            <div className="parent col-lg-3 col-md-12 mt-4">
              <div className="child bg-two"></div>
            </div>
            <div className="parent col-lg-3 col-md-12 mt-4">
              <div className="child bg-three"></div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-evenly">
          <div className="wrapper">
            <div className="parents col-lg-3 col-md-12 mt-4">
              <div className="child bg-four"></div>
            </div>
            <div className="parents0 col-lg-3 col-md-12 mt-4">
              <div className="child bg-five"></div>
            </div>
            <div className="parents1 col-lg-3 col-md-12 mt-4">
              <div className="child bg-six"></div>
            </div>
          </div>
        </div>

        <div className="row  d-flex justify-content-evenly">
          <div className="wrapper">
            <div className="parentr col-lg-3 col-md-12 mt-4">
              <div className="child bg-seven"></div>
            </div>
            <div className="parentr0 col-lg-3 col-md-12 mt-4">
              <div className="child bg-eight"></div>
            </div>
            <div className="parentr1 col-lg-3 col-md-12 mt-4">
              <div className="child bg-nine"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}

export default Gallery1;
