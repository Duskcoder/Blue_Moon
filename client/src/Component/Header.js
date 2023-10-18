import React from 'react';
// import Logo from '../images/blue moon7.jpg'
import { Link } from 'react-router-dom';
const Header = () => {
  return (

    <div className='hello'>

      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid ">
          <div className='col-lg-2'></div>
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='col-lg-1'></div>
            <ul class="navbar-nav me-auto ">
              <li class="nav-item">
                <Link to='/' class="nav-link move" aria-current="page">Home</Link>
              </li>
              <li class="nav-item">
                <Link to='/about' class="nav-link move">About Us</Link>
              </li>
              <li class="nav-item">
                <Link to='/rooms' class="nav-link move">Rooms</Link>
              </li>
              <li class="nav-item">
                <Link to='/contact' class="nav-link move" >Contact Us</Link>
              </li>
              <li class="nav-item">
                <Link to='/amenities' class="nav-link move">Amenities</Link>
              </li>

            </ul>

          </div>
          <form class="d-flex" role="search">

            <button class="btn btn-head" type="submit">BlueMoon HomeStay</button>
          </form>
          <div className='col-lg-2'></div>
        </div>
      </nav>
    </div>

  )
}

export default Header