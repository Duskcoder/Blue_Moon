import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .matches(
          /^[a-zA-Z][a-zA-Z0-9]*[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        ),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-zA-Z])[a-zA-Z][a-zA-Z0-9]*[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$.{6,}$/
        ),
    }),

    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <Container
      className="gee shadow-lg p-3 mb-5 bg-body rounded py-4 mt-5"
      component="main"
      maxWidth="xs"
    >
      <Box className="guer mx-auto">
        <img
          className="img-responsive"
          src={require("../../images/bluemoon7.jpg")}
          alt=""
          width="40%"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography component="h1" variant="h5">
          Log-in
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email "
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log in
          </Button>
          <Grid container></Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
