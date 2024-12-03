import React from 'react'
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function NavSearch({setSearchHover}) {
  return (
    
    <div className="absolute md:left-[-8px] lg:left-[-100px]  top-[-17px] w-[100vw] h-[100vh]
      inset-0 bg-[rgba(0,0,0,0.9)] drop-shadow-2xl
     opacity-100 z-50 flex flex-col justify-center items-center ">
    <div onClick={()=>setSearchHover(false)} className=' absolute top-10 outline-none right-[10%] group border-red-600 border w-[50px]  h-[50px]
    rounded-full flex justify-center items-center hover:bg-white transition-all
    duration-300 ease-in hover:border-none'>
      <RxCross2 className='text-red-600 text-[2rem]  cursor-pointer
       group-hover:rotate-90 group-hover:duration-500  '></RxCross2>
    </div>
    <div className='relative'>
      <input type="text" placeholder='Search here for dishes'
      className='relative outline-none w-[90vw] lg:w-[70vw] h-[50px] rounded-full
      border-2 border-red-600 bg-black
      text-white text-[1.3rem] p-8 md:p-10 placeholder:text-white '></input>
      <IoSearch className='text-white absolute right-5 md:right-16 top-7 cursor-pointer 
      text-[1.9rem] hover:scale-125 transition-all duration-300 '></IoSearch>
     
    </div>
    
  </div>
  
  )
}

export default NavSearch