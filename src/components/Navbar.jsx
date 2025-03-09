import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/orderSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  
  const { email } = useSelector((state) => state.orderSlice)

  const dispatch = useDispatch()
  const navigate= useNavigate()
 
  
  const handleLogout =()=> {
       dispatch(deleteUser())

       navigate("/login")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: "lightblue"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Global News
          </Typography>
          {email ? (
            <Button onClick={handleLogout} color="inherit">Logout</Button>
          ) : (
            <Button  sx={{color:"white", backgroundColor: "lightblue"}}>Signup</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar
