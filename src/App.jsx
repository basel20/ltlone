import { useState } from 'react'
import { Routes, Route, BrowserRouter, useLocation, Router } from 'react-router-dom'
import Home from './pages/home';
import './App.css'
import Navbar from './components/navbar';
import Products from './pages/products';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';
import Boys from './pages/products/boys';
import AllProducts from './pages/products/allProducts';
import Girls from './pages/products/girls';
import Babies from './pages/products/babies';

function App() {
  
  return (
    <>
      <Navbar color={"#184e77"}/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<AllProducts />} />
          <Route path="boys" element={<Boys />} />
          <Route path="girls" element={<Girls />} />
          <Route path="babies" element={<Babies />} />
        </Route>
        <Route path='/about' element={<About/>} />
        {/* <Route path='/contact' element={<Contact />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
