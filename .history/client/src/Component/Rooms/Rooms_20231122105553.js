import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "../../Component/Rooms/Rooms.css";
import Footer from "../Footer";
import Header from "../Header";

function Rooms() {
  const [Rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/new/showroom")
      .then((res) => setRooms(res.data))

      .catch((err) => console.log(err));
  }, []);
  console.log(Rooms, "gjhg");

  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <div className="head  ">
          <div className="room col-6 col-lg-12 htagsMob mx-5   ">
            <h1 className="text-white htagr">Rooms</h1>
            <p className="ptag text-white">
              If you are looking for a home away from home, just walk in here.
              <br /> You can get both, an incredible and relaxing experience
              while you are on a holiday
            </p>
          </div>
          <div className="room col-6 col-lg-12 htags pt-5 mx-5  ">
            <h1 className="text-white htags  ">Rooms</h1>
            <p className="ptag text-white">
              If you are looking for a home away from home, just walk in here.
              <br /> You can get both, an incredible and relaxing experience
              while you are on a holiday
            </p>
          </div>
        </div>
        {Rooms.length === 0?()}

        



        <div className=" container stay ">
          <div className="row">
            <div
              className="col-12 col-lg-6 Mercury m-auto  "
              data-aos="fade-right"
            >
              <h3 className=" htag">Mercury Room</h3>
              <p className="ptags">
                Queen Beds(2) Bathtub with hand shower Cupboard,table, and Chair
                Free towels free WIFI facility{" "}
              </p>
              <p>Beds: 2 Queen(s)</p>
              <p>
                Adults:<span className="text-secondary"> 6</span>
              </p>

              <button className="btn btn-white shadow btns"> Book Now</button>
            </div>
            <div className="col-12 col-lg-6 roomb ">
              <img
                className="img-responsive invisible imgs m-auto"
                src={require("../../images/rooma.jpg")}
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
        <div className=" container stay ">
          <div className="row">
            <div className="col-12 col-lg-6 roomc ">
              <img
                className="img-responsive invisible imgs "
                src={require("../../images/rooma.jpg")}
                alt=""
                width="100%"
              />
            </div>
            <div className="col-12 col-lg-6 mars m-auto  " data-aos="fade-left">
              <h3 className=" htag">Mars Room</h3>
              <p className="ptags">
                Free WIFI Guests also enjoy premier modern amenties such as
                high-speed Internet, flat screen TV, and In-rooms. Cupboard
                table with chair
              </p>
              <p>Beds: 2 Queen(s)</p>
              <p>Restroom :N/A</p>
              <p>
                Adults:<span className="text-secondary"> 4</span>
              </p>

              <button className="btn btn-white shadow btns"> Book Now</button>
            </div>
          </div>
        </div>
        <div className=" container stay ">
          <div className="row">
            <div
              className="col-12 col-lg-6 saturn m-auto  "
              data-aos="fade-right"
            >
              <h3 className="htag ">Saturn Room</h3>
              <p className="ptags">
                The Love Nest room has all you need for the perfect romantic
                getaway weekend Beds: 1 Queen(s)
              </p>
              <p>Bathtub :N/A</p>
              <p>
                Adults:<span className="text-secondary"> 2</span>
              </p>

              <button className="btn btn-white shadow btns"> Book Now</button>
            </div>

            <div className="col-12 col-lg-6 roomd ">
              <img
                className="img-responsive invisible imgs  "
                src={require("../../images/rooma.jpg")}
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
        <div className=" container stay ">
          <div className="row">
            <div className="col-12 col-lg-6 roome ">
              <img
                className="img-responsive invisible imgs "
                src={require("../../images/rooma.jpg")}
                alt=""
                width="100%"
              />
            </div>

            <div
              className="col-12 col-lg-6 saturn m-auto   "
              data-aos="fade-left"
            >
              <h3 className="htag ">Uranus Room</h3>
              <p className="ptags">
                The Family room provides the warmth, cleanliness, and extra
                space your family needs for a perfect holiday experience. Free
                WIFI
              </p>

              <p> Beds: 2 Queen(s)</p>

              <p>
                {" "}
                Adults:<span className="text-secondary"> 2</span>
              </p>

              <button className="btn btn-white shadow btns"> Book Now</button>
            </div>
          </div>
        </div>

        <div className=" container stay ">
          <div className="row">
            <div
              className="col-12 col-lg-6 saturn m-auto   "
              data-aos="fade-right"
            >
              <h3 className="htag ">Neptune Room</h3>
              <p className="ptags">
                Designed for comfort and convenience, the Comfort Room spares no
                expense
              </p>

              <p> Beds: 2 Queen(s)</p>

              <p>
                {" "}
                Adults:<span className="text-secondary"> 4</span>
              </p>

              <button className="btn btn-white shadow btns"> Book Now</button>
            </div>
            <div className="col-12 col-lg-6 roomf ">
              <img
                className="img-responsive invisible imgs "
                src={require("../../images/rooma.jpg")}
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Rooms;
