import React from 'react';
// import Logo from '../images/blue moon7.jpg'

export const Header = () => {
  return (

    <div className='hello'>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
                <a class="nav-link move" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link move" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link move" href="#">Rooms</a>
              </li>
              <li class="nav-item">
                <a class="nav-link move" href="#">Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link move" href="#">Amenities</a>
              </li>

            </ul>

          </div>
          <form class="d-flex" role="search">

            <button class="btn btn-head" type="submit">BlueMoon HomeStay</button>
          </form>
          <div className='col-lg-1'></div>
        </div>
      </nav>
    </div>

  )
}
