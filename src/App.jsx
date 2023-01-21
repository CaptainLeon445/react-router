import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home";
import About from "./components/about";
import Navbar from "./components/navbar";
import ActiveLink from "./components/activeLink";
import OrderSummary from "./components/OrderSummary";


function App() {
  return (
    <>
      <ActiveLink />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>

      </Routes>
    </>
  )
}

export default App
