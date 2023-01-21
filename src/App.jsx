import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home";
import About from "./components/about";
import Navbar from "./components/navbar";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </>
  )
}

export default App
