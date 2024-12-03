import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { auth } from "./components/firbase/Firebase";
import { onAuthStateChanged } from "firebase/auth";

import Home from "./components/pages/home/Home";
import Cart from "./components/pages/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import IndianFood from "./components/countryFood/IndianFood";
import ChineseFood from "./components/countryFood/ChineseFood";
import JapaniesFood from "./components/countryFood/AmericanFood";
import Footer from "./components/footer/Footer";
import ProductPage from "./components/productDetailPage/ProductDetailPage";
import { CartProvider } from "./components/context/ContextApi";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import ProtectedRoute from "./components/pages/protectedRoute/ProtectedRoute";
import { ToastContainer } from 'react-toastify';


function App() {
  const [user, setUser] = useState(null); // State to manage user authentication

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user state based on authentication status
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <CartProvider>
        <ToastContainer></ToastContainer>
        <Router>
          <Navbar user={user}></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/cart"
              element={<ProtectedRoute element={<Cart />} user={user} />}
            />
            <Route
              path="/indian"
              element={<ProtectedRoute element={<IndianFood />} user={user} />}
            />
            <Route
              path="/chinese"
              element={<ProtectedRoute element={<ChineseFood />} user={user} />}
            />
            <Route
              path="/japanies"
              element={
                <ProtectedRoute element={<JapaniesFood />} user={user} />
              }
            />
            <Route
              path="/product/:id"
              element={<ProtectedRoute element={<ProductPage />} user={user} />}
            />
            <Route
              path="/aboutus"
              element={<ProtectedRoute element={<AboutUs />} user={user} />}
            />

            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/" /> : <Signup />}
            />
          </Routes>
        </Router>
        <Footer></Footer>
      </CartProvider>
    </div>
  );
}

export default App;
