import React, { useState, useContext, useEffect } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import NavItem from 'react-bootstrap/esm/NavItem';
import axios from 'axios';
// import FootSection from './footSection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import '../Booking/Booking.css';


function StandardRoom() {
  const [room, setRoom] = useState('');
  const { id } = useParams();


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      phone: '',
      check_in: '',
      check_out: '',

    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .matches(
          /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
          'Invalid name format. Only letters, spaces, and specific characters are allowed.'
        ),
      email: Yup.string()
        .required('Email is required')
        .matches(
          /^[a-zA-Z][a-zA-Z0-9]*[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          'Invalid email format'
        ),
      address: Yup.string().required('Address is required'),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
        .required('Phone number is required'),
      check_in: Yup.string().required('Date is Required').nullable(),
      check_out: Yup.string().required('Date is Required').nullable(),


    }),
    onSubmit: (values) => {
      const data = {
        ...values, adults: room.adults,
        room_name: room.name
      }

      axios.post("http://localhost:5000/api/new/book", data)
        .then(res => console.log(res.data, 'kkk'))
        .catch(err => console.log(err))
    },
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/new/showroom/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setRoom(data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchData();
  }, [id]);


  return (
    <div className='container'>
      <Header />
      <h2>Booking Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='header-h'>
          <div className='row'>
            <div className='paper col-md-6 col-lg-12'>
              <h1 className='text-light'>STANDARDROOM <br /><p className=''>Room </p></h1>
            </div>
          </div>
        </div>

        {/* <div className='section d-flex mt-3'>
          <h5>Blue Moon Homestay <i className="bi bi-chevron-right"></i> </h5>
          <h5 className='ms-5'>Home</h5>
          <h5 className='ms-5'>Room </h5>
        </div> */}

        <div className=' mt-5  '>
          <h2 className='quees mb-5 text-center'>Your Booking Details</h2>
          <div className='row fruit d-flex justify-content-evenly shadow-lg p-3 mb-5 bg-body rounded'>
            <div className='col-lg-3 col-md-6 seed mt-3 text-center'>
              <FloatingLabel controlId="floatingSelect" label="Check -in Date">
                <input type="date" className="form-control" id="meeting-date" name="check_in" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.check_in} />
                {formik.errors.check_in && formik.touched.check_in ? (<div style={{ color: 'red' }}>{formik.errors.check_in}</div>) : ''}
              </FloatingLabel>
            </div>
            <div className='col-lg-3 col-md-6 seed  mt-3'>
              <FloatingLabel controlId="floatingSelect" label="Check -out Date">
                <input type="date" className="form-control" id="meeting-date" name="check_out" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.check_out} />
                {formik.errors.date1 && formik.touched.check_out ? (<div style={{ color: 'red' }}>{formik.errors.check_out}</div>) : ''}
              </FloatingLabel>
            </div>
            <div className='col-lg-2 col-md-6 seed  mt-3'>
              <FloatingLabel controlId="floatingSelect" label="Guest">
                <input type="number" className="form-control" name="guest" value={room.adults} />



              </FloatingLabel>
            </div>
            <div className='col-lg-2 col-md-6  '>
              <h3>Room Name</h3>
              {/* <p>{b.name}</p> */}
              <p>{room.name}</p>

              <input type="hidden" name="room_name" />
            </div>
            <div className='col-lg-2 col-md-6  '>
              <h2>Price</h2>
              <p>{room.price}</p>
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
              <Form.Control type="text" placeholder="Name" name="name" onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (<div style={{ color: 'red' }}>{formik.errors.name}</div>) : ""}
            </FloatingLabel>
          </div>
          <div className='col-lg-6  col-md-12'>
            {/* <h5 className='mum'>Phone Number</h5> */}
            <FloatingLabel controlId="floatingPhone Number" label="Phone Number">
              <Form.Control type="Phone Number" placeholder="Phone Number" name="phone" onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (<div style={{ color: 'red' }}>{formik.errors.phone}</div>) : ""}
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
              <Form.Control type="Email Address" placeholder="Email Address" name="email" onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (<div style={{ color: 'red' }}>{formik.errors.email}</div>) : ""}
            </FloatingLabel>
          </div>
          <div className='mum col-lg-6 col-md-12'>
            {/* <h5 > Address</h5> */}
            <FloatingLabel controlId="floatingAddress" label=" Address">
              <Form.Control type="Address" placeholder="Address" name="address" onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (<p style={{ color: 'red' }}>{formik.errors.address}</p>) : ""}
            </FloatingLabel>

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

      <Footer />

      {/* <FootSection /> */}
    </div>

  )
}

export default StandardRoom