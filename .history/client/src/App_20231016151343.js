import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Component/Header";
import { AboutUs } from "./Component/AboutUs";
// import  AboutUs from "./Component/AboutUs"
import "./App.css";
import Footer from "./Component/Footer";
import Home from "./Component/Home";


function App() {
  return (
<<<<<<< HEAD
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
=======
    <div >
    <BrowserRouter>
    <Routes>
      <Route path='/about' element={<AboutUs/>}/>
      {/* <Footer/> */}
    </Routes>
    
    </BrowserRouter>
>>>>>>> 1220609148e0e27544662500a62f8fc570d13a43
    </div>
  );
}

export default App;
