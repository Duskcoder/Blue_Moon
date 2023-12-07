import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "../../Component/Rooms/Rooms.css";
import Footer from "../Footer";
import Header from "../Header";

function Rooms() {
  const [Rooms, setRooms] = useState([]);
  const navigate = useNavigate();
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

  const evenRooms = Rooms.filter((room) => room % 2 === 0);
  const oddRooms = Rooms.filter((room) => room % 2 !== 0);

  console.log(Rooms, "gjhg");

  return (
    <>
      <Header />
      <form>
        {/* <div className="overflow-hidden">
        <div className="system">

        </div>
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
        </div> */}
        {Rooms.length === 0 ? (
          <div className="overflow-hidden">
            <div className="system">
              <div className="head  ">
                <div className="room col-6 col-lg-12 htagsMob mx-5">
                <h1 className="text-white htagr">Rooms</h1>
              <p className="ptag text-white">
                If you are looking for a home away from home, just walk in here.
                <br /> You can get both, an incredible and relaxing experience
                while you are on a holiday
              </p>
                </div>
                <div className="room col-6 col-lg-12 htags pt-5 mx-5">
                <h1 className="text-white htagr">Rooms</h1>
              <p className="ptag text-white">
                If you are looking for a home away from home, just walk in here.
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
                  <div className="col-12 col-lg-6 rooma ">
                    <img
                      className="img-responsive invisible imgs m-auto"
                      src={require("../../images/rooma.jpg")}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div
                    className="col-12 col-lg-6 jupiter m-auto  "
                    data-aos="fade-up"
                  >
                    <h3 className=" htag">Standard Room 1</h3>
                    <p className="ptag">
                      Designed for comfort and convenience,the Comfort Room
                      spares no expense
                    </p>
                    <p>Beds: 1 Queen(s)</p>
                    <p>
                      Adults:<span className="text-secondary"> 2</span>
                    </p>

                    <button className="btn btn-white shadow btns">
                      {" "}
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              <div className=" container stay  ">
                <div className="row">
                  <div
                    className="col-12 col-lg-6 Mercury m-auto  "
                    data-aos="fade-up"
                  >
                    <h3 className=" htag">Standard Room 2</h3>
                    <p className="ptag">
                      The Love Nest room has all you need for the perfect
                      romantic getaway weekend{" "}
                    </p>
                    <p>Beds: 1 Queen(s)</p>
                    <p>
                      Adults:<span className="text-secondary"> 2</span>
                    </p>

                    <button className="btn btn-white shadow btns">
                      {" "}
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
                  <div
                    className="col-12 col-lg-6 mars m-auto  "
                    data-aos="fade-up"
                  >
                    <h3 className=" htag">Standard Room 3</h3>
                    <p className="ptag">
                      The family room provides the warmth, cleanliness, and
                      extra space your family needs for a perfect holiday
                      experience.Free WIFI
                    </p>
                    <p>Beds: 1 Queen(s)</p>

                    <p>
                      Adults:<span className="text-secondary"> 2</span>
                    </p>

                    <button className="btn btn-white shadow btns">
                      {" "}
                      Book Now
                    </button>
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
                      Double BedRoom Apartment Ground Floor
                    </h3>
                    <p className="ptag">
                      Free WIFI Guests also enjoy premier modern amenties such
                      as high-speed Internet, flast screen TV, and
                      In-rooms.Cupboard tablw with chair .{" "}
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

                    <button className="btn btn-white shadow btns">
                      {" "}
                      Book Now
                    </button>
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
                    <h3 className="htag ">
                      Double BedRoom Apartment First Floor
                    </h3>
                    <p className="ptag">
                      Designed for comfort and convenience, the Comfort Room
                      spares no expense
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

                    <button className="btn btn-white shadow btns">
                      {" "}
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="systems">
              <div className="head ">
                <div className="room col-6 col-lg-12 htagsMob mx-5   ">
                  <h1 className="text-white htagr">HomeStay</h1>
                  <h1 className="text-white htagr">Rooms</h1>
                </div>
              </div>
              <div className=" container stay mt-5">
                <div className="row">
                  <div className="col-sm-12 come">
                    <h3 className="htage">Come & Stay with Us</h3>
                    <p className="ptag">
                      Pick any of our rooms to experience the delightful decor,
                      complemented with modern amenties for a comfortable stay
                    </p>
                  </div>
                  <h3 className=" htag ">Standard Room 1</h3>
                  <div className="col-5 col-lg-6 rooma ">
                    <img
                      className="img-responsive invisible   "
                      src={require("../../images/rooma.jpg")}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div className="col-6 col-lg-6 jupiter  " data-aos="fade-up">
                    <p className="ptag">
                      Designed for comfort and convenience,the Comfort Room
                      spares no expense
                    </p>
                    <p className="ptag"> Beds: 1 Queen(s)</p>
                    <p className="ptag">
                      Adults:<span className="text-secondary"> 2</span>
                    </p>
                  </div>
                </div>
                <button className="btn btn-white shadow btns"> Book Now</button>
              </div>

              <div className=" container stay  ">
                <div className="row">
                  <h3 className=" htag">Standard Room 2</h3>
                  <div className="col-5 col-lg-6 roomb ">
                    <img
                      className="img-responsive invisible imgs m-auto"
                      src={require("../../images/rooma.jpg")}
                      alt=""
                      width="100%"
                    />
                  </div>

                  <div className="col-6 col-lg-6 Mercury  " data-aos="fade-up">
                    <p className="ptag">
                      The Love Nest room has all you need for the perfect
                      romantic getaway weekend{" "}
                    </p>
                    <p className="ptag">Beds: 1 Queen(s)</p>
                    <p className="ptag">
                      Adults:<span className="text-secondary"> 2</span>
                    </p>
                  </div>
                </div>
                <button className="btn btn-white shadow btns"> Book Now</button>
              </div>

              <div className=" container stay ">
                <div className="row">
                  <h3 className=" htag">Standard Room 3</h3>
                  <div className="col-5 col-lg-6 roomc ">
                    <img
                      className="img-responsive invisible imgs "
                      src={require("../../images/rooma.jpg")}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div className="col-6 col-lg-6 mars m " data-aos="fade-up">
                    <p className="ptag">
                      The family room provides the warmth, cleanliness, and
                      extra space your family needs for a perfect holiday
                      experience.Free WIFI
                    </p>
                    <p className="ptag">Beds: 1 Queen(s)</p>

                    <p className="ptag">
                      Adults:<span className="text-secondary"> 2</span>
                    </p>
                  </div>
                </div>

                <button className="btn btn-white shadow btns"> Book Now</button>
              </div>
              <div className=" container stay ">
                <div className="row">
                  <h3 className="htag ">
                    Double BedRoom Apartment Ground Floor
                  </h3>
                  <div className="col-5 col-lg-6 roomd   ">
                    <img
                      className="img-responsive invisible imgs  "
                      src={require("../../images/rooma.jpg")}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div className="col-6 col-lg-6 saturn  " data-aos="fade-up">
                    <p className="ptag">
                      Free WIFI Guests also enjoy premier modern amenties such
                      as high-speed Internet, flast screen TV, and
                      In-rooms.Cupboard tablw with chair .{" "}
                    </p>

                    <div className="dataMob">
                      <p className="ptag">
                        Beds: 2 Queen(s) BedRoom: 2 Hall: 1 Adults:
                        <span className="text-secondary"> 4</span> Dining Space:
                        1
                      </p>
                    </div>

                    <table className="dataSys">
                      <tr>
                        <td>
                          <p className=""> Beds: 2 Queen(s)</p>{" "}
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
                  </div>
                </div>

                <button className="btn btn-white shadow btns"> Book Now</button>
              </div>
              <div className=" container stay ">
                <div className="row">
                  <h3 className="htag fw-bold ">
                    Double BedRoom Apartment First Floor
                  </h3>
                  <div className="col-5 col-lg-6 roomx ">
                    <img
                      className="img-responsive invisible imgs  "
                      src={require("../../images/rooma.jpg")}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div className="col-6 col-lg-6 saturn   " data-aos="fade-up">
                    <p className="ptag ">
                      Designed for comfort and convenience, the Comfort Room
                      spares no expense
                    </p>

                    <div className="dataMob">
                      <p className="ptag">
                        Beds: 2 Queen(s) BedRoom: 2 Hall: 1 Adults:
                        <span className="text-secondary"> 4</span> Dining Space:
                        1
                      </p>
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
                  </div>
                </div>
              </div>

              <button className="btn btn-white shadow btns"> Book Now</button>
            </div>
          </div>
        ) : (
          Rooms.map((item) => (
            <div key={item.id}>
              <div className=" container stay ">
                <div className="row">
                  <div
                    className="col-12 col-lg-6 Mercury m-auto  "
                    data-aos="fade-right"
                  >
                    <img
                      className="mt-3"
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
                    <p>Description:{item.description}</p>
                    <p>Bed:{item.beds}</p>
                    <p>
                      Adults:
                      <span className="text-secondary">{item.adults}</span>
                    </p>
                    <p>
                      Status:
                      {item.status === "yes" ? "Available" : "Unavailable"}
                    </p>
                    <p>price:{item.price}</p>

                    <button
                      type="submit"
                      className="btn btn-white shadow btns"
                      onClick={() => handleClick(item)}
                    >
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
