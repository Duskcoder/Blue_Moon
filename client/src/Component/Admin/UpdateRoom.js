import React, { useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import axios from "axios";
import Typography from "@mui/material/Typography";
import "../Admin/Details.css";
import { BsCloudArrowUp } from 'react-icons/bs';
import { shadows } from "@mui/system";
import { useNavigate, useParams } from 'react-router-dom';
import { ImageUploader } from '../Admin/ImageUploader';

const UpdateRoom = () => {

    const { id } = useParams();
    const navigate = useNavigate();



    const [data, setData] = useState({
        name: '',
        description: '',
        restrooms: '',
        beds: '',
        bathtub: '',
        adults: '',
        price: '',
        status: '',
        cover_img: '',
    });

    // const [selectedImage, setSelectedImage] = useState();
    // const [previousImageName, setPreviousImageName] = useState();


    // const handleImageUpload = (e) => {
    //     setSelectedImage(e.target.files[0]);
    //     // console.log(setPreviousImageName,"igjehbrighqer")
    // };

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };


    useEffect(() => {
        axios
            .get("http://localhost:5000/api/new/showroom/" + id)
            .then(res => {
                const response = res.data;
                // const cover_img = res.data.cover_img;

                console.log(response, 'res')
                setData(response)
                // setPreviousImageName(response.cover_img || "");
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        // console.log(data, "data##############################")
    }, [])

    // const formDataToJson = (formData) => {
    //     const jsonData = {};
    //     formData.forEach((value, key) => {
    //       jsonData[key] = value;
    //     });
    //     return jsonData;
    //   };

    // ...

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                `http://localhost:5000/api/new/room/${id}`,
                data
            );

            navigate('/admin');
            console.log(response, "ergaer3eeeee");
        } catch (error) {
            console.error("Error submitting data:", error.response);
        }
    };
    const imageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        try {
            const imageData = await ImageUploader(file);
            const formData = new FormData();
            formData.append('cover_img', file)
            const response = await axios.put(
                `http://localhost:5000/api/new/image/update/${id}`, formData
            );
            setData((prev) => {
                return {
                    ...prev,
                    imagepath: response.data.imagePath,
                    imageData: imageData,
                }
            })
        } catch (error) {
            console.error('Error uploading image: ', error);
        }

    }


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
                    <label className='p-3  d-flex  justify-content-center mt-4 border' for="image" >
                            <div>
                                <b>Image Upload</b>
                                <div className=' fs-1  w-full bg-white d-flex text-dark justify-content-center align-item-center'>
                                    {data.cover_img ? (
                                                <img src={`http://localhost:5000/${data.cover_img}`} width={"25%"} />
                                    ) : (
                                        <span className=' '>
                                            <BsCloudArrowUp />
                                        </span>
                                    )}
                                    <input type={"file"} id="image" accept='image/*' hidden onChange={imageUpload} name="image" />

                                </div>
                            </div>
                        </label>
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
