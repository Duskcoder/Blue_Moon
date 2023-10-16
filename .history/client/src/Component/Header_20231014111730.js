import React from "react";

function Header() {
  return (
    <div>
      <div className="container footer-bgimg position-relative">
        <div className="position-absolute">
          <img></img>
        </div>
        <div className="position-absolute">
          <h2></h2>
        </div>
        <section className="position-absolute" >
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
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

export default Header;
