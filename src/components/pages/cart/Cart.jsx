import React, { useContext } from 'react'
import { CartContext } from '../../context/ContextApi'
import { RiDeleteBinLine } from "react-icons/ri";

function Cart() {
  const { cart } = useContext(CartContext)
  
  // const cartItem =[...cart]
  // console.log('car item',cartItem)
  return (
    <section className=' mt-[125px] lg:mt-[200px] font-poppins'>
      <div className=' w-[95vw] lg:w-[1300px]  mx-auto flex flex-col md:flex-row
       justify-between gap-y-4'>
        
        <div className='w-[95vw] md:w-[60vw] lg:w-[900px] 
        flex flex-col gap-y-5 '>
          {cart.map((pro,index)=>{
            return(
              
              <div key={index} className=' flex justify-between lg:justify-around items-center
               border-green-500 shadow-[0_5px_5px_rgba(00,00,00,0.1)] rounded-xl'>
                <div className='flex items-center gap-8'>
                <div className=' w-[70px] h-[70px] md:w-[120px] md:h-[120px] 
                lg:w-[170px] lg:h-[170px] rounded-full bg-gray-200 flex 
                justify-center items-center shadow-md'>
              <img src={pro.item.image} alt="" className=' w-[50px] h-[50px] md:w-[90px] md:h-[90px]
              lg:w-[120px] lg:h-[120px]
               rounded-full ' />
              </div>
              <div>
                <p className='text-[#000000] font-semibold text-[1rem] md:-[1.3rem] lg:text-[1.5rem]'>{pro.item.mealName.slice(0,16)}</p>
                <p className='hidden lg:block text-gray-400 text-[1rem] '>fresh food 100% guarantee</p>
              </div>
              </div>
             
              <p className='text-[0.9rem] md:text-[1.3rem] lg:text-[1.6rem] font-semibold'><span className='text-yellow-500 
              lg:text-[1.3rem]'>₹</span>{pro.item.Price} </p>
              <div className=' w-[45px] h-[30px] md:w-[70px] md:h-[40px] lg:w-[120px] lg:h-[60px] rounded-xl bg-[#FF3E3E]
              flex justify-center items-center gap-x-1 lg:gap-x-3 '>
                <span className=' text-[1.2rem] lg:text-[1.9rem] text-[#fff] cursor-pointer'>-</span>
                <span className=' text-[1.3rem] lg:text-[2rem] text-[#fff]'>1</span>
                <span className=' text-[1.2rem] lg:text-[1.9rem] text-[#fff] cursor-pointer'>+</span>
              </div>
              
              <div className=' md:text-[1.4rem] lg:text-[1.9rem] text-[#FF3E3E]  cursor-pointer'>
                <RiDeleteBinLine></RiDeleteBinLine>
              </div>
    
            </div>
            )
          })}
        </div>

        {/* right side */}
        <div className=' w-[95vw] md:w-[35%] lg:w-[350px] shadow-md p-4 h-fit'>
          <div className='space-y-4 '>
          <div className='flex justify-between shadow-sm '>
            <p className='text-[1.5rem]  text-[#000000]'>Subtotal</p>
            <p className='text-[1.3rem] text-[#555] '>₹ 70</p>
          </div>
          <div className='flex justify-between shadow-sm'>
            <p className='text-[1.5rem]  text-[#000000]'>Delivery</p>
            <p  className='text-[1.3rem] text-[#555] '>₹ 60</p>
          </div>
          <div className='flex justify-between shadow-sm'>
            <p className='text-[1.5rem] font-bold text-[#000000]'>Total</p>
            <p  className='text-[1.3rem] text-[#555] font-semibold'>₹ 130</p>
          </div>
          <button className='bg-[#FF3E3E] w-full h-[50px] text-white
          rounded-xl font-bold text-[1.3rem]'>
            Place Order
          </button>

          </div>
        </div>


      </div>


    </section>
  )
}

export default Cart


