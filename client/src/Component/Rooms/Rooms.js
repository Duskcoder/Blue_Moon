import React from "react";
import { useState } from "react";
// import '../RoomStay/RoomStay.css'
import '../Rooms/Room.css'
// import axios from "axios";

// import { Navigate, useNavigate } from "react-router-dom";

import Footer from "../Footer";


import Header from "../Header";
import { Modal, Button } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Rooms() {
  // const [Rooms, setRooms] = useState([]);
  // const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/new/showroom")
  //     .then((res) => setRooms(res.data))

  //     .catch((err) => console.log(err));
  // }, []);

  const whatsappLink =
    "https://api.whatsapp.com/message/LZP5RQYXTGMHM1?autoload=1&app_absent=0";

  return (
    <>
      <Header />
      <form>
        <div className="overflow-hidden">
          <div className="system">
            <div className="head  ">
            
              <div className="room col-6 col-lg-12 htagsMob mx-5 px-4">
                <h1 className="text-white htagr ">Rooms</h1>
                <p className="ptag text-white">
                  If you are looking for a home away from home, just walk in
                  here.
                  <br /> You can get both, an incredible and relaxing experience
                  while you are on a holiday
                </p>
              </div>
            </div>
            <div className=" container stay mt-5">
              <div className="row">
                <div className="col-sm-12 come">
                  <h3 className="htag">Come & Stay with Us</h3>
                  <p className="ptag">
                    Pick any of our rooms to experience the delightful decor,
                    complemented with modern amenties for a comfortable stay
                  </p>
                </div>
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
                  <h3 className=" htag">Jupiter Room</h3>
                  <p className="ptag ">
                    Queen Beds(2) Bathtub with hand shower free WIFI and Tower Cupboard table, and chair water bottles
                  </p>
                  <p>Beds: 2 Queen(s)</p>
                  <p>
                    Adults:<span className="text-secondary"> </span>
                  </p>
                  <Button variant="primary" onClick={handleShow}>
                    Book Now
                  </Button>

                  <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        please Booking details contact in whatsapp group
                      </Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body>Modal content goes here</Modal.Body> */}
                    <Modal.Footer className="d-flex justify-content-center align-items-center">
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary" onClick={handleClose}>
                          Whatsapp group
                        </Button>
                      </a>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>

            <div className=" container stay  ">
              <div className="row">
                <div
                  className="col-12 col-lg-6  m-auto  "
                  data-aos="fade-up"
                >
                  <h3 className=" htag">Mercury Room</h3>
                  <p className="ptag">
                    Queen bed (2) Bathtub with hand shower Cupboard, table, and chair Free towels free WIFI facility{" "}
                  </p>
                  <p>Beds: 2 Queen(s)</p>
                  <p>
                    Adults:<span className="text-secondary"> 6</span>
                  </p>

                  <Button variant="primary" onClick={handleShow}>
                    Book Now
                  </Button>

                  <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        please Booking details contact in whatsapp group
                      </Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body>Modal content goes here</Modal.Body> */}
                    <Modal.Footer className="d-flex justify-content-center align-items-center">
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary" onClick={handleClose}>
                          Whatsapp group
                        </Button>
                      </a>
                    </Modal.Footer>
                  </Modal>
                  
                </div>
                <div className="col-12 col-lg-6 Mercury ">
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
                <div className="col-12 col-lg-6 Mars ">
                  <img
                    className="img-responsive invisible imgs "
                    src={require("../../images/rooma.jpg")}
                    alt=""
                    width="100%"
                  />
                </div>
                <div
                  className="col-12 col-lg-6 mars m-auto  "
                  data-aos="fade-up"
                >
                  <h3 className=" htag">Mars</h3>
                  <p className="ptag">
                    Free WIFI Guests also enjoy premier modern  amenities such as  high-speed Internet, flat screen TV,
                    and In-rooms.Cupboard, table with chair
                  </p>
                  <p>Beds: 2 Queen(s)</p>
                  <p>Restroom: N/A</p>
                  <p>
                    Adults:<span className="text-secondary"> 4</span>
                  </p>

                  <Button variant="primary" onClick={handleShow}>
                    Book Now
                  </Button>

                  <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        please Booking details contact in whatsapp group
                      </Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body>Modal content goes here</Modal.Body> */}
                    <Modal.Footer className="d-flex justify-content-center align-items-center">
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary" onClick={handleClose}>
                          Whatsapp group
                        </Button>
                      </a>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
            <div className=" container stay ">
              <div className="row">
                <div
                  className="col-12 col-lg-6 saturn m-auto  "
                  data-aos="fade-up"
                >
                  <h3 className="htag ">
                    Saturn Room
                  </h3>
                  <p className="ptag">
                    The Love Nest room has all you need for the perfect romantic  getaway weekend{" "}
                  </p>

                  <div className="dataMob">
                    <p>Beds: 1 Queen(s)</p>
                    <p className="mx-5"> BedRoom: 1</p>

                    <p>
                      Adults:<span className="text-secondary"> 4</span>
                    </p>
                    <p className="mx-"></p>
                  </div>

                  <table className="dataSys">
                    <tr>
                      <td>
                        <p> Beds: 2 Queen(s)</p>{" "}
                      </td>
                      <td>
                        {" "}
                        <p className="mx-5"> Bathtub: N/A</p>
                      </td>
                      <td>
                        {" "}

                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Adults:<span className="text-secondary"> 2</span>
                        </p>
                      </td>

                    </tr>
                  </table>

                  <Button variant="primary" onClick={handleShow}>
                    Book Now
                  </Button>

                  <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        please Booking details contact in whatsapp group
                      </Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body>Modal content goes here</Modal.Body> */}
                    <Modal.Footer className="d-flex justify-content-center align-items-center">
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary" onClick={handleClose}>
                          Whatsapp group
                        </Button>
                      </a>
                    </Modal.Footer>
                  </Modal>
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
                    Uranus Room
                  </h3>
                  <p className="ptag">
                    The family room provides the warmth, cleanliness, and extra space your family need for a  perfect holiday experience. Free WIFI.
                  </p>

                  <div className="dataMob">
                    <p>Beds: 2 Queen(s)</p>

                    <p>
                      Adults:<span className="text-secondary"> 4</span>
                    </p>

                  </div>

                  <table className="dataSys">
                    <tr>
                      <td>
                        <p> Beds: 2 Queen(s)</p>{" "}
                      </td>
                      <td>
                        {" "}

                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Adults:<span className="text-secondary"> 4</span>
                        </p>
                      </td>
                      <td>
                        {" "}

                      </td>
                    </tr>
                  </table>

                  <Button variant="primary" onClick={handleShow}>
                    Book Now
                  </Button>

                  <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        please Booking details contact in whatsapp group
                      </Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body>Modal content goes here</Modal.Body> */}
                    <Modal.Footer className="d-flex justify-content-center align-items-center">
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary" onClick={handleClose}>
                          Whatsapp group
                        </Button>
                      </a>
                    </Modal.Footer>
                  </Modal>
                </div>

              </div>
            </div>
            <div className=" container stay ">
              <div className="row">
                <div
                  className="col-12 col-lg-6 saturn m-auto  "
                  data-aos="fade-up"
                >
                  <h3 className="htag ">
                    Neptune Room
                  </h3>
                  <p className="ptag">
                    Designed for comfort and convenience, the Comfort Room spares no expense
                  </p>

                  <div className="dataMob">
                    <p>Beds: 2 Queen(s)</p>


                    <p>
                      Adults:<span className="text-secondary"> 4</span>
                    </p>

                  </div>

                  <table className="dataSys">
                    <tr>
                      <td>
                        <p> Beds: 2 Queen(s)</p>{" "}
                      </td>
                      <td>
                        {" "}

                      </td>
                      <td>
                        {" "}

                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Adults:<span className="text-secondary"> 2</span>
                        </p>
                      </td>

                    </tr>
                  </table>

                  <Button variant="primary" onClick={handleShow}>
                    Book Now
                  </Button>

                  <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        please Booking details contact in whatsapp group
                      </Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body>Modal content goes here</Modal.Body> */}
                    <Modal.Footer className="d-flex justify-content-center align-items-center">
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary" onClick={handleClose}>
                          Whatsapp group
                        </Button>
                      </a>
                    </Modal.Footer>
                  </Modal>
                </div>

                <div className="col-12 col-lg-6 Neptune   ">
                  <img
                    className="img-responsive invisible imgs  "
                    src={require("../../images/rooma.jpg")}
                    alt=""
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>

       
        </div>
      </form>
    </>
  );
}
export default Rooms;
