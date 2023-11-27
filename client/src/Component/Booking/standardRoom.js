import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FootSection from './footSection';

function StandardRoom() {
  const [count, setcount] = useState(0);
  return (
    <div className='container'>
      <div className='header-h'>
        <div className='row'>
        <div className='paper col-md-6 col-lg-12'>
          <h1 className='text-light'>STANDARDROOM <br /><p className='ms-5'>Room </p></h1>
          <div className='d-flex wow'>
          <div className='col-6 text-center text-light'>
            <h2>Adults-2</h2>
          </div>
          <div className='col-6 text-light'>
            <h2>Queen Beds-1</h2>
          </div>
        </div>
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
              <input type="date" class="form-control" id="meeting-date" name="meeting-date" required />

            </FloatingLabel>
          </div>
          <div className='col-lg-3 col-md-6 seed  mt-3'>
            <FloatingLabel controlId="floatingSelect" label="Check -out Date">
              <input type="date" class="form-control " id="meeting-date" name="meeting-date" required />
            </FloatingLabel>
          </div>
          <div className='col-lg-2 col-md-6 seed  mt-3'>
            <FloatingLabel controlId="floatingSelect" label="Guest">
              <Form.Select aria-label="Floating label select example">
                <option></option>
                <option value="1">1 Adults</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="3">4 Adults</option>
              </Form.Select>
            </FloatingLabel>
          </div>
          <div className='col-lg-2 col-md-6 seed  mt-3'>
            <FloatingLabel
              controlId="floatingInput"
              label="Room"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Room" />
            </FloatingLabel>
          </div>
          <div className='col-lg-2 col-md-6  '>
            <h2>Price</h2>
            <p>{count}</p>
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
            <Form.Control type="Name" placeholder="Name" />
          </FloatingLabel>
        </div>
        <div className='col-lg-6  col-md-12'>
          {/* <h5 className='mum'>Phone Number</h5> */}
          <FloatingLabel controlId="floatingPhone Number" label="Phone Numbe">
            <Form.Control type="Phone Number" placeholder="Phone Number" />
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
            <Form.Control type="Email Address" placeholder="Email Address" />
          </FloatingLabel>
        </div>
        <div className='mum col-lg-6 col-md-12'>
          {/* <h5 > Address</h5> */}
          <FloatingLabel controlId="floatingAddress" label=" Address">
            <Form.Control type="Address" placeholder="Address" />
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
      <div className='row mt-5 col-12'>
        <div className="d-grid ">
          <Button variant="success" size="lg">
            All Done Let's Make Payment
          </Button>
        </div>
      </div>

      <FootSection />
    </div>



  )
}

export default StandardRoom