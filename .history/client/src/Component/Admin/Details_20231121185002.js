import React, { useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import axios from "axios";
import Typography from "@mui/material/Typography";
import "../Admin/Details.css";
import { shadows } from "@mui/system";

const Details1 = () => {
    const [data, setData] = useState({
        name: "",
        description: "",
        restrooms: "",
        beds: "",
        bathtub: "",
        adults: "",
        price: "",
        status: "",
    });

    const [selectedImage, setSelectedImage] = useState(null);

    const HandleSubmit = async (e) => {

        e.preventDefault();


        // e.preventDefault();
        // Simple validation
        if (
            !data.name ||
            !data.description ||
            !data.restrooms ||
            !data.beds ||
            !data.bathtub ||
            !data.adults ||
            !data.price ||
            !data.status
        ) {
            // Handle validation error, set appropriate state or show an error message
            return console.log("error insert data")
        }
        else{
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("restrooms", data.restrooms);
        formData.append("beds", data.beds);
        formData.append("bathtub", data.bathtub);
        formData.append("adults", data.adults);
        formData.append("price", data.price);
        formData.append("status", data.status);
        formData.append("cover_img", selectedImage);

        console.log("Form Data:", formData); // Add this line
        // console.log(data,'data')
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        try {
            const response = await axios.post(
                "http://localhost:5000/api/new/room",
                formData,
                config
            );
            console.log(response, "ergaer");
        } catch (error) {
            console.error("Error submitting data:", error.response);
        }
    }
    }
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    return (
        <Container maxWidth="xl" className="mt-5">
            <Typography variant="h4" gutterBottom></Typography>
            <form onSubmit={HandleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} className="">
                        <TextField
                            placeholder="Room Name"
                            label="Room_Name"
                            name="name"
                            fullWidth
                            variant="outlined"
                            type="text"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Description"
                            placeholder="Description"
                            name="description"
                            fullWidth
                            variant="outlined"
                            type="text"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Restroom"
                            placeholder="Restroom"
                            fullWidth
                            variant="outlined"
                            name="restrooms"
                            type="text"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Bed Count"
                            placeholder="Bed_Count"
                            fullWidth
                            variant="outlined"
                            name="beds"
                            type="text"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Bathtub"
                            placeholder="Bathtub"
                            fullWidth
                            variant="outlined"
                            name="bathtub"
                            type="text"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Adults"
                            placeholder="no.of adults"
                            fullWidth
                            variant="outlined"
                            name="adults"
                            type="text"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Pricing"
                            placeholder="Pricing"
                            fullWidth
                            variant="outlined"
                            name="price"
                            type="text"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Room availability"
                            placeholder="Room_Availability"
                            fullWidth
                            variant="outlined"
                            name="status"
                            type="text"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} className="d-flex justify-content-center">
                        <TextField
                            placeholder="photo"
                            onChange={handleImageUpload}
                            type="file"
                            name="cover_img"
                            accept="image/*"
                        />
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="m-auto d-flex mt-3"                    
                >
                    Submit
                </Button>
            </form>
        </Container>

    );

}
export default Details;