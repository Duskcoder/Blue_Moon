import React from "react";
import '../../Component/HomeStay/HomeStay.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

// import footerimg from "../images/blue moon bungalow logo1.jpg";

function Footer1() {
  return (
    <div className=" text-white overflow-hidden  mt-5">

      <div className="row  d-flex   m-auto" id="footer-bg-img2">
        <div className="container col-lg-12  m-l-25px text-whites ">
          <div className="mt-4">
            {/* <img src={footerimg} alt="" height={70} width={70} /> */}
          </div>
          <div className="mt-4 ">
            <h2 className="footer-header">Bluemoon Bungalow</h2>
          </div>

          <section className="text-white mt-4 justify-content-center m-auto ">
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
                      Important Information
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0 container">
                <h5 className="text-uppercase footer-header mb-4 ">Contact</h5>

                <ul className="list-unstyled mb-0 mt-5 col-12  row">
                  <h3 className="col-lg-3 col-sm-4">
                    Address
                  </h3>
                  <li className="mb-2 col-lg-9 w-auto">
                    <a
                      href="#!"
                      className="text-whites text-decoration-none footer-textsize"
                    >
                      No.3, Bhagat Singh Street,
                      <br />
                      Ilango Nagar,
                      <br />
                      Pondicherry.
                      <br />
                      <div className="text-white pt-5 fs-5"> Contact no:<span className="fs-3">80155 22535</span></div>
                    </a>
                  </li>
                  <li className="mt-3">

                  </li>








                </ul>
              </div>

              <div className=" col-lg-4   cvbcnc font-30 ">
                <button className="direction fw-bold">
                  <strong>
                    <i class="fa fa-solid fa-diamond-turn-right"></i>
                    <a href="#!">Get Direction</a>

                  </strong>

                </button>
                <div className="col-lg-4 col-sm-12 pt-5 mx-2">
                  <a
                    href="#!"
                    className="text-whites text-decoration-none footer-textsize-follow d-block"
                  >
                    Follow Us
                  </a>
                  <FaFacebook className="footericon" />&nbsp;<FaInstagram className="footericon" />&nbsp;<RiTwitterXLine className="footericon" />


                </div>

              </div>

            </div>

          </section>
        </div>
      </div>
    </div>
  );
}

export default Footer1;