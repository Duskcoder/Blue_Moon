import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Component/Header";
import { AboutUs } from "./Component/AboutUs";
// import  AboutUs from "./Component/AboutUs"
import "./App.css";
// import Footer from "./Component/Footer";
import { ContactUs } from "./Component/ContactUs";
import { Amenities } from "./Component/Amenities";
import Home from "./Component/Home";

import Rooms from "./Component/Rooms/Rooms";
import RoomStay from "./Component/RoomStay/RoomStay";
import HomeStay from "./Component/HomeStay/HomeStay";
import ViewDev from "./Component/ViewAll/ViewDev";
import { ContactUs1 } from "./Component/ContactUs1";
import { AboutUs1 } from "./Component/AboutUs1";
import Adminpanel from "./Component/Admin/adminpanel";
import Level from "./Component/Admin/Level";
import Addrooms from "./Component/Admin/Addrooms";
import HomeStayHome from "./Component/HomeStay/HomeStayHome";
import CardBox from "./Component/Gallery/Gallery";
import Details1 from "./Component/Admin/Details1";
import UpdateRoom from "./Component/Admin/UpdateRoom";
import StandardRoom from "./Component/Booking/standardRoom";
import SignIn from "./Component/loginValidation/login_Form";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Rooms />} />
        <Route path="/stay" element={<RoomStay />} />
        <Route path="/homestay" element={<HomeStay />} />
        <Route path="/viewdev" element={<ViewDev />} />

        <Route path="/login_Form" element={<SignIn />} />
        <Route path="/contact1" element={<ContactUs1 />} />
        <Route path="/HomeStayHome" element={<HomeStayHome />} />
        <Route path="/about1" element={<AboutUs1 />} />
        <Route path="/Admin" element={<Adminpanel />} />
        <Route path="/level" element={<Level />} />
        <Route path="/details" element={<Details1 />} />
        <Route path="/updateroom/:id" element={<UpdateRoom />} />
        <Route path="/addrooms" element={<Addrooms />} />
        <Route path="/booknow" element={<StandardRoom />} />
        {/* <Route path="/details" element={<Details/>}/> */}
        {/* <Footer/> */}
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
