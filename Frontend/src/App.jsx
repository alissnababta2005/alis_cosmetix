import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <div>
      <header className="main-header">
        <Link to="/" className="brand-logo">ALIS COSMETIX</Link>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/login">Login</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  );
}