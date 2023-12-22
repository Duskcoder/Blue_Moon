import React, {useState} from "react";
import '../RoomStay/RoomStay.css'

import Header1 from "../Header1";
import { Modal, Button } from "react-bootstrap";
import Footer1 from "../HomeStay/Footer1";

function RoomStay() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const whatsappLink =" https://wa.me/message/JYC7L3YOFWSUN1";
   
  return (
    <>
    <Header1/>
      <div className="overflow-hidden">
        <div className="systemSys">
          <div className="head1  ">
          <div className="rooms pt-5 col-12 col-lg-6 htagsMob mx-auto "> 
  <h1 className="text-white htagr text-center pt-5">HomeStay</h1>
  <h1 className="text-white htagr text-center">Rooms</h1>
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
                <h3 className=" htag">Standard Room 1</h3>
                <p className="ptag">
                  Designed for comfort and convenience,the Comfort Room spares
                  no expense
                </p>
                <p>Beds: 1 Queen(s)</p>
                <p>
                  Adults:<span className="text-secondary"> 2</span>
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
                <h3 className=" htag">Standard Room 2</h3>
                <p className="ptag">
                  The Love Nest room has all you need for the perfect romantic
                  getaway weekend{" "}
                </p>
                <p>Beds: 1 Queen(s)</p>
                <p>
                  Adults:<span className="text-secondary"> 2</span>
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
              <div className="col-12 col-lg-6 mars m-auto  " data-aos="fade-up">
                <h3 className=" htag">Standard Room 3</h3>
                <p className="ptag">
                  The family room provides the warmth, cleanliness, and extra
                  space your family needs for a perfect holiday experience.Free
                  WIFI
                </p>
                <p>Beds: 1 Queen(s)</p>

                <p>
                  Adults:<span className="text-secondary"> 2</span>
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
                className="col-12 col-lg-6  m-auto   "
                data-aos="fade-up"
              >
                <h3 className="htag ">Double BedRoom Apartment Ground Floor</h3>
                <p className="ptag">
                  Free WIFI Guests also enjoy premier modern amenties such as
                  high-speed Internet, flast screen TV, and In-rooms.Cupboard
                  tablw with chair .{" "}
                </p>

                <div className="dataMob">
                  <p>Beds: 2 Queen(s)</p>
                  <p className=""> BedRoom: 2</p>
                  <p>Hall: 1</p>
                  <p>
                    Adults:<span className="text-secondary"> 4</span>
                  </p>
                  <p className="mx-">Dining Space: 1</p>
                </div>

                <table className="dataSys">
                  <tr>
                    <td>
                      <p> Beds: 2 Queen(s)</p>{" "}
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
                        Adults:<span className="text-secondary"> 4</span>
                      </p>
                    </td>
                    <td>
                      {" "}
                      <p className="mx-5">Dining Space: 1</p>
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
                <h3 className="htag ">Double BedRoom Apartment First Floor</h3>
                <p className="ptag">
                  Designed for comfort and convenience, the Comfort Room spares
                  no expense
                </p>

                <div className="dataMob">
                  <p>Beds: 2 Queen(s)</p>
                  <p className="mx-5"> BedRoom: 2</p>
                  <p>Hall: 1</p>
                  <p>
                    Adults:<span className="text-secondary"> 4</span>
                  </p>
                  <p className="mx-">Dining Space: 1</p>
                </div>

                <table className="dataSys">
                  <tr>
                    <td>
                      <p> Beds: 2 Queen(s)</p>{" "}
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
                        Adults:<span className="text-secondary"> 4</span>
                      </p>
                    </td>
                    <td>
                      {" "}
                      <p className="mx-5">Dining Space: 1</p>
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
        </div>
        <div className="systemMob">
          <div className="head1  ">
          <div className="rooms pt-5 col-12 col-lg-6 htagsMob mx-auto "> 
  <h1 className="text-white htagr text-center pt-5">HomeStay</h1>
  <h1 className="text-white htagr text-center">Rooms</h1>
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
                <h3 className=" htag">Standard Room 1</h3>
                <p className="ptag">
                  Designed for comfort and convenience,the Comfort Room spares
                  no expense
                </p>
                <p>Beds: 1 Queen(s)</p>
                <p>
                  Adults:<span className="text-secondary"> 2</span>
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
                <h3 className=" htag">Standard Room 2</h3>
                <p className="ptag">
                  The Love Nest room has all you need for the perfect romantic
                  getaway weekend{" "}
                </p>
                <p>Beds: 1 Queen(s)</p>
                <p>
                  Adults:<span className="text-secondary"> 2</span>
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
              <div className="col-12 col-lg-6 roomc mt-3 ">
                <img
                  className="img-responsive invisible imgs "
                  src={require("../../images/rooma.jpg")}
                  alt=""
                  width="100%"
                />
              </div>
              <div className="col-12 col-lg-6 mars m-auto  " data-aos="fade-up">
                <h3 className=" htag">Standard Room 3</h3>
                <p className="ptag">
                  The family room provides the warmth, cleanliness, and extra
                  space your family needs for a perfect holiday experience.Free
                  WIFI
                </p>
                <p>Beds: 1 Queen(s)</p>

                <p>
                  Adults:<span className="text-secondary"> 2</span>
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
                <h3 className="htag ">Double BedRoom Apartment Ground Floor</h3>
                <p className="ptag">
                  Free WIFI Guests also enjoy premier modern amenties such as
                  high-speed Internet, flast screen TV, and In-rooms.Cupboard
                  tablw with chair .{" "}
                </p>

                <div className="dataMob">
                  <p>Beds: 2 Queen(s)</p>
                  <p className=""> BedRoom: 2</p>
                  <p>Hall: 1</p>
                  <p>
                    Adults:<span className="text-secondary"> 4</span>
                  </p>
                  <p className="mx-">Dining Space: 1</p>
                </div>

                <table className="dataSys">
                  <tr>
                    <td>
                      <p> Beds: 2 Queen(s)</p>{" "}
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
                        Adults:<span className="text-secondary"> 4</span>
                      </p>
                    </td>
                    <td>
                      {" "}
                      <p className="mx-5">Dining Space: 1</p>
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
                <h3 className="htag ">Double BedRoom Apartment First Floor</h3>
                <p className="ptag">
                  Designed for comfort and convenience, the Comfort Room spares
                  no expense
                </p>

                <div className="dataMob">
                  <p>Beds: 2 Queen(s)</p>
                  <p className="mx-5"> BedRoom: 2</p>
                  <p>Hall: 1</p>
                  <p>
                    Adults:<span className="text-secondary"> 4</span>
                  </p>
                  <p className="mx-">Dining Space: 1</p>
                </div>

                <table className="dataSys">
                  <tr>
                    <td>
                      <p> Beds: 2 Queen(s)</p>{" "}
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
                        Adults:<span className="text-secondary"> 4</span>
                      </p>
                    </td>
                    <td>
                      {" "}
                      <p className="mx-5">Dining Space: 1</p>
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
        </div>

       
      </div>
      <Footer1/>
    </>
  );
}

export default RoomStay;
