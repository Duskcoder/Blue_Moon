import React from "react";

function Footer() {
  return (
    <div>
      <div className="container footer-bgimg position-relative">
        <div className="position-absolute">
          <img></img>
        </div>
        <div className="position-absolute">
          <h2>Bluemoon Bungalow</h2>
        </div>
        <section className="position-absolute">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Menu</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    About 
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
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
