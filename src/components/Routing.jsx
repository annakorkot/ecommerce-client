import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import ProductList from './ProductList';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
import Profile from './Profile';

function Routing() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile' element={<Profile/>}></Route>

      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default Routing;