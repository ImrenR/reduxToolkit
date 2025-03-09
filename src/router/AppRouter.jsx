import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import News from '../pages/News';

const AppRouter = () => {
  return (
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<News/>}/>
      <Route path='/login' element={<Login/>}     />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter