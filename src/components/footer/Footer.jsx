import React from "react";
import footerlogo from "../../assets/footer/footerlogo.svg";
import footerArrow from "../../assets/footer/Vector.svg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-[150px] mb-10 font-poppins">
      <div className="w-[90vw] lg:w-[1250px] mx-auto">
        <div className="  flex flex-col md:flex-row
         justify-between space-y-10 lg:space-y-0 ">
          <div className="space-y-[32px]">
            <img src={footerlogo} alt="" />
            <p className="w-[297px] text-[#333] text-[1rem] leading-[30px] font-medium">
              Our job is to filling your tummy with delicious food and with fast
              and free delivery.
            </p>
            <div className="flex gap-x-[47px] text-[#EB5757] text-[1.3rem]">
              <FaInstagramSquare />
              <FaFacebookF />
              <FaTwitter />
            </div>
          </div>

     <div className="flex lg:w-[70%] flex-wrap justify-between">
          <div className=" space-y-[25px] ">
            <h2 className="text-[#000000] text-[1.3rem] leading-[30px] font-semibold">
              About
            </h2>

            <ul className="space-y-[12px]">
              <li className="text-[#333] text-[1rem] leading-[30px]">
                About Us
              </li>
              <li className="text-[#333] text-[1rem] leading-[30px]">
                Features
              </li>
              <li className="text-[#333] text-[1rem] leading-[30px]">News</li>
              <li className="text-[#333] text-[1rem] leading-[30px]">Menu</li>
            </ul>
          </div>
         <div  className=" space-y-[25px] ">
          <h2 className="text-[#000000] text-[1.3rem] leading-[30px] font-semibold">
            Company
          </h2>

          <ul className="space-y-[12px]">
            <li className="text-[#333] text-[1rem] leading-[30px]">Why Fudo</li>
            <li className="text-[#333] text-[1rem] leading-[30px]">
              Partner with us
            </li>
            <li className="text-[#333] text-[1rem] leading-[30px]">FAQ</li>
            <li className="text-[#333] text-[1rem] leading-[30px]">Blog</li>
          </ul>
        </div>

          <div  className=" space-y-[25px] ">
            <h2 className="text-[#000000] text-[1.3rem] leading-[30px] font-semibold">
              Support
            </h2>

            <ul className="space-y-[12px]">
              <li className="text-[#333] text-[1rem] leading-[30px]">
                Account
              </li>
              <li className="text-[#333] text-[1rem] leading-[30px]">
                Support Center
              </li>
              <li className="text-[#333] text-[1rem] leading-[30px]">
                Feedback
              </li>
              <li className="text-[#333] text-[1rem] leading-[30px]">
                Contact Us
              </li>
              <li className="text-[#333] text-[1rem] leading-[30px]">
                Accessibility
              </li>
            </ul>
          </div>

          <div className="space-y-[25px]">
          <h2 className="text-[#000000] text-[1.3rem] leading-[30px] font-semibold">
              Get In Touch
            </h2>

            <ul className="space-y-[12px]">
              <li className="text-[#333] text-[1.2rem] leading-[30px]">
              Question or feedback?
              </li>
              <li className="text-[#333] text-[1.2rem] leading-[30px]">
              We’d love to hear from you
              </li>
              <div className="relative ">
                <input type="email" placeholder="Email Address" className="w-[196px] h-[51px]
              shadow-[0_0px_1px_rgba(00,00,0.1)] p-3 rounded-full outline-none " />
                <img src={footerArrow} alt="" className="absolute top-4 right-16" />
              </div>
              
            </ul>
          </div>

    </div>      
        </div>
      </div>
    </footer>
  );
}

export default Footer;
