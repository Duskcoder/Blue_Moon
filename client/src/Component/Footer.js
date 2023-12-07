import React from "react";
import footerimg from "../images/blue moon bungalow logo1.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

function Footer() {
  return (
    <div className=" text-white overflow-hidden  mt-5">

      <div className="row  d-flex   m-auto" id="footer-bg-img">
        <div className="container col-lg-8  m-l-25px text-whites ">
          <div className="mt-4">
            <img src={footerimg} alt="" height={70} width={70} />
          </div>
          <div className="mt-4 ">
            <h2 className="footer-header">Bluemoon Bungalow</h2>
          </div>
          <section className="text-white mt-4">
            <div className="row justify-content-start">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase  mb-4">Menu</h5>

                <ul className="list-unstyled mt-5">
                  <li className="mb-2">
                    <a
                      href="#!"
                      className="text-whites text-decoration-none footer-textsize"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#!"
                      className="text-whites text-decoration-none footer-textsize"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#!"
                      className="text-whites text-decoration-none footer-textsize"
                    >
                      Rooms
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#!"
                      className="text-whites text-decoration-none footer-textsize"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#!"
                      className="text-whites text-decoration-none footer-textsize"
                    >
                      Cancellation policy
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#!"
                      className="text-whites text-decoration-none footer-textsize"
                    >
                      Imaportant Information
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase footer-header mb-4">Contact</h5>

                <ul className="list-unstyled mb-0 mt-5">
                  <li className="mb-2">
                    <a
                      href="#!"
                      className="text-whites text-decoration-none footer-textsize"
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
                    className="text-whites text-decoration-none footer-textsize-follow d-block"
                  >
                    Follow Us
                  </a>
                  <FaFacebook className="footericon" />&nbsp;<FaInstagram className="footericon" />&nbsp;<RiTwitterXLine className="footericon" />


                </div>
                  <li className="mt-4">
                    <a
                      href="#!"
                      className="text-whites m-l-10px footer-textsize"
                    >
                      <i class="fa fa-instagram font-40"></i>
                      <i class="fa-brands fa fa-facebook font-40"></i>
                      <i class="fa-brands fa fa-twitter font-40"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" col-lg-4 font-30 ">
                <button className="direction fw-bold">
                  <strong>
                    <i class="fa fa-solid fa-diamond-turn-right"></i>
                    <a href="#!">Get Direction</a>
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
