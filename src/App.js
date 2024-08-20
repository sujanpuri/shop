import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Categories from "./Routes/Categories/Categories";
import Shoes from "./Routes/Categories/shoe";
import Clothes from "./Routes/Categories/clothes";

function App() {
  return (
    <div className="bg-black text-white h-[100vh] pt-[10vh]">
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/shoes" element={<Shoes/>} />
                <Route path="/categories/clothes" element={<Clothes />} />
                {/* New components here, code it like shoes and clothes */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
