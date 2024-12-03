import React, { useEffect, useState } from 'react'
import Navbar from '../../navbar/Navbar'
import Header from '../../header/Header'
import BestSelling from '../../bestSelling/BestSelling'

import WeServe from '../../weServe/WeServe'
import CustomerReviews from '../../customerReviews/CustomerReviews';
import Signup from '../signup/Signup'
import Login from '../login/Login'
import TopSelling from '../../topSelling/TopSelling'
import Footer from '../../footer/Footer'
import NavSearch from '../../navSearch/NavSearch'






function Home() {
  
  

  return (
    <div>
      {/* <Navbar cart={cart}></Navbar> */}
      <Header></Header>
      <WeServe></WeServe>
      <BestSelling ></BestSelling>
      <TopSelling></TopSelling>
      <CustomerReviews></CustomerReviews>
      {/* <NavSearch></NavSearch> */}
      
    

      {/* <Footer></Footer> */}
     
      {/* <Signup></Signup>
      <Login></Login> */}

     

    
      
    </div>
  )
}

export default Home