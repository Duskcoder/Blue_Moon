// import React,{useState} from "react";
// // import Logo from '../images/blue moon7.jpg'
// // import { Link, useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// // import NavDropdown from "react-bootstrap/NavDropdown";
// import blueMoonIMG from "../images/blue moon7.jpg";
// import { Navigate } from "react-router-dom";
// const Header = () => {
//   const [open,setOpen]=useState(false)
//   const[user,setUsers]=useState('test')

//   if(!user){
//     return <Navigate to='/homeStayHome' replace={true}/>
//   }

//   return (

//     <div className="hello">
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container className="justify-content-lg-center">
//           <div className="d-lg-flex ">
//             <Navbar.Brand href="#">
//               <img src={blueMoonIMG} alt="" width={80} height={80} />
//             </Navbar.Brand>

//               <Nav
//                 className="me-auto my-2 my-lg-0"
//                 style={{ maxHeight: "100px" }}
//               >
//                 <Nav.Link href="/">Home</Nav.Link>
//                 <Nav.Link href="/about1">About Us</Nav.Link>
//                 <Nav.Link href="/Room">Rooms</Nav.Link>
//                 <Nav.Link href="/contact">Contact Us</Nav.Link>
//                 <Nav.Link href="/amenities">Amenities</Nav.Link>
//               </Nav>
//               <Form>
//                 <Button variant="outline-success" onClick={()=>setUsers(null)}>BLUEMOON HOMESTAY</Button>
//               </Form>
//           </div>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import blue from "../images/blue moon bungalow logo1.jpg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

import { Navigate } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);
  const [user, setUsers] = useState("test");

  if (!user) {
    return <Navigate to="/homeStayHome" replace={true} />;
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
        <div className="header">
          <div class="d-flex justify-content-center m-auto p-0">
            <img src={blue} alt="bluemoon img" style={{  padding: "2px", marginLeft: "154px" }} width={80} height={80} />

            <div class="list m-auto p-0">
              <div class="unoderlist header-color d-flex align-items-center  text-dark">
              
                  {/* {/ <a href="">Home</a> /} */}
                  <NavLink
                    // style={handleStyle}
                    to={"/"}
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
                  to={"/about1"}

                  style={({ isActive }) => {
                      return  { 
                        textDecoration: isActive? 'none':'none',
                        color : isActive ? 'rgb(39, 187, 216)' : 'rgb(39, 187, 216)'
                      };
                    }}
                  >About Us</NavLink>
              
              
                  {/* {/ <a href="">Room</a> /} */}
                  <NavLink 
                  to={"/Room"}
                  style={({ isActive }) => {
                      return  { 
                        textDecoration: isActive? 'none':'none',
                        color : isActive ? 'rgb(39, 187, 216)' : 'rgb(39, 187, 216)'
                      };
                    }}
                  >Room</NavLink>
                
               
                  {/* {/ <a href="">Contact Us</a> /} */}
                  <NavLink 
                  to={"/contact"}
                  style={({ isActive }) => {
                      return  { 
                        textDecoration: isActive? 'none':'none',
                        color : isActive ? 'rgb(39, 187, 216)' : 'rgb(39, 187, 216)'
                      };
                    }}
                  >Contact Us</NavLink>
              
             
                  {/* <a href="">Amenines</a> */}
                  <NavLink to={"/amenities"}
                  style={({ isActive }) => {
                      return  { 
                        textDecoration: isActive? 'none':'none',
                        color : isActive ? 'rgb(39, 187, 216)' : 'rgb(39, 187, 216)'
                      };
                    }}
                  >Amenines</NavLink>
              
                <button
                  type="submit"
                  class="button_style--modify"
                  onClick={() => setUsers(null)}
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
              <a href="/">Home</a>
            </li>
            <li class="num">
              <a href="/about1">About Us</a>
            </li>
            <li class="num">
              <a href="/Room">Room</a>
            </li>
            <li class="num">
              <a href="/contact">Contact Us</a>
            </li>
            <li class="num">
              <a href="/amenities">Amenines</a>
            </li>
            <button
              type="button"
              class="button_style--modify"
              onClick={() => setUsers(null)}
            >
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

// import React, { useState } from "react";
// // import logo from "../image/blue moon bungalow logo1.jpg";
// import { IoMenu } from "react-icons/io5";
// import { IoMdClose } from "react-icons/io";
// import {NavLink} from 'react-router-dom';
// import { Navigate } from "react-router-dom";
// import blueMoonIMG from "../images/blue moon7.jpg";

// function Header() {

//   const [open,setOpen]=useState(false)
//   const[user,setUsers]=useState('test')
//   const [state, setState] = useState(false);

//   const handleToggle = () => {
//     setState(!state);
//   };
//   const handleStyle=({isActive})=>{
//     return{
//         backgroundColor: isActive ? "":""
//     }
//   }
//   return (
//     <div>
//     <div className="header">
//         <div class="d-flex justify-content-center ">
//           <img src={blueMoonIMG} alt="bluemoon img" style={{ width: "10%" }} />

//           <div class="list">
//             <ul class="unoderlist d-flex align-items-center mt-5">
//               <li>
//               {/* {/ <a href="">Home</a> /} */}
//               <NavLink style={handleStyle}>Home</NavLink>
//               </li>
//               <li>
//                 {/* {/ <a href=""></a> /} */}
//                 <NavLink>About Us</NavLink>
//               </li>
//               <li>
//                 {/* {/ <a href="">Room</a> /} */}
//                 <NavLink>Room</NavLink>

//               </li>
//               <li>
//                 {/* {/ <a href="">Contact Us</a> /} */}
//                 <NavLink>Contact Us</NavLink>
//               </li>
//               <li>
//                 <a href="">Amenines</a>
//               </li>
//               <button type="submit" class="button_style--modify">
//                 BLUEMOON HOMESTAY
//               </button>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div class="d-none header2 ">
//         <div class="d-flex justify-content-between p-2">
//           <img
//             src={blueMoonIMG}
//             alt="bluemoon img"
//             class="rounded"
//             style={{ width: "30%" }}
//           />

//           <div class="toggle mt-4">
//             <button
//               type="submit"
//               className="button_style p-1"
//               style={{ borderRadius: "20px", outline: "none" }}
//               onClick={handleToggle}
//             >
//               {state ? (
//                 <IoMdClose fontSize={30} color="white" />
//               ) : (
//                 <IoMenu fontSize={30} color="white" />
//               )}
//             </button>
//           </div>
//         </div>
//         <div class="list">
//           <ul
//             class={state ? "unoderlist text-center" : "orderlist text-center"}
//           >
//             <li class="num">
//               <a href="">Home</a>
//             </li>
//             <li class="num">
//               <a href="">About Us</a>
//             </li>
//             <li class="num">
//               <a href="">Room</a>
//             </li>
//             <li class="num">
//               <a href="">Contact Us</a>
//             </li>
//             <li class="num">
//               <a href="">Amenines</a>
//             </li>
//             <button type="button" class="button_style--modify">
//               BLUEMOON HOMESTAY
//             </button>
//           </ul>
//         </div>
//         <div></div>
//       </div>

//      </div>
//   );
// }

// export default Header;
