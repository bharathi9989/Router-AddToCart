import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/CartContext";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const { cart, addToCart, removeFromCart } = useContext(cartContext);

  // Fetch products from API

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  const filterProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ? true : product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded w-full sm:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded w-full sm:w-1/3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      {/* Product List */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterProducts.map((product) => {
          const inCart = cart.find((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain mb-4"
              />
              <h2 className="font-semibold text-lg mb-2 line-clamp-1">
                {product.title}
              </h2>

              <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                {product.description}
              </p>
              <p className="font-bold text-xl mb-3">₹{product.price} </p>

              {inCart ? (
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="w-full bg-red-400 text-white py-2 rounded-lg"
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-400 text-white py-2 rounded-lg"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
