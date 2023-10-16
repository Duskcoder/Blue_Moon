import React from "react";
// import img from '../images/'

function Footer() {
  return (
    <div>
      <div className="container footer-bgimg ">
        <div className="position-absolute">
          <img/>
        </div>
        <div className="">
          <h2>Bluemoon Bungalow</h2>
        </div>
        <section className="">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Menu</h5>

              <ul className=" list-unstyled mb-0">
                <li className="">
                  <a href="#!" className="text-bla">
                    Home
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#!" className="text-white">
                    About Us
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#!" className="text-white">
                    Rooms
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#!" className="text-white">
                    Contact Us
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#!" className="text-white">
                    Cancellation policy
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#!" className="text-white">
                    Imaportant Information
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact</h5>

              <ul className="list-group list-unstyled mb-0">
                <li className="list-group-item">
                  <a href="#!" className="text-white">
                    No.10, 9th cross street,<br/>
                    Rainbow Nagar,<br/>
                    Pondicherry.<br/>
                    Contact no:8754041119
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Follow Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
