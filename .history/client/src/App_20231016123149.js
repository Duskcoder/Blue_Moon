import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Component/Header";
import { AboutUs } from "./Component/AboutUs";
// import  AboutUs from "./Component/AboutUs"
import "./App.css";
import Footer from "./Component/Footer";
import Home from "./Component/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/home" element={<Home/>}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
