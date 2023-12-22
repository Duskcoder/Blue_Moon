import React, { createContext } from "react";
import { useState } from "react";
import '../Rooms/Room.css'

import Header from "../Header";
import { Modal, Button } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import Footer from "../Footer";
import { useNavigate, Link } from 'react-router-dom'


export const Mark = createContext(null);
function Rooms() {
  const [Rooms, setRooms] = useState([]);
  const navigate = useNavigate()

  // const handleClose = () => setShowModal(false);
  // const [currentpage, setCurrentPage] = useState(1);
  // const recordsPerPage = 10;
  // const firstIndex = (currentpage - 1) * recordsPerPage;
  // const lastIndex = currentpage * recordsPerPage;

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/new/showroom")
  //     .then((res) => {
  //       setRooms(res.data)


  //     })

  //     .catch((err) => console.log(err));
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/new/showroom");
        const details = await res.data
        setRooms(details)
      } catch (err) {
        console.error('Error fetching data:', err);

      }
    };

    fetchData();
  }, []);

  console.log(Rooms)


  const handleShow = (id) => {
    navigate(`/booknow/${id}`);
  };


  // const whatsappLink = 
  //   "https://api.whatsapp.com/message/LZP5RQYXTGMHM1?autoload=1&app_absent=0";
  const details = Rooms.slice(0, 1)
  const details1 = Rooms.slice(1, 2)
  const details2 = Rooms.slice(3, 4);
  const details3 = Rooms.slice(4, 5);
  const details4 = Rooms.slice(5, 6);




  return (
    <>

      <Header />
      <form>
        <div className="overflow-hidden">
          <div className="systemRoom">
            <div className="head  ">
              <div className="room col-6 col-lg-6  htagsMob mx-5 px-4">
                <h1 className="text-white htagr ">Rooms</h1>
                <p className="ptag text-white">
                  If you are looking for a home away from home, just walk in
                  here.
                  <br /> You can get both, an incredible and relaxing experience
                  while you are on a holiday
                </p>
              </div>
              <div className="container stay mt-5">
                <div className="row">
                  <div className="col-sm-12 come">
                    <h3 className="htag">Come & Stay with Us</h3>
                    <p className="ptag">
                      Pick any of our rooms to experience the delightful decor,
                      complemented with modern amenties for a comfortable stay
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                {
                  details.map((item) => (
                    <div>
                      <div className=" container stay mt-5">
                        <div className="row">

                          <div className="col-12 col-lg-6 Jupiter ">
                            <img
                              className=" invisible imgs m-auto"
                              src={require("../../images/rooma.jpg")}
                              alt=""
                              width="100%"
                            />
                          </div>
                          <div
                            className="col-12 col-lg-6 jupiter m-auto  "
                            data-aos="fade-up"
                          >
                            <h3 className=" htag">{item.name}</h3>
                            <p className="ptag ">
                              {/* Queen Beds(2) Bathtub with hand shower free WIFI and Tower Cupboard table, and chair water bottles */}
                              {item.description}
                            </p>
                            <p>
                              {/* Beds: 2 Queen(s) */}
                              {item.beds}
                            </p>
                            <p>
                              Adults:<span className="text-secondary">{item.adults} </span>
                            </p>
                            {/* <Link to={`/booknow/${encodeURIComponent(item.name)}`}> */}
                            <Button variant="primary" onClick={() => handleShow(item.id)}>
                              Book Now
                            </Button>
                            {/* </Link> */}


                          </div>
                        </div>
                      </div>

                    </div>
                  ))
                }
                {
                  details1.map((items) => (
                    <div className=" container stay ">
                      <div className="row">
                        <div
                          className="col-12 col-lg-6 saturn m-auto  "
                          data-aos="fade-up"
                        >
                          <h3 className="htag ">
                            {items.name}
                          </h3>
                          <p className="ptag">
                            {/* The Love Nest room has all you need for the perfect romantic  getaway weekend{" "} */}
                            {items.description}
                          </p>

                          <div className="dataMob">
                            <p>Beds: {items.beds}</p>
                            <p className="mx-5"> BedRoom: {items.restrooms}</p>

                            <p>
                              Adults:<span className="text-secondary"> {items.adults}</span>
                            </p>
                            <p className="mx-"></p>
                          </div>

                          <table className="dataSys">
                            <tr>
                              <td>
                                <p> Beds: {items.beds}</p>{" "}
                              </td>
                              <td>
                                {" "}
                                <p className="mx-5"> Bathtub: {items.bathtub}</p>
                              </td>
                              <td>
                                {" "}

                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>
                                  Adults:<span className="text-secondary"> {items.adults}</span>
                                </p>
                              </td>

                            </tr>
                          </table>

                          <Button variant="primary" onClick={() => handleShow(items.id)}>
                            Book Now
                          </Button>


                        </div>

                        <div className="col-12 col-lg-6 Saturn   ">
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
                  details.map((itemss) => (
                    <div className=" container stay ">
                      <div className="row">
                        <div className="col-12 col-lg-6 Uranus ">
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
                          <h3 className="htag ">
                            {itemss.name}
                          </h3>
                          <p className="ptag">
                            {/* The family room provides the warmth, cleanliness, and extra space your family need for a  perfect holiday experience. Free WIFI. */}
                            {itemss.description}
                          </p>

                          <div className="dataMob">
                            <p>Beds: {itemss.beds}</p>

                            <p>
                              Adults:<span className="text-secondary"> {itemss.adults}</span>
                            </p>

                          </div>

                          <table className="dataSys">
                            <tr>
                              <td>
                                <p> Beds: {itemss.beds}</p>{" "}
                              </td>
                              <td>
                                {" "}

                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>
                                  Adults:<span className="text-secondary"> {itemss.adults}</span>
                                </p>
                              </td>
                              <td>
                                {" "}

                              </td>
                            </tr>
                          </table>

                          <Button variant="primary" onClick={() => handleShow(itemss.id)}>
                            Book Now
                          </Button>
                        </div>

                      </div>
                    </div>
                  ))
                }
                {
                  details2.map((items) => (
                    <div className=" container stay " key={items.id}>
                      <div className="row">
                        <div
                          className="col-12 col-lg-6 saturn m-auto  "
                          data-aos="fade-up"
                        >
                          <h3 className="htag ">
                            {/* Saturn Room */}
                            {items.name}
                          </h3>
                          <p className="ptag">
                            {/* The Love Nest room has all you need for the perfect romantic  getaway weekend{" "} */}
                            {items.description}
                          </p>

                          <div className="dataMob">
                            <p>
                              Beds: {items.beds}
                              1 Queen(s)
                            </p>
                            {/* <p className="mx-5"> BedRoom: 1</p> */}

                            <p>
                              Adults:<span className="text-secondary"> {items.adults}</span>
                            </p>
                            <p className="mx-"></p>
                          </div>

                          <table className="dataSys">
                            <tr>
                              <td>
                                <p> Beds: {items.beds}</p>{" "}
                              </td>
                              <td>
                                {" "}
                                <p className="mx-5"> Bathtub: {items.bathtub}</p>
                              </td>
                              <td>
                                {" "}

                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>
                                  Adults:<span className="text-secondary"> {items.adults}</span>
                                </p>
                              </td>

                            </tr>
                          </table>

                          <Button variant="primary" onClick={() => handleShow(items.id)}>
                            Book Now
                          </Button>


                        </div>

                        <div className="col-12 col-lg-6 Saturn   ">
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
                  details3.map((item) => (
                    <div className=" container stay ">
                      <div className="row">
                        <div className="col-12 col-lg-6 Uranus ">
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
                          <h3 className="htag ">
                            {/* Uranus Room */}
                            {item.name}
                          </h3>
                          <p className="ptag">
                            {/* The family room provides the warmth, cleanliness, and extra space your family need for a  perfect holiday experience. Free WIFI. */}
                            {item.description}
                          </p>

                          <div className="dataMob">
                            <p>Beds: {item.beds}</p>

                            <p>
                              Adults:<span className="text-secondary"> {item.adults}</span>
                            </p>

                          </div>

                          <table className="dataSys">
                            <tr>
                              <td>
                                <p> Beds: {item.beds}</p>{" "}
                              </td>
                              <td>
                                {" "}

                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>
                                  Adults:<span className="text-secondary"> {item.adults}</span>
                                </p>
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
                  details4.map((items) => (
                    <div className=" container stay ">
                      <div className="row">
                        <div
                          className="col-12 col-lg-6 saturn m-auto  "
                          data-aos="fade-up"
                        >
                          <h3 className="htag ">
                            {/* Saturn Room */}
                            {items.name}
                          </h3>
                          <p className="ptag">
                            {/* The Love Nest room has all you need for the perfect romantic  getaway weekend{" "} */}
                            {items.description}
                          </p>

                          <div className="dataMob">
                            <p>
                              Beds: {items.beds}
                              1 Queen(s)
                            </p>
                            {/* <p className="mx-5"> BedRoom: 1</p> */}

                            <p>
                              Adults:<span className="text-secondary"> {items.adults}</span>
                            </p>
                            <p className="mx-"></p>
                          </div>

                          <table className="dataSys">
                            <tr>
                              <td>
                                <p> Beds: {items.beds}</p>{" "}
                              </td>
                              <td>
                                {" "}
                                <p className="mx-5"> Bathtub: {items.bathtub}</p>
                              </td>
                              <td>
                                {" "}

                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>
                                  Adults:<span className="text-secondary"> {items.adults}</span>
                                </p>
                              </td>

                            </tr>
                          </table>

                          <Button variant="primary" onClick={() => handleShow(items.id)}>
                            Book Now
                          </Button>


                        </div>

                        <div className="col-12 col-lg-6 Saturn   ">
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
              </div>
            </div>

          </div >
        </div >
      </form >
      <Footer />
    </>

  );
}
export default Rooms;