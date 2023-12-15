import React from "react";
import footerimg from "../images/blue moon bungalow logo1.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate=useNavigate()
  return (
    <div className=" text-white overflow-hidden  mt-5">

      <div className="row  d-flex   m-auto" id="footer-bg-img">
        <div className="container col-lg-12  m-l-25px text-whites ">
          <div className="mt-4">
            <img src={footerimg} alt="" height={70} width={70} />
          </div>
          <div className="mt-4 ">
            <h2 className="footer-header" style={{ color: '#0343FC' }}>Bluemoon Bungalow</h2>
          </div>
          <section className="text-white mt-4">
            <div className="row justify-content-start">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase  mb-4" >Menu</h5>
                <ul className="list-unstyled mt-5  ">
                  <li className="mb-2">
                    <a
                    
                      href=""
                      className="text-white text-decoration-none footer-textsize"
                      onClick={()=>navigate('/')}
                      
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href=""
                      className="text-white text-decoration-none footer-textsize"
                      onClick={()=>navigate('/about1')}
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href=""
                      className="text-white text-decoration-none footer-textsize"
                      onClick={()=>navigate('/Room')}
                    >
                      Rooms
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href=""
                      className="text-white text-decoration-none footer-textsize"
                      onClick={()=>navigate('/contact')}
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href=""
                      className="text-white text-decoration-none footer-textsize"
                      onClick={()=>navigate('/Cancellation')}
                    >
                      Cancellation policy
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href=""
                      className="text-white text-decoration-none footer-textsize"
                      onClick={()=>navigate('/')}
                    >
                      Important Information
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase footer-header mb-4">Contact</h5>

                <ul className="list-unstyled mb-0 mt-5">
                  <li className="mb-2">
                    <a
                      href=""
                      className="text-white text-decoration-none footer-textsize"
                      
                    >
                      No.10, 9th cross street,
                      <br />
                      Rainbow Nagar,
                      <br />
                      Pondicherry.
                      <br />
                      Contact no:8754041119
                    </a>
                  </li>
                  <div className="col-lg-6 col-sm-12 pt-5 mx-2">
                  <a
                    href="#!"
                    className="text-white text-decoration-none footer-textsize-follow d-block"
                  >
                    Follow Us
                  </a>
                  <div className="mt-3">
                      <a
                        href="https://www.facebook.com/bluemoonbungalowpondy"
                        target="_blank"
                        rel="noreferrer"
                        className="me-3"
                      >
                        <FaFacebook className="footericon" />
                      </a>
                      <a
                        href="https://www.instagram.com/bluemoonbungalowpondy2022/"
                        target="_blank"
                        rel="noreferrer"
                        className="me-3"
                      >
                        <FaInstagram
                          className="footericon"
                          // style={{ fontSize: "27px !important" }}
                        />
                      </a>
                      <a 
                      href="https://twitter.com/Bluemonbungalow" 
                      className="me-3" 
                      target="_blank"
                      rel="noreferrer"
                      >
                        <RiTwitterXLine className="footericon" />
                      </a>
                    </div>


                </div>
                  <li className="mt-4">
                    <a
                      href="#!"
                      className="text-white m-l-10px footer-textsize"
                    >
                      <i className="fa fa-instagram font-40"></i>
                      <i className="fa-brands fa fa-facebook font-40"></i>
                      <i className="fa-brands fa fa-twitter font-40"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" col-lg-2 font-30 d-flex align-items-center  ">
                <button className="direction fw-bold" id='direction'>
                  <strong>
                    <i className="fa fa-solid fa-diamond-turn-right"></i>
                    <a href="https://maps.app.goo.gl/cT9y5hXsh4x8ha2M9" target="_blank"  rel="noreferrer">Get Direction</a>
                  </strong>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Footer;
