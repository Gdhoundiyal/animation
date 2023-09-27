import {
  Box,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { findUserByEmail } from "./userslice";

function Pagelogin() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const redirect = useNavigate();

  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isLoginSuccessful = user.some((user) => {
      return (
        formData.useremail === user.email && formData.password === user.password
      );
    });

    if (isLoginSuccessful) {
      alert("Login successful");
      dispatch(findUserByEmail(formData.useremail));
      redirect("/Aboutus");
      formData.useremail = "";
      formData.password = "";
    } else {
      alert("Login failed. Please check your credentials.");
      formData.useremail = "";
      formData.password = "";
    }
  };

  return (
    <>
      <Container>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="UserName"
            name="useremail"
            autoComplete="email"
            autoFocus
            value={formData.useremail}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        {/* <Aboutus /> */}
      </Container>
    </>
  );
}

export default Pagelogin;
