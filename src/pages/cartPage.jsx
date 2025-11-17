import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";

function CartPage() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    addFromCart,
    RemoveFromCart,
    totalPrice,
    finalPrice,
  } = useContext(cartContext);

  return (
    <div className="text-3xl font-bold text-center">
      <h1>Your Cart</h1>
      {/* If cart is empty */}
      {cart.length === 0 && <p className="text-gray-600">Your cart is empty</p>}

      {/* cart items */}
      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 p-4 border rounded-xl shadow "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-lg mb-1">{item.title}</h2>
              <p className="text-gray-700 text-sm mb-2">{item.price}</p>

              {/* Quantity Control */}
              <div className="flex items-center gap-4 mb-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>

              {/* Item Total */}

              <p className="font-semibold">
                Total : ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => RemoveFromCart(item.id)}
                className="mt-3 text-red-500 font-semibold"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Price Summery */}

      {cart.length > 0 && (
        <div className="mt-10 p-6 border rounded-xl shadow-lg max-w-md bg-gray-100">
          <h1 className="text-xl font-bold mb-4">Price Details</h1>
          <div className="flex justify-between mb-2">
            <p>Total Price</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>

          <div className="flex justify-between mb-2">
            <p>Discount 10%</p>
            <p>${finalPrice.toFixed(2)}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-xl">
            <p>Final Price</p>
            <p>${finalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
