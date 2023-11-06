import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
function Adminview() {

  const { id } = useParams(); // Get the 'id' from the URL parameters
  const [value, setValue] = useState({}); // Initialize 'value' as an object

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/adminpanel/views/${id}`); // Correct the API endpoint URL
        if (response.status === 200) {
          const jsonData = response.data;
          setValue(jsonData);
        }

      } catch (err) {
        console.error(err); // Use console.error to log errors
      }
    }
    fetchdata();
  });


  return (
    <>
      <div className='cards'>
        <div className='mt-5 cardview text-center'>
        <p>Name: {value.name}</p>
        <p>Email: {value.email}</p>
        <p>mobile: {value.phone}</p>
        <p>User Address: {value.user_address}</p>
        <p>Referel id: {value.ref_id}</p>
        <p>Discount point: {value.discount_point}</p>
        <p>Wallet: {value.wallet}</p>

        </div>
      </div>


    </>
  )
}

export default Adminview