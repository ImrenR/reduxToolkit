import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Button } from "bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "../features/orderSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  
  const { email } = useSelector((state) => state.orderSlice);
  const navigate= useNavigate()
  const dispatch = useDispatch()
  
  const handleLogout =(e)=> {
       dispatch(deleteUser())

       navigate("/login")
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {email ? (
            <Button onClick={handleLogout} color="inherit">Logout</Button>
          ) : (
            <Button color="inherit">Signup</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
