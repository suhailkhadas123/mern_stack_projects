import { useState } from "react";
import Cart from "./Cart.jsx";
import products from "./data/products";

function Container() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(cart.concat(product));
    console.log("Logged");
    const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    const updated = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updated);
  } else {
    setCart(cart.concat({ ...product, quantity: 1 }));
  }
  }

const total = cart.reduce(   (sum, item) => sum + item.price * item.quantity,
  0
);

function increaseQuantity(id) {
  const updated = cart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
  setCart(updated);
}

function decreaseQuantity(id) {
  const updated = cart
    .map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0); // remove item if quantity 0

  setCart(updated);
}
  return (
    <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-4 justify-items-center bg-neutral-100 min-h-screen px-4 py-6">
     <div className="products w-full lg:col-span-2 p-0 lg:p-5 flex justify-center">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-56 p-5 bg-white flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto"
              />

              <section className="grid justify-center text-center mt-3">
                <span className="product-name">{product.name}</span>
                <span className="text-center product-price">₹ {product.price}</span>

                <button
                  onClick={() => addToCart(product)}
                  className="add-to-cart-btn mt-2 border border-solid rounded-3xl bg-neutral-100 px-4 py-1"
                >
                  Add To Cart
                </button>
              </section>
            </div>
          ))}
        </div>
      </div>

   <div className="cart w-full lg:col-start-3 p-0 lg:p-5 mt-6 lg:mt-0 flex-initial">
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
  );
}

export default Container;