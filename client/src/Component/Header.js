import React, { useState } from "react";
import blue from "../images/blue moon bungalow logo1.jpg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Header() {
  const [state, setState] = useState(false);
  const handleToggle = () => {
    setState(!state);
  };
  const handleStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "" : "",
    };
  };
  return (
    <>
      <div>
        <div className="header">
          <div class="d-flex justify-content-center ">
            <img src={blue} alt="bluemoon img" style={{ width: "10%" }} />

            <div class="list">
              <ul class="unoderlist d-flex align-items-center mt-5">
                <li>
                  {/* {/ <a href="">Home</a> /} */}
                  <NavLink style={handleStyle}>Home</NavLink>
                </li>
                <li>
                  {/* {/ <a href=""></a> /} */}
                  <NavLink>About Us</NavLink>
                </li>
                <li>
                  {/* {/ <a href="">Room</a> /} */}
                  <NavLink>Room</NavLink>
                </li>
                <li>
                  {/* {/ <a href="">Contact Us</a> /} */}
                  <NavLink>Contact Us</NavLink>
                </li>
                <li>
                  <a href="">Amenines</a>
                </li>
                <button type="submit" class="button_style--modify">
                  BLUEMOON HOMESTAY
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class=" header2 ">
        <div class="d-flex justify-content-between p-2">
          <img
            src={blue}
            alt="bluemoon img"
            class="rounded"
            style={{ width: "30%" }}
          />

          <div class="toggle mt-4">
            <button
              type="submit"
              className="button_style p-1"
              style={{ borderRadius: "20px", outline: "none" }}
              onClick={handleToggle}
            >
              {state ? (
                <IoMdClose fontSize={30} color="white" />
              ) : (
                <IoMenu fontSize={30} color="white" />
              )}
            </button>
          </div>
        </div>
        <div class="list">
          <ul
            class={state ? "unoderlist text-center" : "orderlist text-center"}
          >
            <li class="num">
              <a href="">Home</a>
            </li>
            <li class="num">
              <a href="">About Us</a>
            </li>
            <li class="num">
              <a href="">Room</a>
            </li>
            <li class="num">
              <a href="">Contact Us</a>
            </li>
            <li class="num">
              <a href="">Amenines</a>
            </li>
            <button type="button" class="button_style--modify">
              BLUEMOON HOMESTAY
            </button>
          </ul>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Header;
