import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import Layout from "../components/layout/Layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Route>
    </Routes>
  );
}
