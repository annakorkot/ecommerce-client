import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '../redux/store';
import Product from './Product';

function ProductsByCategory() {
  const { data, error, isLoading, category } = useSelector((state) => {
    return state.productsByCategory;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsByCategory(category));
  }, [dispatch, category]);

  let content;
  if (isLoading) {
    return <div>is Loading</div>
  } else if (error) {
    return <div>Error </div>
  } else {
    content = data.map((product) => {
      return (

        <Product key={product.id} product={product} />

      )
    })
  }


  return (
    <div>
      <div className="grid grid-cols-4 gap-4">{content}</div>

    </div>
  )
}

export default ProductsByCategory;