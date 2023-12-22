import React, { useState } from "react";
import blueMoonIMG from "../images/blue moon7.jpg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Header1() {
  // const [open, setOpen] = useState(false);
  const navigate=useNavigate()
  const [state, setState] = useState(false);
  const [user, setUsers] = useState("test");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  const handleToggle = () => {
    setState(!state);
  };
  const handleStyle = ({ isActive }) => {
    return {
      color: isActive ? "black" : "black",
    };
  };
  return (
    <>
      <div>
        <div className="header" style={{position:"absolute",backgroundColor:"#00000057", width: "100%", zIndex:'1000'}}>
          <div className="d-flex justify-content-center m-auto p-0">
            <img src={blueMoonIMG} alt="bluemoon img" style={{  padding: "2px", marginLeft: "154px" }} width={80} height={80} />

            <div className="list m-auto p-0" id="header-list">
              <div className="unoderlist header-color d-flex align-items-center">
              
                  {/* {/ <a href="">Home</a> /} */}
                  <NavLink
                    // style={handleStyle}
                    to={"/homeStayHome"}
                    style={({ isActive }) => {
                      return  { 
                        textDecoration: isActive? 'none':'none',
                        color : isActive ? '#2BB8EE' : 'rgb(255, 255, 255)'                      };
                    }}
                  >
                    Home
                  </NavLink>
               
              
                  {/* {/ <a href=""></a> /} */}
                  <NavLink 
                  to={"/aboutus"}

                  style={({ isActive }) => {
                      return  { 
                        textDecoration: isActive? 'none':'none',
                        color : isActive ? '#2BB8EE' : 'rgb(255, 255, 255)'                      };
                    }}
                  >About Us</NavLink>
              
              
                  {/* {/ <a href="">Room</a> /} */}
                  <NavLink 
                  to={"/stay"}
                  style={({ isActive }) => {
                      return  { 
                        textDecoration: isActive? 'none':'none',
                        color : isActive ? '#2BB8EE' : 'rgb(255, 255, 255)'
                      };
                    }}
                  >Room</NavLink>
                
               
                  {/* {/ <a href="">Contact Us</a> /} */}
                  <NavLink 
                  to={"/Gallery1"}
                  style={({ isActive }) => {
                      return  { 
                        textDecoration: isActive? 'none':'none',
                        color : isActive ? '#2BB8EE' : 'rgb(255, 255, 255)'
                      };
                    }}
                  >Gallery</NavLink>
              
             
                  {/* <a href="">Amenities</a> */}
                  <NavLink to={"/contactnew"}
                  style={({ isActive }) => {
                      return  { 
                        textDecoration: isActive? 'none':'none',
                        color : isActive ? '#2BB8EE' : 'rgb(255, 255, 255)'
                      };
                    }}
                  >Contact Us</NavLink>
              
                <button
                  type="submit"
                  className="button_style--modify"
                  onClick={()=>navigate('/')}
                >
                  BLUEMOON Bungalow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" header2" style={{backgroundColor:"#00000057",position:'absolute',zIndex:'1000'}}>
        <div className="d-flex justify-content-between p-2">
          <img
            src={blueMoonIMG}
            alt="bluemoon img"
            className="rounded"
            style={{ width: "30%" }}
          />

          <div className="toggle mt-4">
            <button
              type="submit"
              className="button_style p-1"
              style={{ borderRadius: "20px", outline: "none", position:'absolute',right:"26px" }}
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
        <div className="list">
          <ul
            className={state ? "unoderlist text-center" : "orderlist text-center"}
            style={{backgroundColor:"#00000057", width: "100%", height: "276px"}}
          >
            <li className="num">
              <a href="/homeStayHome">Home</a>
            </li>
            <li className="num">
              <a href="/aboutus">About Us</a>
            </li>
            <li className="num">
              <a href="/stay">Room</a>
            </li>
            <li className="num">
              <a href="/Gallery1">Gallery</a>
            </li>
            <li className="num">
              <a href="/contactnew">Contact Us</a>
            </li>
            <button
              type="button"
              className="button_style--modify"
              onClick={()=>navigate('/')}            >
              BLUEMOON BUNGALOW
            </button>
          </ul>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Header1;
