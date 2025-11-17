import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //  Add product to cart

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (!existingProduct) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Increase quantity of
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Total price before discound

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // final total after 10% discount

  const finalPrice = totalPrice - totalPrice * 0.1;

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalPrice,
        finalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
