import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/pages/home/Home'
import Cart from './components/pages/cart/Cart';
import Navbar from './components/navbar/Navbar';
import IndianFood from './components/countryFood/IndianFood';
import ChineseFood from './components/countryFood/ChineseFood';
import JapaniesFood from './components/countryFood/AmericanFood';
import Footer from './components/footer/Footer';
import ProductPage from './components/productDetailPage/ProductDetailPage';
import { CartProvider } from './components/context/ContextApi';


function App() {
  

  return (
    <div>
      <CartProvider>
      <Router >
        <Navbar  ></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/indian" element={<IndianFood />} />
          <Route path="/chinese" element={<ChineseFood />} />
          <Route path="/japanies" element={<JapaniesFood />} />
          <Route path="/product/:id" element={<ProductPage />} />
         
        </Routes>
      </Router>
      </CartProvider>
      <Footer></Footer>
   
      
      
     
    </div>
  )
}

export default App


