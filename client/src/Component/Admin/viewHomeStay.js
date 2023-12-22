import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../Component/Rooms/Rooms.css";

function ViewHomeStay() {
  const [room, setRoom] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/homestay/showrooms/${id}`)
      .then((res) => setRoom(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <form>
        <div className="overflow-hidden">
          {/* <div className="head  "> */}
            <div className="room col-6 col-lg-12 htagsMob mx-5   ">
              <h1 className="text-white htagr">Rooms</h1>
            </div>
          {/* </div> */}
        </div>

        <div key={room.id} className="container stay mt-5 ">
          <div className="row">
            <div className="col-12 col-lg-6 Mercury m-auto" data-aos="fade-right">
              <img
                className="mt-3"
                src={`http://localhost:5000/${room.cover_img}`}
                alt="loading"
                width="50%"
                height="70%"
              />
            </div>
            <div className="col-12 col-lg-6 Mercury m-auto" data-aos="fade-right">
              <h3 className="htag">Room name: {room.name}</h3>
              <p>Description: {room.description}</p>
              <p>Bed: {room.beds}</p>
              <p>
                Adults:
                <span className="text-secondary">{room.adults}</span>
              </p>
              <p>Status: {room.status === "yes" ? "Available" : "Unavailable"}</p>
              <p>Price: {room.price}</p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ViewHomeStay;
