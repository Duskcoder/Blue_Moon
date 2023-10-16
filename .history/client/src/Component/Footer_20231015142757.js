import React from "react";
import footerimg from "../images/blue moon bungalow logo1.jpg"


function Footer() {
  return (
    <div className="container text-white">
      <div className=" footer-bgimg  m-auto" id="footer-bg-img">
      <div className="container text-white">
        <div className="mt-4">
          <img src={footerimg} alt="" height={70} width={70} />
        </div>
        <div className="mt-4 ">
          <h2 className="footer-header">Bluemoon Bungalow</h2>
        </div>
        <section className="text-white mt-4">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase footer-header">Menu</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Rooms
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Cancellation policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Imaportant Information
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase footer-header mb-">Contact</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    No.10, 9th cross street,
                    <br />
                    Rainbow Nagar,
                    <br />
                    Pondicherry.
                    <br />
                    Contact no:8754041119
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Follow Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white m-l-10px">
                    <i class="fa fa-instagram "></i> 
                    <i class="fa-brands fa fa-facebook"></i> 
                    <i class="fa-brands fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
}

export default Footer;
