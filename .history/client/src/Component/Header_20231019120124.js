import React from 'react';
// import Logo from '../images/blue moon7.jpg'
import { Link } from 'react-router-dom';
const Header = () => {
  return (

    <div className='hello'>

      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <div className='col-lg-2'></div>
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='col-lg-1'></div>
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link to='/' className="nav-link move" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link move">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to='/rooms' className="nav-link move">Rooms</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link move" >Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to='/amenities' className="nav-link move">Amenities</Link>
              </li>

            </ul>

          </div>
          <form className="d-flex" role="search">

            <button className="btn btn-head" type="submit">BlueMoon HomeStay</button>
          </form>
          <div className='col-lg-2'></div>
        </div>
      </nav>
    </div>

  )
}

export default Header