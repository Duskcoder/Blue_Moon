import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Component/Header";
import { AboutUs } from "./Component/AboutUs";
// import  AboutUs from "./Component/AboutUs"
import "./App.css"
import Footer from './Component/Footer';
import { ContactUs } from './Component/ContactUs';


function App() {
  return (
    <div >
      <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path="/home" element
      {/* <Footer/> */}
    </Routes>
    
    </BrowserRouter> 
    <Footer/>
    </div>
  );
}

export default App;
