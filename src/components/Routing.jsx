import React from 'react';

import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import ProductList from './ProductList';


function Routing() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        {/* <Route path="users/*" element={} />  */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default Routing;