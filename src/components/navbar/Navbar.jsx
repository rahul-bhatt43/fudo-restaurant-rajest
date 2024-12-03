import React, { useContext, useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import carrImg from "../../assets/nav/Group (5).svg";
import arrowImg from "../../assets/nav/Vector (18).svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CartContext } from "../context/ContextApi";
import NavSearch from "../navSearch/NavSearch";
import { auth } from "../firbase/Firebase";
import { signOut } from "firebase/auth";

function Navbar({ user }) {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchHover, setSearchHover] = useState(false);
  const [activeLoginSignup, setActiveLoginSignup] = useState("signup");
  const location = useLocation();

  console.log("cart from the localstorage ", cart);

  useEffect(() => {
    if (location.pathname === "/login") {
      setActiveLoginSignup("login");
    } else if (location.pathname === "/signup") {
      setActiveLoginSignup("signup");
    }
  }, [location]);
  const toggleMenu = () => {
    setIsMenuOpen(true);
  };
  const toggleHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const searchHoverHandler = () => {
    setSearchHover(!searchHover);
    // console.log("hover")
  };
  const reduce = cart.reduce(
    (accomulator, currentValue) => accomulator + currentValue.quantity,
    0
  );

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User  logged out");
      navigate("/signup");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav
      className={`w-[100vw] h-[77px] font-poppins
     fixed top-0  z-50 ${
       isScrolled ? "bg-white bg-opacity-90 shadow-xl " : "bg-transparent"
     } `}
    >
      <div
        className=" relative w-[100vw]  px-2 md:w-[99vw]  lg:w-[1200px] mt-[1rem] 
       mx-auto  font-poppins flex 
      justify-between lg:justify-normal items-center  "
      >
        <Link to={'/'}>
        <div className="flex  items-center gap-x-2 md:gap-x-1 lg:gap-x-2 ">
          <div
            className="w-[2.9rem] h-[2.9rem] md:w-[2rem] md:h-[2rem]
            lg:w-[2.9rem] lg:h-[2.9rem] bg-[#EB5757] 
                flex justify-center items-center"
          >
            <div
              className="text-[#F2F2F2]  text-[0.8rem] font-bold  
                    flex flex-wrap   w-[1.9rem] md:p-1 p-0 lg:p-0 "
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
          <p className="font-semibold text-[1.5rem] md:text-[1.2rem] lg:text-[1.5rem] text-[#000000]">
            Fudo
          </p>
        </div>
        </Link>

        <div
          className={`absolute md:relative  md:top-0 top-14 
         right-0 z-20 translate-x-0
               ${
                 isMenuOpen
                   ? "block  transition-all duration-300"
                   : "translate-x-[700px] md:translate-x-0 lg:translate-x-0 duration-300 "
               } md:block lg:block`}
        >
          <ul
            className="lg:ml-[192px] md:ml-[40px] 
           bg-black md:bg-transparent lg:bg-transparent  
           text-white md:text-[#333333] 
          h-[90vh] lg:h-fit md:h-fit
           w-[60vw] md:w-[340px] lg:w-[420px] flex flex-col md:flex-row lg:flex-row 
           gap-y-16 p-11 md:p-0 lg:p-0 items-center md:justify-between   lg:justify-between 
            text-[1.2rem] md:text-[1rem]"
          >
            <Link to={"/"}>
              <div className="group relative">
                <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ">
                  Home
                </li>
                <li
                  className=" absolute bottom-[-24px]
             group-checked: w-full h-[4px] 
             group-hover:bg-red-500 group-hover:duration-300 "
                ></li>
              </div>
            </Link>
            <li className=" relative ">
              <div onClick={toggleMenu} className="group relative">
                <span
                  className="cursor-pointer hover:text-red-500
              transition-all duration-300
               flex items-center justify-center gap-x-1"
                  onMouseEnter={toggleDropdown}
                >
                  World Food
                  <img
                    src={arrowImg}
                    alt=""
                    width={15}
                    height={10}
                    className={`  ${isDropdownOpen ? " rotate-180   " : ""} `}
                  />
                </span>
                <li
                  className="hidden lg:block absolute bottom-[-24px]
             group-checked: w-full h-[4px] 
             group-hover:bg-red-500 group-hover:duration-300 "
                ></li>
              </div>
              {isDropdownOpen && (
                <ul className="absolute w-full z-50 bg-white shadow-lg text-black">
                  <Link to={"/indian"} className="group">
                    <li
                      className="p-4  w-full cursor-pointer hover:bg-gray-200
                  hover:shadow-m"
                    >
                      Indian
                    </li>
                    <li className="group-hover:bg-red-500 duration-200 w-full h-[3px]"></li>
                  </Link>
                  <Link to={"/japanies"} className="group">
                    <li className="p-4 w-[100px w-full cursor-pointer hover:bg-gray-300">
                      American
                    </li>
                    <li className="group-hover:bg-red-500 duration-200 w-full h-[3px]"></li>
                  </Link>
                  <Link to={"chinese"} className="group">
                    <li className="p-4 w-full cursor-pointer hover:bg-gray-300">
                      Chinese
                    </li>
                    <li className="group-hover:bg-red-500 duration-200 w-full h-[3px]"></li>
                  </Link>
                </ul>
              )}
            </li>
            <Link to={"/aboutus"}>
              <div className="group  relative">
                <li className="z-20 hover:text-red-600 transition-all duration-300">
                  About Us
                </li>
                <li
                  className=" absolute bottom-[-24px]
             group-checked: w-full h-[4px] 
             group-hover:bg-red-500 group-hover:duration-300 "
                ></li>
              </div>
            </Link>
            <div className="relative group">
              <li className="z-20 hover:text-red-500 cursor-pointer transition-all duration-300">
                Menu
              </li>
              <li
                className=" absolute bottom-[-24px]
             group-checked: w-full h-[4px] 
             group-hover:bg-red-500 group-hover:duration-300 "
              ></li>
            </div>

            {user ? (
              <>
                <button
                  onClick={handleLogout}
                  className="
                         outline-none md:hidden md:ml-[20px] lg:ml-[35px] w-[120px]
         text-white h-[49px]
         bg-[#EB5757] rounded-3xl"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex md:hidden">
                <Link to={"/login"}>
                  <button
                    onClick={() => handleActiveBtn("login")}
                    className={`ml-4  px-4 py-2 text-[1.2rem] rounded-l-md
                    text-black  ${
                      activeLoginSignup === "login"
                        ? " bg-red-500  text-white"
                        : "bg-slate-50"
                    } `}
                  >
                    {" "}
                    Login{" "}
                  </button>
                </Link>

                <Link to={"/signup"}>
                  <button
                    onClick={() => handleActiveBtn("signup")}
                    className={` outline-none px-4 py-2 text-[1.2rem] rounded-r-md
         ${
           activeLoginSignup === "signup"
             ? " bg-red-500  text-white"
             : " bg-slate-50 text-black"
         }`}
                  >
                    Sinup
                  </button>
                </Link>
              </div>
            )}
          </ul>
        </div>

        {/* <div className=" absolute top-11 ml-[192px] left-0 lg:w-[420px] flex flex-col justify-between">

        </div> */}

        {/* <div>

        </div> */}
        <div className="flex gap-x-6 items-center">
          <div
            onClick={searchHoverHandler}
            className={` cursor-pointer 
           text-2xl md:hidden  md:ml-[50px]  lg:ml-[196px]`}
          >
            <IoSearch />
          </div>
          <Link to={"/cart"} className=" md:hidden lg:hidden">
            <div className="relative   lg:ml-[35px] cursor-pointer">
              <img src={carrImg} alt="" />
              <div
                className="absolute top-[-3px] right-[-7px] bg-red-500 w-[16px] h-[16px]
            rounded-full flex justify-center items-center"
              >
                <p className=" text-[0.8rem] text-[#fff] font-bold ">
                  {reduce}
                </p>
              </div>
            </div>
          </Link>

          <div
            className="  mr-[20px text-3xl cursor-pointer md:hidden lg:hidden"
            onClick={toggleHamburger}
          >
            {isMenuOpen ? (
              <div className="p-1 bg-black rounded-full group">
                <RxCross2
                  className="text-white group-hover:rotate-90 duration-200
         hover:text-red-500"
                ></RxCross2>
              </div>
            ) : (
              <GiHamburgerMenu />
            )}
          </div>
        </div>
        <div className=" hidden md:flex  items-center">
          <div
            onMouseEnter={searchHoverHandler}
            className={` hidden md:block  cursor-pointer 
           text-2xl   lg:block  md:ml-[40p] md:mr-[20px] lg:mr-0  lg:ml-[196px]`}
          >
            <IoSearch />
          </div>

          <Link to={"/cart"} className=" hidden md:block lg:block">
            <div
              className="relative hidden md:block lg:block md:ml-[20p] md:mr-[20px]
           lg:mr-[30px]  lg:ml-[35px] cursor-pointer"
            >
              <img src={carrImg} alt="" />
              <div
                className="absolute top-[-3px] right-[-7px]
             bg-red-500 w-[16px] h-[16px]
            rounded-full flex justify-center items-center"
              >
                <p className=" text-[0.8rem] text-[#fff] font-bold ">
                  {reduce}
                </p>
              </div>
            </div>
          </Link>

          {user ? (
            <>
              <button
                onClick={handleLogout}
                className=" hidden
                         outline-none md:block lg:block md:ml-[20px] lg:ml-[35px] w-[120px]
         text-white h-[49px]  hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700
         bg-[#EB5757] rounded-3xl"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button
                  onClick={() => setActiveLoginSignup("login")}
                  className={`ml-   lg:px-4 py-2 md:px-3 md:text-[1rem] text-[1.2rem] rounded-l-md
                    text-black  ${
                      activeLoginSignup === "login"
                        ? " bg-red-500  text-white"
                        : "bg-slate-50"
                    } `}
                >
                  {" "}
                  Login{" "}
                </button>
              </Link>

              <Link to={"/signup"}>
                <button
                  onClick={() => setActiveLoginSignup("signup")}
                  className={` outline-none lg:px-4 py-2 md:px-3  md:text-[1rem] text-[1.2rem] rounded-r-md
         ${
           activeLoginSignup === "signup"
             ? " bg-red-500  text-white"
             : " bg-slate-50"
         }`}
                >
                  Sinup
                </button>
              </Link>
            </>
          )}
        </div>

        {searchHover ? (
          <NavSearch setSearchHover={setSearchHover}></NavSearch>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default Navbar;
