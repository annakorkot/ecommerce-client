import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../redux/store'
import CartItem from './CartItem'

function Cart() {
  // const [open, setOpen] = useState(true) 
  const cart = useSelector((state) =>
  state.cart);
  console.log(cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }

 


  return (
    <div>

      <div id="drawer-example" className="fixed top-0 right-0 z-40 h-screen p-3 overflow-y-auto transition-transform " tabIndex="-1" aria-labelledby="drawer-label">
        <div id="drawer-label" className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
          <h2 className="text-xl font-semibold">Your cart</h2>
          <ul className="flex flex-col divide-y divide-gray-700">

            <div>
            {cart?.map((item) => (
              
             <CartItem
             key = {item.id}
             id = {item.id}
             image = {item.image}
             productname = {item.productname}
             price = {item.price}
             quantity = {item.quantity}
             />
            ))}
            </div>

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
              <span className="font-semibold"> {getTotal().totalPrice} $</span>
            </p>
            <p>Total items:
              <span className="font-semibold"> {getTotal().totalQuantity} </span>
            </p>

          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
              <span className="sr-only sm:not-sr-only" data-drawer-hide="drawer-example"> to shop</span>
            </button>
            <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
              <span className="sr-only sm:not-sr-only">Continue to</span> Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;