import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import Axios from 'axios';
import Typography from '@mui/material/Typography';
import '../Admin/Details.css'
import { shadows } from '@mui/system';

const Details = () => {

  const url = '';
  const [data, setData]=useState({
    Room_Name:'',
    Description:'',
    Bathroom_Availability:'',
    Pricing:'',
  Room_Availability:''



  })
  const [nameError, setNameError] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation

  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };


  return (
    <Container maxWidth="xl" className='mt-5'>
      <Typography variant="h4" gutterBottom>

      </Typography>
      <form onSubmit={handleSubmit} >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className=''>

            <TextField
placeholder='Room Name'
              label="Room_Name"
              fullWidth
              variant="outlined"

              type='text'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Description"
              placeholder='Description'
              fullWidth
              variant="outlined"

              type='text'

            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Bathroom availability"
              placeholder='Bathroom_Availability'
              fullWidth
              variant="outlined"

              type='text'

            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Bed Count"
              placeholder='Bed_Count'
              fullWidth
              variant="outlined"

              type='text'

            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Pricing"
              placeholder='Pricing'
              fullWidth
              variant="outlined"

              type='text'

            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Room availability"
              placeholder='Room_Availability'
              fullWidth
              variant="outlined"

              type='text'

            />
          </Grid>
          <Grid item xs={12} sm={12} className='d-flex justify-content-center'>
            <TextField
placeholder='photo'
              onChange={handleImageUpload}
              type='file'

            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit" className='m-auto d-flex mt-3'>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Details;