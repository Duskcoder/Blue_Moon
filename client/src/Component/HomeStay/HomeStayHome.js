// import React from "react";
// import { AboutUs } from "../AboutUs";
// import white1 from "../../images/white1.jpg";
// import champ from "../../images/champ.jpg";
// import white from "../../images/white.jpg";
// import butha from "../../images/butha.jpg";
// import kitchen from "../../images/kitchen.jpg";
// import reception from "../../images/reception.jpg";
// import { About } from "../About/About";
// import Header1 from "../Header1";
// import CardBox from "../Gallery/Gallery";
// import Footer from "../Footer";

// function HomeStayHome() {
//   return (
//     <div>
//     <Header1/>
//       <div className="home-bg ">
//         <div className="container position-relative text-white home-text-center">
//           <div className="text-align-center">
//             <div data-aos="fade-right" data-aos-duration="1000">
//               <h1>YOUR HOME</h1>
//             </div>
//             <div data-aos="zoom-in" data-aos-duration="1000">
//               <h3>Away</h3>
//             </div>
//             <div data-aos="fade-left" data-aos-duration="1000">
//               <h1>FROM HOME</h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row justify-content-evenly  mb-5  mt-5 room-booking">
//         <div className="col-3 pt-5 m-auto">
//           <h4 className="mt-5 justify-content-center d-flex border border-primaryx">
//             Rooms{" "}
//           </h4>

//           <button className="mt-2 mx-auto d-flex">View ALL</button>
//         </div>

//         <div className="col-lg-4  col-12 text-white fs-2 roos-home-card   home-room">
//           <p className="mt-40px d-flex justify-content-center">Mercury Room</p>
//         </div>
//         <div className="col-lg-4 col-12  text-white  fs-2 home-rooms">
//           <p className="mt-40px d-flex justify-content-center">Uranus Room</p>
//         </div>
//       </div>

//       <div>
//         <About />
//       </div>
//       <div className="row mt-4">
//         <div className="col-sm-12 col-lg-3 mb-3 mb-sm-0">
//           <div className="card card-amen">
//             <div className="card-image">
//               <img
//                 className="img-butha"
//                 src={white1}
//                 alt=""
//                 width="100%"
//                 height="100%"
//               />
//             </div>
//             <div className="card-body text-center">
//               <h4>Selfie Spo t</h4>
//               <p className="card-text">
//                 Cherish Each and every moment and make those moments memorable.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-sm-12 col-lg-3 mb-3 mb-sm-0">
//           <div className="card card-amen">
//             <div className="card-image">
//               <img
//                 className="img-butha"
//                 src={champ}
//                 alt=""
//                 width="100%"
//                 height="100%"
//               />
//             </div>
//             <div className="card-body text-center">
//               <h4>Camp Fire</h4>
//               <p className="card-text">
//                 Gather wood, Build a fire, and Stay up all night with fire &
//                 stars. The fire is the main comfort of the camp.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-sm-12 col-lg-3 mb-3 mb-sm-0">
//           <div className="card card-amen">
//             <div className="card-image">
//               <img
//                 className="img-butha"
//                 src={white}
//                 alt=""
//                 width="100%"
//                 height="100%"
//               />
//             </div>
//             <div className="card-body text-center">
//               <h4>Huts</h4>
//               <p className="card-text">
//                 A space for solitude seekers peace lovers and nature lovers.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-sm-12 col-lg-3 mb-3 mb-sm-0">
//           <div className="card card-amen">
//             <div className="card-image">
//               <img
//                 className="image-responsive"
//                 src={butha}
//                 alt=""
//                 width="100%"
//                 height="195px"
//               />
//             </div>
//             <div className="card-body text-center">
//               <h4>Water Fountain</h4>
//               <p className="card-text">
//                 A kind heart is a fountain of gladness, making everything in its
//                 vicinity freshen into smiles.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default HomeStayHome;

import React from "react";
import "../../Component/HomeStay/HomeStay.css";
import ViewDev from "../ViewAll/ViewDev";
import CardBox from "../Gallery/Gallery";
import { useNavigate } from "react-router-dom";
import RoomStay from "../RoomStay/RoomStay";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header1 from "../Header1";
import { AboutUs1 } from "../AboutUs1";
import Footer1 from "./Footer1";

function HomeStayHome() {
  const navigate = useNavigate();
  return (
    <>
      <Header1 />
      <div className="overflow-hidden">
        <div className="system ">
          <div className="head  ">
            <div className="room col-12 col-lg-6  mx-5">
              <h1
                className="htagp text-center"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Welcome to
              </h1>
              <h1
                className="text-white htags text-center"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                BLUEMOON HOMESTAY
              </h1>
              <p
                className="text-white d-flex text-center justify-content-center ptag"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                Homestay in ilango Nagar
              </p>

              <button
                className="btn btn-white shadow btns m-auto d-flex mb-3"
                onClick={() => navigate("/stay")}
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                Book Now
              </button>
            </div>
          </div>
       
          <ViewDev />
   
          <CardBox />
          <div>
            <Footer1 />
          </div>
        </div>

     
      </div>
    </>
  );
}

export default HomeStayHome;

