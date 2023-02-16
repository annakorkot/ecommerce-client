import React from 'react';
import { useState } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { addProduct ,removeProduct} from '../redux/store'

function Cart() {

      const [open, setOpen] = useState(true) 

      const dispatch = useDispatch();
      const cartItem = useSelector((state)=>{
        return state.cart
    });
    

      // function ProductList() {
      //  
      //   const cartItem = useSelector((state)=>{
      //       return state.cart
      //   });

      //   const handleProductAdd = (product) =>{
      //       dispatch(addProduct(product))
      //   };
      //   const handleProductRemove = (product) =>{
      //       dispatch(removeProduct(product))
      //   };
      // }

    
      return ( 
      <div>
    
        <div id="drawer-example" className="fixed top-0 right-0 z-40 h-screen p-3 overflow-y-auto transition-transform " tabIndex="-1" aria-labelledby="drawer-label">
        <div id="drawer-label" className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cartItem.map((item)=>(
          <div>
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{item}</h3>
                    <p className="text-sm dark:text-gray-400">Classic</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">price</p>
                    {/* <p className="text-sm line-through dark:text-gray-600">75.50€</p> */}
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <button onClick={(product)=>dispatch(removeProduct(product))}><span>Remove</span></button>
                  </button>
                  </div>
              </div>
            </div>
          </li>
              </div>
          ))}

          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">

              <div className="flex flex-col justify-between w-full pb-4">

                <div className="flex text-sm divide-x">

               
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="space-y-1 text-right">
          <p>Total amount:
            <span className="font-semibold">357 €</span>
          </p>

        </div>
        <div className="flex justify-end space-x-4">
          <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
            <span className="sr-only sm:not-sr-only" data-drawer-hide="drawer-example">to shop</span>
          </button>
          <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
          </button>
        </div>
      </div>
      </div>
      </div>
      );
    }

export default Cart;