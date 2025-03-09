import React from 'react'
import {Avatar, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { createUser} from '../features/orderSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  let {email,password}= useSelector((state)=>state.orderSlice)
  
  const navigate = useNavigate()
 
  const dispatch = useDispatch ()

  const handleSubmit = (e)=> {
    e.preventDefault()

    dispatch(createUser({email,password}))

    navigate("/")
  }


  return (
    <Container component="main" maxWidth="xs">
      <Box onSubmit={handleSubmit}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt=""
          src=""
          sx={{ width: 100, height: 100 }}
        />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=>(email=e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e)=>(password=e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
            
          >
            Sign In
          </Button>
        </Box>
      </Box>

      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://www.linkedin.com/in/imrenr/">
          Link
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}

export default Login