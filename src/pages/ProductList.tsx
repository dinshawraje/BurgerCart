import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    { name: 'Burger', price: 100 },
    { name: 'Fries', price: 50 },
    { name: 'Soda', price: 30 }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <div className="space-y-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded hover:bg-gray-100 group"
          >
            <p className="text-lg font-medium">
              {product.name} - ₹{product.price}
            </p>
            <button
              onClick={() => dispatch(addItemToCart({ item: product.name, price: product.price }))}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition"
            >
              <span className="text-xl">➕</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Cart
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
