import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "../../Component/Rooms/Rooms.css";
import Footer from "../Footer";
import Header from "../Header";


function Rooms() {
  const [Rooms, setRooms] = useState([]);
   const navigate=useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/new/showroom")
      .then((res) => setRooms(res.data))

      .catch((err) => console.log(err));
  }, []);


 
  const handleClick = (item) => {
    navigate("/booknow", {
      state: {
          name: item.name,
          price: item.price,
        },
    });
  };


  const evenRooms =  Rooms.filter((room) => room % 2 === 0);
  const oddRooms = Rooms.filter((room) => room % 2 !== 0);
  
  console.log(Rooms, "gjhg");

  return (
    <>
      <Header />
      <form>
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
        
        </div>
        </div>
        {Rooms.length === 0 ? (
          <p>lo</p>
        ) : (
         
          Rooms.map((item) => (
            <div key={item.id}>
              <div className=" container stay ">
                <div className="row">
                  <div
                    className="col-12 col-lg-6 Mercury m-auto  "
                    data-aos="fade-right"
                  >
                    
                  <img className="mt-3"
                          src={`http://localhost:5000/${item.cover_img}`}
                          alt="loading"
                         width="100%"
                         height="70%"
                        />
                        </div>
                        <div 
                        className="col-12 col-lg-6 Mercury m-auto  "
                        data-aos="fade-right"
                        >
                    <h3 className=" htag">Room name:{item.name}</h3>
                    <p >
                      Description:{item.description}
                    </p>
                    <p>Bed:{item.beds}</p>
                    <p>
                      Adults:<span className="text-secondary"> 
                      {item.adults}
                      </span>
                    </p>
                    <p>Status:{item.status  === "yes" ? "Available" : "Unavailable"}</p>
                    <p>price:{item.price}</p>

                    <button type="submit" className="btn btn-white shadow btns"  onClick={() => handleClick(item)}>
                      
                      Book Now
                    </button>
                  </div>
                  {/* <div className="col-12 col-lg-6 roomb ">
                    <img
                      className="img-responsive invisible imgs m-auto"
                      src={require("../../images/rooma.jpg")}
                      alt=""
                      width="100%"
                    />
                  </div> */}
                </div>
              </div>
              
              
            </div>
          ))
          
        )}
  </form>
 
      <Footer />
    </>
  );
                
                } 
export default Rooms;
