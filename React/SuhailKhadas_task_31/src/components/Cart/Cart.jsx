import {Link} from 'react-router-dom';
function Cart({ cart, increaseQuantity, decreaseQuantity }) {
  return (
    <>
    <div>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <>
          <div key={index} className="flex gap-5 ">
            <img
                src={item.image}
                className="img-fluid rounded-top w-15 p-2"
                alt=""
            />
            <div>
            <p className="gird align-bottom">{item.name}</p>
            <p>₹ {item.price}</p>
            </div>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-400"
                >
                  -
                </button>

                <span className="w-8 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-400"
                >
                  +
                </button>
              </div>
            
          </div>

          </>
        ))
      )}

    </div>
      {cart.length > 0 && (
        <div>
          <Link to="/Payment">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              Proceed To payment
            </button>
          </Link>
          <button onClick={() => { setCart([]) }} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition ml-2">
            Clear Cart
          </button>
        </div>
      )}

      </>    
  );
}

export default Cart;