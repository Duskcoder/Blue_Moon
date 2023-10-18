import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Header  from "./Component/Header";
import { AboutUs } from "./Component/AboutUs";
// import  AboutUs from "./Component/AboutUs"
import "./App.css"
import Footer from './Component/Footer';
import { ContactUs } from './Component/ContactUs';
import { Amenities } from "./Component/Amenities";


function App() {
  return (
    <div >
      <Header/>

    <Routes>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path="/amenities" element={<Amenities/>}/>
      {/* <Footer/> */}
    </Routes>
    
    <Footer/>
    </div>
  );
}

export default App;
