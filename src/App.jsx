import { Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css'
import Home from "./components/home";
// import About from "./components/about";
import Navbar from "./components/navbar";
import ActiveLink from "./components/activeLink";
import OrderSummary from "./components/OrderSummary";
import NotFound from "./components/NotFound";
import Products from "./components/products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/users";
import Userdetails from "./components/Userdetails";
import Admin from "./components/Admin";
const LazyAbout = React.lazy(() => import("./components/about"))



function App() {
  return (
    <>
      <ActiveLink />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={
          <React.Suspense fallback="Loading...">
            <LazyAbout />
          </React.Suspense>
        }></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />}></Route>
          <Route path="featured" element={<FeaturedProducts />}></Route>
          <Route path="new" element={<NewProducts />}></Route>
        </Route>
        <Route path="users" element={<Users />}>
          <Route path="admin" element={<Admin />}></Route>
          <Route path=":userid" element={<Userdetails />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </>
  )
}

export default App
