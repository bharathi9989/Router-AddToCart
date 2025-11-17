import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/productsPage";
import CartPage from "./pages/cartPage";

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-black text-white flex justify-between">
        <Link to="/" className="text-2xl font-bold">
          Store
        </Link>
        <Link to="/cart" className="text-lg">
          Cart
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
