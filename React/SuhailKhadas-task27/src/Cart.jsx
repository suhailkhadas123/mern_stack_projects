function Cart({ cart, increaseQuantity, decreaseQuantity }) {
  return (
    <div>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
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
        ))
      )}
    </div>
  );
}

export default Cart;