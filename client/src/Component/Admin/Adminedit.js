import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Adminedit() {

const { id } = useParams();
const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    user_address: '',
    ref_id: '',
    discount_point: '',
    wallet: ''
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/adminpanel/views/${id}`)
      .then(res => {
        console.log(res,'data')
        const data = res.data;
        
        setUserData({
          name: data.name,
          email: data.email,
          phone: data.phone,
          user_address: data.user_address,
          ref_id: data.ref_id,
          discount_point: data.discount_point,
          wallet: data.wallet,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/adminpanel/update/${id}`, userData);
      if (response.status === 200) {
        showToast("updated successful");
        navigate("/adminpanel")
        console.log(response,"response")
        // You can redirect to another page or update the UI as needed.
      }
    } catch (error) {
      console.error(error);
    }
  };

  const showToast = (message, isError = false) => {
    toast[isError ? 'error' : 'success'](message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
    });
};




  return (
    <div className="container adminedit w-50 mt-5">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            name="name"
            value={userData.name}
            onChange={e => setUserData({ ...userData, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={userData.email}
            onChange={e => setUserData({ ...userData, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone">Number:</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter number"
            name="phone"
            value={userData.phone}
            onChange={e => setUserData({ ...userData, phone: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user_address">User Address:</label>
          <input
            type="text"
            className="form-control"
            id="user_address"
            placeholder="Enter address"
            name="user_address"
            value={userData.user_address}
            onChange={e => setUserData({ ...userData, user_address: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ref_id">Referral ID:</label>
          <input
            type="text"
            className="form-control"
            id="ref_id"
            placeholder="Enter referral ID"
            name="ref_id"
            value={userData.ref_id}
            onChange={e => setUserData({ ...userData, ref_id: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="discount_point">Discount Point:</label>
          <input
            type="text"
            className="form-control"
            id="discount_point"
            placeholder="Enter discount point"
            name="discount_point"
            value={userData.discount_point}
            onChange={e => setUserData({ ...userData, discount_point: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="discount_point">Discount Point:</label>
          <input
            type="text"
            className="form-control"
            id="discount_point"
            placeholder="Enter discount point"
            name="wallet"
            value={userData.wallet}
            onChange={e => setUserData({ ...userData, wallet: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update User</button>
      </form>
    </div>
  );
}

export default Adminedit;
