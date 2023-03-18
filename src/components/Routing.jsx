import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import ProductList from './ProductList';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
import Profile from './Profile';
import RegisterSuccessful from './RegisterSuccessful';
import ProductsByCategory from './ProductsByCategory';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

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
        <Route path='/registerSuccessful' element={<RegisterSuccessful/>}></Route>
        <Route path='/products-by-category' element={<ProductsByCategory/>}></Route>
        <Route path='/add-product' element={<AddProduct/>}></Route>
        <Route path='/add-product' element={<AddProduct/>}></Route>
        <Route path='/edit-product' element={<EditProduct/>}></Route>
        
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default Routing;