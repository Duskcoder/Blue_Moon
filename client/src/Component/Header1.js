// import React from "react";
// // import Logo from '../images/blue moon7.jpg'
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import blueMoonIMG from "../images/blue moon7.jpg";
// import { useNavigate } from "react-router-dom";
// const Header1 = () => {

// const navigate=useNavigate()

//   return (
//     <div className="hello">
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container className="justify-content-lg-center">
//         <div className="d-lg-flex " >
//           <Navbar.Brand href="#" >
//             <img src={blueMoonIMG} alt="" width={80} height={80} />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="" />
//           <Navbar.Collapse id="">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: "100px" }}
              
//             >
//               <Nav.Link href="/homeStayHome">Home</Nav.Link>
//               <Nav.Link href="/aboutus">About Us</Nav.Link>
//               <Nav.Link href="/stay">Rooms</Nav.Link>
//               <Nav.Link href="/Gallery1">Gallery</Nav.Link>
//               <Nav.Link href="/aboutus">Contact Us</Nav.Link>
    
//             </Nav>
//             <Form >
//               <Button variant="outline-success" onClick={()=>navigate('/')}>BLUEMOON BANGALOW</Button>
//               {/* <Link to='/'>BLUEMOON BANGALOW</Link> */}
//             </Form>
//           </Navbar.Collapse>
//           </div>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Header1;

import React, { useState } from "react";
import blueMoonIMG from "../images/blue moon7.jpg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Header1() {
  const [open, setOpen] = useState(false);
  const navigate=useNavigate()
  const [state, setState] = useState(false);
  // const [user, setUsers] = useState("test");

  // if (!user) {
  //   return <Navigate to="/homeStayHome" replace={true} />;
  // }
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
        <div className="header">
          <div class="d-flex justify-content-center m-auto p-0">
            <img src={blueMoonIMG} alt="bluemoon img" style={{  padding: "2px", marginLeft: "154px" }} width={80} height={80} />

            <div class="list m-auto p-0">
              <div class="unoderlist header-color d-flex align-items-center  text-dark">
              
                  {/* {/ <a href="">Home</a> /} */}
                  <NavLink
                    // style={handleStyle}
                    to={"/homeStayHome"}
                    style={({ isActive }) => {
                      return  { 
                        textDecoration: isActive? 'none':'none',
                        color : isActive ? 'rgb(39, 187, 216)' : 'rgb(39, 187, 216)'
                      };
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
                        color : isActive ? 'rgb(39, 187, 216)' : 'rgb(39, 187, 216)'
                      };
                    }}
                  >About Us</NavLink>
              
              
                  {/* {/ <a href="">Room</a> /} */}
                  <NavLink 
                  to={"/stay"}
                  style={({ isActive }) => {
                      return  { 
                        textDecoration: isActive? 'none':'none',
                        color : isActive ? 'rgb(39, 187, 216)' : 'rgb(39, 187, 216)'
                      };
                    }}
                  >Room</NavLink>
                
               
                  {/* {/ <a href="">Contact Us</a> /} */}
                  <NavLink 
                  to={"/Gallery1"}
                  style={({ isActive }) => {
                      return  { 
                        textDecoration: isActive? 'none':'none',
                        color : isActive ? 'rgb(39, 187, 216)' : 'rgb(39, 187, 216)'
                      };
                    }}
                  >Gallery</NavLink>
              
             
                  {/* <a href="">Amenities</a> */}
                  <NavLink to={"/aboutus"}
                  style={({ isActive }) => {
                      return  { 
                        textDecoration: isActive? 'none':'none',
                        color : isActive ? 'rgb(39, 187, 216)' : 'rgb(39, 187, 216)'
                      };
                    }}
                  >Contact Us</NavLink>
              
                <button
                  type="submit"
                  class="button_style--modify"
                  onClick={()=>navigate('/')}
                >
                  BLUEMOON HOMESTAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" header2 ">
        <div class="d-flex justify-content-between p-2">
          <img
            src={blueMoonIMG}
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
              <a href="/homeStayHome">Home</a>
            </li>
            <li class="num">
              <a href="/aboutus">About Us</a>
            </li>
            <li class="num">
              <a href="/stay">Room</a>
            </li>
            <li class="num">
              <a href="/Gallery1">Gallery</a>
            </li>
            <li class="num">
              <a href="/aboutus">Contact Us</a>
            </li>
            <button
              type="button"
              class="button_style--modify"
              onClick={()=>navigate('/')}            >
              BLUEMOON HOMESTAY
            </button>
          </ul>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Header1;
