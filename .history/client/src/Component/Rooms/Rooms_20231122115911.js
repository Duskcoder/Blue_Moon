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

  const evenRooms = Rooms.filter((room) => room % 2 === 0);
  const oddRooms = Rooms.filter((room) => room % 2 !== 0);

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
       <div>
        
       </div>
          {oddRooms.map((item, index) => (
            <div key={index}>
              <div className=" container stay mt-5">
                <div className="row">
                  <div
                    className="col-12 col-lg-6 Mercury m-auto  "
                    data-aos="fade-right"
                  >
                    <h3 className=" htag">{item.name}</h3>
                    <p className="ptags">
                      {item.description}
                    </p>
                    <p>{item.beds}</p>
                    <p>
                      Adults:<span className="text-secondary"> 
                      {item.adults}
                      </span>
                    </p>

                    <button className="btn btn-white shadow btns">
                      
                      Book Now
                    </button>
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
              
            </div>
          ))}
        
      </div>
      <Footer />
    </>
  );
}

export default Rooms;
