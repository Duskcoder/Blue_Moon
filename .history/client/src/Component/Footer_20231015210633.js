import React from "react";
import footerimg from "../images/blue moon bungalow logo1.jpg";

function Footer() {
  return (
    <div className=" text-white">
      <div className="  d-flex   m-auto" id="footer-bg-img">
        <div className="container col-6 m-l-25px text-whites ">
          <div className="mt-4">
            <img src={footerimg} alt="" height={70} width={70} />
          </div>
          <div className="mt-4 ">
            <h2 className="footer-header">Bluemoon Bungalow</h2>
          </div>
          <section className="text-white mt-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
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

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
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
                  <li className="mt-3">
                    <a
                      href="#!"
                      className="text-whites text-decoration-none footer-textsize-follow"
                    >
                      Follow Us
                    </a>
                  </li>
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
            </div>
          </section>
        </div>
        <div className="m-auto align-content-center float-start">
          <button className="">
            <a href="#!">Get Direction</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
