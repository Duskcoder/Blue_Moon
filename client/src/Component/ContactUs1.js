import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";

export const ContactUs1 = () => {
  return (
    <div>
      {/* <Header/> */}
      <div id="contactus1" className="contactus">
        <div className="contact col-sm-12 pt-3">
          <div className="">
            <h1
              className="text-center"
              style={{ color: " #2a919d" }}
              data-aos="fade-left"
              data-aos-duration="500"
            >
              Contact Us
            </h1>
          </div>
          <div
            className="mt-4 line"
            data-aos="fade-left"
            data-aos-duration="500"
          ></div>
          <div
            className="mt-4 text-center"
            style={{ color: " #2a919d" }}
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <p>
              Do you want to enquire about our pricing, current offers and 
              <br />
              arrangements we can help you with? Give us a call or send in your
              <br />
              concerns through the form below.
            </p>
          </div>
        </div>

        <div className="mobile ">
          <div className="detail mt-5">
            <p
              className="number text-center"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              +91 8754041119
            </p>
            <h5
              className="text-center"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              bluemoonhomestay19@gmail.com
            </h5>
          </div>
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
};
