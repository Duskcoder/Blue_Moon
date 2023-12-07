<<<<<<< HEAD
import React from "react";
import "../CardBox/CardBox.css";
import Header1 from "../Header1";

function CardBox() {
  return (
    <>
      <div className="container mt-4">
        <img
          className="img-responsive"
          src={require("../../images/z.jpg.png")}
          alt=""
          width="100%"
          height="50%"
        />
        <div className="row d-flex justify-content-evenly">
          <div className="wrapper">
            <h2 className="htag">Gallery</h2>
            <div className="parent col-lg-3 col-md-12">
              <div className="child bg-one"></div>
=======
import React from 'react'


function CardBox() {
    return (
        <div className='container mt-4'>
            <h2></h2>
       <img className='img-responsive' id='amenities' src={require('../../images/z.jpg.png')} alt='' width="100%" height="50%" />
      
            <div className='row d-flex justify-content-evenly'>
                <div className='wrapper'>
                <h2 className='htag'>Gallery</h2>
                    <div className='parent col-lg-3 col-md-12'>
                        <div className='child bg-one'></div>
                    </div>
                    <div className='parent col-lg-3 col-md-12'>
                        <div className='child bg-two'></div>
                    </div>
                    <div className='parent col-lg-3 col-md-12'>
                        <div className='child bg-three'></div>
                    </div>
                </div>
>>>>>>> ea06272a7f4ea6ddd791cd5dd8623612fdd609f7
            </div>
            <div className="parent col-lg-3 col-md-12">
              <div className="child bg-two"></div>
            </div>
            <div className="parent col-lg-3 col-md-12">
              <div className="child bg-three"></div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-evenly">
          <div className="wrapper">
            <div className="parents col-lg-3 col-md-12">
              <div className="child bg-four"></div>
            </div>
            <div className="parents0 col-lg-3 col-md-12">
              <div className="child bg-five"></div>
            </div>
            <div className="parents1 col-lg-3 col-md-12">
              <div className="child bg-six"></div>
            </div>
          </div>
        </div>

        <div className="row  d-flex justify-content-evenly">
          <div className="wrapper">
            <div className="parentr col-lg-3 col-md-12">
              <div className="child bg-seven"></div>
            </div>
            <div className="parentr0 col-lg-3 col-md-12">
              <div className="child bg-eight"></div>
            </div>
            <div className="parentr1 col-lg-3 col-md-12">
              <div className="child bg-nine"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardBox;
