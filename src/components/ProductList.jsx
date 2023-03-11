import React, { useEffect } from 'react';
import { fetchProducts} from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';

import Product from './Product'
function ProductList() {
  const dispatch = useDispatch();
  

const { data, error, isLoading } = useSelector((state)=>{
  return state.products
});

useEffect(()=>{
  dispatch(fetchProducts());
},[dispatch]);

  let content;
  if (isLoading) {
    return <div>is Loading</div>
  } else if (error) {
    return <div>Error </div>
  } else {
    content = data.map((product) => {
      return (

        <Product key={product.id} product= {product}/>

      )
    })
  }


  return (
    <div>
      <div className="grid grid-cols-4 gap-4">{content}</div>

    </div>
  )
}
export default ProductList;