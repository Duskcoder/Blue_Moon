import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Adminedit() {



    const { id } = useParams();
  const [userData, setUserData] = useState({
    membership_type: '',
    membership_level: '',
    stages: '',
    amount: '',
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/adminpanel/adminlevelview/${id}`)
      .then(res => {
        console.log(res,'data')
        const data = res.data;

        setUserData({
         membership_type: data.membership_type,
         membership_level: data.membership_level,
         stages: data.stages,
         amount: data.amount,
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
        alert('User updated successfully');
        console.log(response,"response")
        // You can redirect to another page or update the UI as needed.
      }
    } catch (error) {
      console.error(error);
      alert('Error updating user');
    }
  };

  return (
    <div className="container mt-3">
      <h2>Edit User</h2>
      <form 
      onSubmit={handleSubmit}
      >
        <div className="mb-3 mt-3">
          <label htmlFor="name">membership_type:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="membership_type"
            name="membership_type"
            value={userData.name}
            onChange={e => setUserData({ ...userData, membership_type: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">membership_level:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="membership_level"
            name="membership_level"
            value={userData.email}
            onChange={e => setUserData({ ...userData, membership_level: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone">stages:</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="stages"
            name="stages"
            value={userData.phone}
            onChange={e => setUserData({ ...userData, stages: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user_address">amount:</label>
          <input
            type="text"
            className="form-control"
            id="user_address"
            placeholder="amount"
            name="amount"
            value={userData.user_address}
            onChange={e => setUserData({ ...userData, amount: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default Adminedit;
