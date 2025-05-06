import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, clearCart } from '../features/cart/cartSlice';

const Cart = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const getPrice = (item: string) => {
    if (item === 'Burger') return 100;
    if (item === 'Fries') return 50;
    return 30;
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🛒 Cart</h2>

      {cart.items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.items.map((item: string, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded hover:bg-gray-100"
            >
              <p className="text-lg font-medium">{item} - ₹{getPrice(item)}</p>
              <button
                onClick={() =>
                  dispatch(removeItemFromCart({ item, price: getPrice(item) }))
                }
                className="text-red-500 hover:text-red-700 text-xl"
                title="Remove"
              >
                ❌
              </button>
            </div>
          ))}

          <p className="text-lg font-semibold">Total: ₹{cart.total}</p>

          <button
            onClick={() => dispatch(clearCart())}
            className="flex items-center space-x-2 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded mt-4"
          >
            <span>🗑️</span>
            <span>Clear Cart</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
