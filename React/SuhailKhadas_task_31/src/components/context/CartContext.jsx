import { createContext,useContext,useState } from "react";

const CartContext= createContext();

export function CartProvider({children}){
  const [cart , setCart]= useState([]);
  //Add to cart
  function addToCart(product){  
    setCart(cart.concat(product));
    const existing = cart.find((item)=> item.id == product.id_);

    if (existing){
      const updated = cart.map((item)=>
        item.id === product.id
      ? {...item,quantity : item.quantity +1}
      : item
      );
      setCart(updated);
    }else{
      setCart(cart.concat({...product, quantity : 1}))
    }
  }
    //catrt total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity,0);
 
  //incrtease quantity
  function increaseQuantity(id) {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updated);
  }
  //Decrease quantity
  function decreaseQuantity(id) {
    const updated = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updated);
  }
  return(
    <CartContext.Provider value={{cart,addToCart,total,increaseQuantity,decreaseQuantity}}>
      {children}
    </CartContext.Provider>
  );
  

};

export function useCart(){
  return useContext(CartContext);
}