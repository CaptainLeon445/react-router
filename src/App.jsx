import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home";
import About from "./components/about";
import Navbar from "./components/navbar";
import ActiveLink from "./components/activeLink";
import OrderSummary from "./components/OrderSummary";
import NotFound from "./components/NotFound";
import Products from "./components/products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";



function App() {
  return (
    <>
      <ActiveLink />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />}></Route>
          <Route path="featured" element={<FeaturedProducts />}></Route>
          <Route path="new" element={<NewProducts />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </>
  )
}

export default App
