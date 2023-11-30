import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';

import NavItem from 'react-bootstrap/esm/NavItem';
import axios from 'axios';
// import FootSection from './footSection';

function StandardRoom() {
  const { state } = useLocation();

  const [data, setcount] = useState({
    check_in: "",
    check_out: "",
    room_name: state.name,
    adults: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });


  


  const handleChange = (e) => {
    // setcount(e.target.value)
    // console.log(e.target.value, "efeuhe")
    const newObj={...data,[e.target.name]:e.target.value}
    setcount(newObj)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Current Data:", data);
  
    if (
      !data.check_in ||
      !data.check_out ||
      !data.room_name ||
      !data.adults ||
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.address
    ) {
      // Handle validation error, set appropriate state or show an error message
      return console.log("error insert data");
    } else {
      const jsonData = {
        check_in: data.check_in,
        check_out: data.check_out,
        room_name: data.room_name,
        adults: data.adults,
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
      };
  
      console.log("JSON Data:", jsonData);
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const response = await axios.post(
          "http://localhost:5000/api/new/book",
          jsonData,
          config
        );
        console.log(response, "ergaer");
      } catch (error) {
        console.error("Error submitting data:", error.response);
      }
    }
  };
  
  

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <div className='header-h'>
        <div className='row'>
          <div className='paper col-md-6 col-lg-12'>
            <h1 className='text-light'>STANDARDROOM <br /><p className=''>Room </p></h1>
            {/* <div className='d-flex wow'>
          <div className='col-6 text-center text-light'>
            <h2>Adults-2</h2>
          </div>
          <div className='col-6 text-light'>
            <h2>Queen Beds-1</h2>
          </div>
        </div> */}
          </div>
        </div>
      </div>

      <div className='section d-flex mt-3'>
        <h5>Blue Moon Homestay <i class="bi bi-chevron-right"></i> </h5>
        <h5 className='ms-5'>Home</h5>
        <h5 className='ms-5'>Room </h5>
      </div>

      <div className=' mt-5  '>
        <h2 className='quees mb-5 text-center'>Your Booking Details</h2>

        <div className='row fruit d-flex justify-content-evenly shadow-lg p-3 mb-5 bg-body rounded'>
          <div className='col-lg-3 col-md-6 seed mt-3 text-center'>
            <FloatingLabel controlId="floatingSelect" label="Check -in Date">
              <input type="date" class="form-control" id="meeting-date" name="check_in" required onChange={handleChange} />

            </FloatingLabel>
          </div>
          <div className='col-lg-3 col-md-6 seed  mt-3'>
            <FloatingLabel controlId="floatingSelect" label="Check -out Date">
              <input type="date" class="form-control " id="meeting-date" name="check_out" required onChange={handleChange} />
            </FloatingLabel>
          </div>
          <div className='col-lg-2 col-md-6 seed  mt-3'>
            <FloatingLabel controlId="floatingSelect"  label="Guest">
            <input type="number" class="form-control" name="adults" required onChange={handleChange} />

              
            </FloatingLabel>
          </div>
          <div className='col-lg-2 col-md-6  '>
            <h3>Room Name</h3>
            <p>{state.name}</p>
            <input type="hidden" name="room_name" value={state.name} />
          </div>
          <div className='col-lg-2 col-md-6  '>
            <h2>Price</h2>
            <p>{state.price}</p>
          </div>
        </div>
      </div>
     
        <div className='row d-flex mt-5 d-flex justify-content-evenly'>
          <h2 className='mt-2 mb-5 text-center quees'>Enter Your Details</h2>
          <div className='mum col-lg-6 col-md-12'>
            {/* <h5> Name</h5> */}
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control type="Name" placeholder="Name" name="name" onChange={handleChange} />
            </FloatingLabel>
          </div>
          <div className='col-lg-6  col-md-12'>
            {/* <h5 className='mum'>Phone Number</h5> */}
            <FloatingLabel controlId="floatingPhone Number" label="Phone Number">
              <Form.Control type="Phone Number" placeholder="Phone Number" name="phone" onChange={handleChange} />
            </FloatingLabel>

          </div>
        </div>

        <div className='row d-flex mt-5 d-flex justify-content-evenly'>
          <div className='mum col-lg-6 col-md-12'>
            {/* <h5>Email Address</h5> */}

            <FloatingLabel
              controlId="floatingInput"
              label="Email Address"
              className="mb-3"
            >
              <Form.Control type="Email Address" placeholder="Email Address" name="email" onChange={handleChange} />
            </FloatingLabel>
          </div>
          <div className='mum col-lg-6 col-md-12'>
            {/* <h5 > Address</h5> */}
            <FloatingLabel controlId="floatingAddress" label=" Address">
              <Form.Control type="Address" placeholder="Address" name="address" onChange={handleChange} />
            </FloatingLabel>

          </div>
          <div class="form-check mt-5 ms-4">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault1">
              I Agree with Terms and Condition
            </label>
          </div>
          <div class="form-check mt-3 ms-4">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label class="form-check-label" for="flexRadioDefault2">
              I Agree with Cancellation Policy
            </label>
          </div>

        </div>
        <div className='row mt-5 col-12 mb-5'>
          <div className="d-grid ">
            <Button variant="success" size="lg" type='submit' >
              Submit
            </Button>
          </div>
        </div>
      </form>
      {/* <FootSection /> */}
    </div>




  )
}

export default StandardRoom