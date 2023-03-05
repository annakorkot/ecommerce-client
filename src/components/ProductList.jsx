import React from 'react'
import { useFetchProductsQuery } from '../redux/store'
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/store';

function ProductList() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchProductsQuery();

  let content;
  if (isLoading) {
    return <div>is Loading</div>
  } else if (error) {
    return <div>Error </div>
  } else {
    content = data.map(product => {
      return (

        <div key={product.id} className="w-80 bg-white shadow rounded mx-10">
          <div
            className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }}>
            <div className="flex justify-between">
              <button className="text-white hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
            <div>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <h1 className="text-gray-800 text-center mt-1">{product.productname}</h1>
            <p className="text-gray-400 font-light text-xs text-center">{product.description}</p>
            <p className="text-center text-gray-800 mt-1">{product.price} $</p>
            <div className="inline-flex items-center mt-2">

            </div>

            <button onClick={() =>
              dispatch(addProduct(
                  product
              ))
            }
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
            >
              Add to order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>

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