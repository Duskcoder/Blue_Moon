import React from "react";
import footerimg from "../images/blue moon bungalow logo1.jpg"


function Footer() {
  return (
    <div className="container ">
      <div className=" footer-bgimg  m-auto" id="footer-bg-img">
      <div className="container">
        <div>
          <img src={footerimg} alt="" height={50} width={80}/>
        </div>
        <div className="">
          <h2>Bluemoon Bungalow</h2>
        </div>
        <section className="">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Menu</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-black text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black text-decoration-none">
                    Rooms
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black text-decoration-none">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black text-decoration-none">
                    Cancellation policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black text-decoration-none">
                    Imaportant Information
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-black text-decoration-none">
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
                  <a href="#!" className="text-black text-decoration-none">
                    Follow Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    <i class="fa fa-instagram"></i> <br />
                    <i class="fa-brands fa fa-facebook"></i> <br />
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
