import * as React from "react";
import Avatar from "@mui/material/Avatar";

import CssBaseline from "@mui/material/CssBaseline";

import axios from "axios";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  FormHelperText,
  Typography,
} from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Logo from "../../assests/images/LogoDM.png";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Enter the email"),
  password: Yup.string().required("Enter the password"),
});

export default function Login() {
  const [userEmailValid, setUserEmailValid] = React.useState(false);
  const [userPwd, setUserPwd] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();

  // Form submit function
  const onSubmit = async (values) => {
    console.log(values, "sagdhkahsdkjahsdkjhads");
    
    setUserPwd(false);
    setUserEmailValid(false);

    try {
      await axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/admin/login`, {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          console.log(response, "hhhhh");

          // Save the token in local storage or a state variable for future API requests
          const token = response.data.token;
          localStorage.setItem("token", token);
          navigate("/admin/adminpanel");
        })
        .catch((err) => {
          return err;
        });

      // Redirect or perform other actions upon successful login
    } catch (error) {
      console.error("Login error:", error.response.data);
      if (error.response.data == "Password is not match") {
        setUserPwd(true);
      } else if (error.response.data == "No record Existed") {
        setUserEmailValid(true);
      }
    }
  };
  const { values, handleChange, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit:onSubmit,
    });
  // Password show and hide function
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  React.useEffect(() => {
    if (values.email.length > 2 && errors.email != undefined) {
      setUserEmailValid(false);
    }
    if (values.password.length >= 0 && errors.password != undefined) {
      setUserPwd(false);
    }
  }, [errors]);

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper elevation={3}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid sx={{ pt: 5 }}>
              <img src={Logo} alt="Logo" width="90px" />
            </Grid>

            <Typography
              sx={{ mt: 3, fontWeight: "bold" }}
              component="h1"
              variant="h5"
            >
              Admin Login
            </Typography>
            <Box
              spacing={5}
              sx={{ ml: 5, mr: 5, pb: 5, pt: 1 }}
            >
            <form onSubmit={handleSubmit} autoComplete="off">
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  (touched.email && Boolean(errors.email)) || userEmailValid
                }
                helperText={errors.email && touched.email ? errors.email : ""}
                autoComplete="email"
                autoFocus
              />

              <TextField
                label="Password"
                name="password"
                margin="normal"
                type={showPassword ? "text" : "password"} // Toggle password visibility
                fullWidth
                helperText={
                  errors.password && touched.password ? errors.password : ""
                }
                value={values.password}
                error={
                  (touched.password && Boolean(errors.password)) || userPwd
                }
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormHelperText sx={{ color: "#d32f2f" }}>
                {userPwd ? "password is not match" : ""}
              </FormHelperText>
              <Button
                fullWidth
                variant="contained" 
                style={{
                  backgroundColor: "#32582E",
                  padding: "10px 36px",
                  fontSize: "18px",
                }}
                sx={{ mt: 3, mb: 2 }}
                type="submit"
              >
                Login
              </Button>
        </form>
            </Box>
          </Box>
      </Paper>
    </Container>
  );
}
