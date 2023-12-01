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
import { useNavigate, useParams } from 'react-router-dom';

const UpdateRoom = () => {

    const { id } = useParams();
    const navigate = useNavigate();



    const [data, setData] = useState({
        name: "",
        description: "",
        restrooms: "",
        beds: "",
        bathtub: "",
        adults: "",
        price: "",
        status: "",
        cover_img: ""

    });

    const [selectedImage, setSelectedImage] = useState();
    const [previousImageName, setPreviousImageName] = useState("");


    const handleImageNameChange = (e) => {
        setPreviousImageName(e.target.value);
        console.log(setPreviousImageName,"igjehbrighqer")
      };

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
        // const imageName = file ? file.name : '';
        // setData({
        //     ...data,
        //     cover_img: imageName,
        // });
    };

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/new/showroom/" + id)
            .then(res => {
                const response = res.data;
                // const cover_img = res.data.cover_img;

                console.log(response, 'res')
                setData(response)
                setPreviousImageName(response.cover_img || "");
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        console.log(data, "data##############################")
    }, [])

    const formDataToJson = (formData) => {
        const jsonData = {};
        formData.forEach((value, key) => {
          jsonData[key] = value;
        });
        return jsonData;
      };
      
      // ...
      
      const handleUpdate = async (e) => {
        e.preventDefault();
      
        // If no new file is selected, use the previous image name
        const coverImageName = selectedImage ? selectedImage.name : previousImageName;
      
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("restrooms", data.restrooms);
        formData.append("beds", data.beds);
        formData.append("bathtub", data.bathtub);
        formData.append("adults", data.adults);
        formData.append("price", data.price);
        formData.append("status", data.status);
        formData.append("cover_img", coverImageName);
      
        const jsonData = formDataToJson(formData);
      
        console.log("JSON Data:", jsonData); // Debug statement
      
        const config = {
          headers: {
            "Content-Type": "application/json", // Adjust the content type
          },
        };
      
        try {
          const response = await axios.put(
            `http://localhost:5000/api/new/room/${id}`,
            jsonData,
            config
          );
      
          navigate('/admin');
          console.log(response, "ergaer3eeeee");
        } catch (error) {
          console.error("Error submitting data:", error.response);
        }
      };
      



    return (
        <Container maxWidth="xl" className="mt-5">
            <Typography variant="h4" gutterBottom></Typography>
            <form onSubmit={handleUpdate}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} className="">
                        <TextField
                            placeholder="Room Name"
                            label="Room_Name"
                            name="name"
                            fullWidth
                            variant="outlined"
                            type="text"
                            value={data.name}
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
                            value={data.description}
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
                            value={data.restrooms}
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
                            value={data.beds}
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
                            value={data.bathtub}
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
                            value={data.adults}
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
                            value={data.price}
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
                            value={data.status}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} className="d-flex justify-content-center">
                        <TextField
                            placeholder="photo"
                            type="text"
                            value={selectedImage ? selectedImage.name : previousImageName}
                            onChange={handleImageNameChange}
                        />
                        <label htmlFor="cover_img" className="file-label">
                            Choose File
                        </label>
                        <input
                            id="cover_img"
                            type="file"
                            name="cover_img"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="file-input"
                        />
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="m-auto d-flex mt-3"
                >
                    Update
                </Button>
            </form>
        </Container>

    );

}
export default UpdateRoom;
