import React from 'react'
import {Cart} from '../../index.jsx';
import {useCart} from "../context/CartContext.jsx";

export const Payment = () => {
  const {cart,increaseQuantity,decreaseQuantity,total} =useCart();  
  return (
    <>
        <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-4 justify-items-center bg-neutral-100  px-4 py-6">
     <div className="products  w-full col-span-1 p-0  flex justify-center">
          <form  className="w-full max-h-fit max-w-lg bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4">Payment Details</h1>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">Name on Card</label>
              <input id="name" name="name" type="text" className="w-full border rounded px-3 py-2" required/>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="cardNumber">Card Number</label>
              <input id="cardNumber" name="cardNumber" type="text"className="w-full border rounded px-3 py-2" required />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="expiry">Expiry</label>
                <input id="expiry" name="expiry" type="text" placeholder="MM/YY" className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="cvv">CVV</label>
                <input  id="cvv" name="cvv" type="password" className="w-full border rounded px-3 py-2" required />
              </div>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Amount: ₹ {total}</p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
            >
              Submit Payment
            </button>
          </form>
      </div>

   <div className="cart w-full lg:col-start-2 p-0 lg:p-5 mt-6 lg:mt-0 flex-initial ">
        <div className="bg-zinc-200 w-full max-h-80 lg:max-h-120 overflow-auto grid p-4 rounded-lg">
          <h1 className="text-xl font-bold mb-3">Cart</h1>
          <Cart cart={cart} 
          increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
          <div className="flex justify-center">
            <p className="mt-5  font-bold  ">Total: ₹ {total}</p>            
          </div>

        </div>
      </div>
    </div>
    
    </>
  )
}

export default Payment;