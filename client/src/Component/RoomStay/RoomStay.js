import React, { useEffect, useState } from "react";
import '../RoomStay/RoomStay.css'

import Header1 from "../Header1";
import {  Button } from "react-bootstrap";
import Footer1 from "../HomeStay/Footer1";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RoomStay() {

  const [Rooms, setRooms] = useState([]);
  const navigate = useNavigate()

  // console.log(Rooms, "balaguru")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/homestay/showrooms");
        const details = await res.data
        setRooms(details)
      } catch (err) {
        console.error('Error fetching data:', err);

      }
    };

    fetchData();
  }, []);

  // console.log(Rooms)


  const handleShow = (id) => {
    navigate(`/HomeStayBooking/${id}`);
  };
  // const whatsappLink = " https://wa.me/message/JYC7L3YOFWSUN1";


  //this slice is system design data's
  const details = Rooms.slice(0, 1)
  const details1 = Rooms.slice(1, 2)
  const details2 = Rooms.slice(2, 3);
  const details3 = Rooms.slice(3, 4);
  const details4 = Rooms.slice(4, 5);

  // console.log(details4, "dfghjk")
  // console.log(details, "stay system")

  //this slice is mobile design data's
  const mobileview = Rooms.slice(0, 1)
  const mobileview1 = Rooms.slice(1, 2)
  const mobileview2 = Rooms.slice(2, 3);
  const mobileview3 = Rooms.slice(3, 4);
  const mobileview4 = Rooms.slice(4, 5);
  // console.log(mobileview, "stay mobile")

  return (
    <>
      <Header1 />
      <div className="overflow-hidden">
        <div className="systemSys">
          <div className="head1  ">
            <div className="rooms pt-5 col-12 col-lg-6 htagsMob mx-auto ">
              <h1 className="text-white htagr text-center pt-5">HomeStay</h1>
              <h1 className="text-white htagr text-center">Rooms</h1>
            </div>

          </div>
          <div className="container  stay mt-5">
            <div className="row">
              <div className="col-sm-12 come">
                <h3 className="htag">Come & Stay with Us</h3>
                <p className="ptag">
                  Pick any of our rooms to experience the delightful decor,
                  complemented with modern amenties for a comfortable stay
                </p>
              </div>
            </div>
            <div >
              {
                details.map((item) => (
                  <div>
                    <div className=" container stay mt-5">
                      <div className="row">

                        <div className="col-12 col-lg-6 rooma ">
                          <img
                            className="img-responsive invisible imgs m-auto"
                            src={require("../../images/rooma.jpg")}
                            alt=""
                            width="100%"
                          />
                        </div>
                        <div
                          className="col-12 col-lg-6  m-auto  "
                          data-aos="fade-up"
                        >
                          <h3 className=" htag">{item.name}</h3>
                          <p className="ptag">
                            {/* Designed for comfort and convenience,the Comfort Room spares
                            no expense */}
                            {item.description}
                          </p>
                          <p>Beds: {item.beds}</p>
                          <p>
                            Adults:<span className="text-secondary">{item.adults}</span>
                          </p>

                          <Button variant="primary" onClick={() => handleShow(item.id)}>
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
              {
                details1.map((item) => (
                  <div className=" container stay  ">
                    <div className="row">
                      <div
                        className="col-12 col-lg-6  m-auto  "
                        data-aos="fade-up"
                      >
                        <h3 className=" htag">{item.name}</h3>
                        <p className="ptag">
                          {item.description}
                        </p>
                        <p>Beds: {item.beds}</p>
                        <p>
                          Adults:<span className="text-secondary">{item.adults}</span>
                        </p>

                        <Button variant="primary" onClick={() => handleShow(item.id)}>
                          Book Now
                        </Button>

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
                ))
              }
              {
                details2.map((item) => (
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
                      <div className="col-12 col-lg-6 mars m-auto  " data-aos="fade-up">
                        <h3 className=" htag">{item.name}</h3>
                        <p className="ptag">
                          {item.description}
                        </p>
                        <p>Beds: {item.beds}</p>

                        <p>
                          Adults:<span className="text-secondary">{item.adults}</span>
                        </p>

                        <Button variant="primary" onClick={() => handleShow(item.id)}>
                          Book Now
                        </Button>


                      </div>
                    </div>
                  </div>
                ))
              }

              {
                details3.map((item) => (
                  <div className=" container stay ">
                    <div className="row">
                      <div
                        className="col-12 col-lg-6  m-auto   "
                        data-aos="fade-up"
                      >
                        <h3 className="htag ">{item.name}</h3>
                        <p className="ptag">
                          {item.description}
                        </p>

                        <div className="dataMob">
                          <p>Beds:{item.bathtub}</p>
                          <p className=""> BedRoom:{item.bed}</p>
                          <p>Hall: 1</p>
                          <p>
                            Adults:<span className="text-secondary">{item.adults}</span>
                          </p>
                          <p className="mx-">Dining Space: 1</p>
                        </div>

                        <table className="dataSys">
                          <tr>
                            <td>
                              <p> Beds: {item.beds}</p>{" "}
                            </td>
                            <td>
                              {" "}
                              <p className="mx-5"> BedRoom: 2</p>
                            </td>
                            <td>
                              {" "}
                              <p>Hall: 1</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                Adults:<span className="text-secondary">{item.adults} </span>
                              </p>
                            </td>
                            <td>
                              {" "}
                              <p className="mx-5">Dining Space: 1</p>
                            </td>
                          </tr>
                        </table>

                        <Button variant="primary" onClick={() => handleShow(item.id)}>
                          Book Now
                        </Button>
                      </div>

                      <div className="col-12 col-lg-6 roomd   ">
                        <img
                          className="img-responsive invisible imgs  "
                          src={require("../../images/rooma.jpg")}
                          alt=""
                          width="100%"
                        />
                      </div>
                    </div>
                  </div>
                ))
              }
              {
                details4.map((item) => (
                  <div className=" container stay ">
                    <div className="row">
                      <div className="col-12 col-lg-6 roomx ">
                        <img
                          className="img-responsive invisible imgs  "
                          src={require("../../images/rooma.jpg")}
                          alt=""
                          width="100%"
                        />
                      </div>
                      <div
                        className="col-12 col-lg-6 saturn m-auto  "
                        data-aos="fade-up"
                      >
                        <h3 className="htag ">{item.name}</h3>
                        <p className="ptag">
                          {item.description}
                        </p>

                        <div className="dataMob">
                          <p>Beds: {item.bathtub}</p>
                          <p className="mx-5"> BedRoom:{item.beds}</p>
                          <p>Hall: 1</p>
                          <p>
                            Adults:<span className="text-secondary"> {item.adults}</span>
                          </p>
                          <p className="mx-">Dining Space: 1</p>
                        </div>

                        <table className="dataSys">
                          <tr>
                            <td>
                              <p> Beds: {item.bathtub}</p>{" "}
                            </td>
                            <td>
                              {" "}
                              <p className="mx-5"> BedRoom:{item.beds}</p>
                            </td>
                            <td>
                              {" "}
                              <p>Hall: 1</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                Adults:<span className="text-secondary">{item.adults}</span>
                              </p>
                            </td>
                            <td>
                              {" "}
                              <p className="mx-5">Dining Space: 1</p>
                            </td>
                          </tr>
                        </table>

                        <Button variant="primary" onClick={() => handleShow(item.id)}>
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="mobsys">
          <div className="head  ">
            <div className="room col-12 col-lg-12 htagsMob mx-5 px-4">
              <h1 className="text-white htagr ">Rooms</h1>
              <p className="ptag text-white">
                If you are looking for a home away from home, just walk in
                here.
                <br /> You can get both, an incredible and relaxing experience
                while you are on a holiday
              </p>
            </div>
          </div>
          {
            mobileview.map((item) => (
              <div className=" container stay mt-5" key={item.id}>
                <div className="row">

                  <div className="col-12 col-lg-6 rooma ">
                    <img
                      className="img-responsive invisible imgs m-auto"
                      src={require("../../images/rooma.jpg")}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div
                    className="col-12 col-lg-6  m-auto  "
                    data-aos="fade-up"
                  >
                    <h3 className=" htag">{item.name}</h3>
                    <p className="ptag">
                      {item.description}
                    </p>
                    <p>Beds: {item.beds}</p>
                    <p>
                      Adults:<span className="text-secondary">{item.adults}</span>
                    </p>

                    <Button variant="primary" onClick={() => handleShow(item.id)}>
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))
          }

          {
            mobileview1.map((item) => (
              <div className=" container stay" key={item.id}>
                <div className="row">
                  <div className="col-12 col-lg-6 roomb mt-3">
                    <img
                      className="img-responsive invisible imgs m-auto"
                      src={require("../../images/rooma.jpg")}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div
                    className="col-12 col-lg-6  m-auto   "
                    data-aos="fade-up"
                  >
                    <h3 className=" htag">{item.name}</h3>
                    <p className="ptag">
                      {item.description}
                    </p>
                    <p>Beds: {item.beds}</p>
                    <p>
                      Adults:<span className="text-secondary">{item.adults}</span>
                    </p>

                    <Button variant="primary" onClick={() => handleShow(item.id)}>
                      Book Now
                    </Button>
                  </div>

                </div>
              </div>
            ))
          }

          {
            mobileview2.map((item) => (
              <div className=" container stay " key={item.id}>
                <div className="row">
                  <div className="col-12 col-lg-6 roomc mt-3 ">
                    <img
                      className="img-responsive invisible imgs "
                      src={require("../../images/rooma.jpg")}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div className="col-12 col-lg-6 mars m-auto  " data-aos="fade-up">
                    <h3 className=" htag">{item.name}</h3>
                    <p className="ptag">
                      {item.description}
                    </p>
                    <p>Beds:{item.beds}</p>

                    <p>
                      Adults:<span className="text-secondary">{item.adults}</span>
                    </p>

                    <Button variant="primary" onClick={() => handleShow(item.id)}>
                      Book Now
                    </Button>


                  </div>
                </div>
              </div>
            ))
          }

          {
            mobileview3.map((item) => (
              <div className=" container stay " key={item.id}>
                <div className="row">

                  <div className="col-12 col-lg-6 roomd   mt-3">
                    <img
                      className="img-responsive invisible imgs  "
                      src={require("../../images/rooma.jpg")}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div
                    className="col-12 col-lg-6  m-auto   "
                    data-aos="fade-up"
                  >
                    <h3 className="htag ">{item.name}</h3>
                    <p className="ptag">
                      {item.description}
                    </p>

                    <div className="dataMob">
                      <p>Beds:{item.beds}</p>
                      <p className=""> BedRoom: 2</p>
                      <p>Hall: 1</p>
                      <p>
                        Adults:<span className="text-secondary">{item.adults}</span>
                      </p>
                      <p className="mx-">Dining Space: 1</p>
                    </div>

                    <table className="dataSys">
                      <tr>
                        <td>
                          <p> Beds: {item.beds}</p>{" "}
                        </td>
                        <td>
                          {" "}
                          <p className="mx-5"> BedRoom: 2</p>
                        </td>
                        <td>
                          {" "}
                          <p>Hall: 1</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            Adults:<span className="text-secondary">{item.adults}</span>
                          </p>
                        </td>
                        <td>
                          {" "}
                          <p className="mx-5">Dining Space: 1</p>
                        </td>
                      </tr>
                    </table>

                    <Button variant="primary" onClick={() => handleShow(item.id)}>
                      Book Now
                    </Button>
                  </div>

                </div>
              </div>
            ))
          }

          {
            mobileview4.map((item) => (
              <div className=" container stay " key={item.id}>
                <div className="row">
                  <div className="col-12 col-lg-6 roomx mt-3 ">
                    <img
                      className="img-responsive invisible imgs  "
                      src={require("../../images/rooma.jpg")}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div
                    className="col-12 col-lg-6 saturn m-auto  "
                    data-aos="fade-up"
                  >
                    <h3 className="htag ">{item.name}</h3>
                    <p className="ptag">
                      {item.description}
                    </p>

                    <div className="dataMob">
                      <p>Beds: {item.beds}</p>
                      <p className="mx-5"> BedRoom: 2</p>
                      <p>Hall: 1</p>
                      <p>
                        Adults:<span className="text-secondary">{item.adults}</span>
                      </p>
                      <p className="mx-">Dining Space: 1</p>
                    </div>

                    <table className="dataSys">
                      <tr>
                        <td>
                          <p> Beds: {item.beds}</p>
                        </td>
                        <td>
                          {" "}
                          <p className="mx-5"> BedRoom: 2</p>
                        </td>
                        <td>
                          {" "}
                          <p>Hall: 1</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            Adults:<span className="text-secondary"> {item.adults}</span>
                          </p>
                        </td>
                        <td>
                          {" "}
                          <p className="mx-5">Dining Space: 1</p>
                        </td>
                      </tr>
                    </table>

                    <Button variant="primary" onClick={() => handleShow(item.id)}>
                      Book Now
                    </Button>


                  </div>
                </div>
              </div>

            ))
          }
        </div>
      </div >
      <Footer1 />
    </>
  );
}

export default RoomStay;
