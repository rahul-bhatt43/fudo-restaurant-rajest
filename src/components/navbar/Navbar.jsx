import React, { useContext, useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import carrImg from '../../assets/nav/Group (5).svg'
import arrowImg from '../../assets/nav/Vector (18).svg'
import { Link } from "react-router-dom";
import { CartContext } from "../context/ContextApi";

function Navbar() {
  const {cart} = useContext(CartContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const [searchHover, setSearchHover] =useState(false)
    
      const toggleMenu = () => {
        setIsMenuOpen(true);
      };
      const toggleHamburger=()=>{
        setIsMenuOpen(!isMenuOpen)
      }
    
      const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

      const searchHoverHandler=()=>{
        setSearchHover(!searchHover)
        // console.log("hover")

      }
const reduce = cart.reduce((accomulator,currentValue)=>accomulator+currentValue.quantity ,0)


const [isScrolled, setIsScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    // Change the background color if scrolled more than 50 pixels
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  
  return (
    <nav className={`w-[100vw] h-[77px] fixed top-0  z-50 ${isScrolled ? 'bg-white bg-opacity-90 shadow-xl ' : 'bg-transparent'} `}>
      <div className=" relative w-[100vw]  lg:w-[1200px] mt-[1rem]  mx-auto  font-poppins flex 
      justify-between lg:justify-normal items-center  ">
        <div className="flex  items-center gap-x-2 ">
          <div
            className="w-[2.9rem] h-[2.9rem] bg-[#EB5757] 
                flex justify-center items-center"
          >
            <div
              className="text-[#F2F2F2] text-[0.8rem] font-bold  
                    flex flex-wrap   borde w-[1.9rem] "
            >
              <span className="w-full flex justify-between ">
                {" "}
                F <span>U</span>
              </span>
              <span className="w-full flex justify-between">
                D <span>U</span>
              </span>
            </div>
          </div>
          <p className="font-semibold text-[1.5rem] text-[#000000]">Fudo</p>
        </div>
      
        <div className={`absolute lg:relative lg:top-0 top-14 translate-x-[10px
         right-0 z-20 translate-x-0
               ${isMenuOpen ? 
                'block  transition-all duration-300'
                : 'translate-x-[700px] lg:translate-x-0 duration-300 '} lg:block`}>
          <ul className="lg:ml-[192px] bg-black lg:bg-transparent  
           text-white lg:text-[#333333] 
          h-[60vh] lg:h-fit
           w-[60vw] lg:w-[420px] flex flex-col lg:flex-row 
           gap-y-16 p-11 lg:p-0 items-center   lg:justify-between  text-[1.2rem] lg:text-[1rem]">
           <Link to={'/'}>
            <li className="cursor-pointer ">Home</li>
            </Link>
            <li className=" relative ">
              <div onClick={toggleMenu}>
              <span className="cursor-pointer flex items-center justify-center gap-x-1"
               onClick={toggleDropdown}>
                World Food
                <img src={arrowImg}  alt="" width={15} height={10}
                className={`  ${isDropdownOpen?' rotate-180   ':''} `}
                 />
              </span>
              </div>
              {isDropdownOpen && (
                <ul className="absolute bg-white shadow-lg text-black">
                  <Link to={'/indian'}>
                  <li className="p-4 w-[100px] cursor-pointer hover:bg-gray-200">Indian</li>
                  </Link>
                  <Link to={'/japanies'}>
                  <li className="p-4 w-[100px] cursor-pointer hover:bg-gray-200">American</li>
                  </Link>
                  <Link to={'chinese'}>
                  <li className="p-4 w-[100px] cursor-pointer hover:bg-gray-200">Chinese</li>
                  </Link>
                 
                </ul>         
              )}
            </li>
            <li>About Us</li>
            <li>Menu</li>
            <button className=" hidde lg:hidden w-[120px] text-white h-[80px]
                  bg-[#EB5757] rounded-3xl">Logout</button>
          </ul>
        </div>

        {/* <div className=" absolute top-11 ml-[192px] left-0 lg:w-[420px] flex flex-col justify-between">

        </div> */}

        {/* <div>

        </div> */}
        <div className="flex gap-x-6 items-center">
        <div onClick={searchHoverHandler} className={` cursor-pointer 
           text-2xl lg:block ml-[120p] lg:ml-[196px]`}>
            <IoSearch/>      
        </div>
        <Link to={'/cart'} className=" lg:hidden" >
        <div className="relative   lg:ml-[35px] cursor-pointer">
            <img src={carrImg} alt="" />
            <div className="absolute top-[-3px] right-[-7px] bg-red-500 w-[16px] h-[16px]
            rounded-full flex justify-center items-center">
            <p className=" text-[0.8rem] text-[#fff] font-bold ">{reduce}</p>
            </div>
            
        </div>
        </Link>
        
        <div className="  mr-[20px text-3xl cursor-pointer lg:hidden" 
        onClick={toggleHamburger}>
          <GiHamburgerMenu />
        </div>
        </div>
        <input type="text" placeholder="Search here for any dish" 
        className={` pl-9 absolute top-[50px] left-[30px] lg:left-[100px] w-[80vw]  lg:w-[60vw] 
        h-[50px] outline-none border rounded-2xl  border-[#333] ${searchHover?'block':'hidden'} `}  />
       <Link to={'/cart'} className=" hidden lg:block" >
        <div className="relative hidden lg:block ml-[35px] cursor-pointer">
            <img src={carrImg} alt="" />
            <div className="absolute top-[-3px] right-[-7px] bg-red-500 w-[16px] h-[16px]
            rounded-full flex justify-center items-center">
            <p className=" text-[0.8rem] text-[#fff] font-bold ">{reduce}</p>
            </div>
            
        </div>
        </Link>

        <button className=" hidden lg:block ml-[35px] w-[120px] text-white h-[49px]
         bg-[#EB5757] rounded-3xl">Logout</button>

       
      </div>
    </nav>
  );
}

export default Navbar;


