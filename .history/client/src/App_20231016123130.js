import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Component/Header";
import { AboutUs } from "./Component/AboutUs";
// import  AboutUs from "./Component/AboutUs"
import "./App.css";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/home"
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
