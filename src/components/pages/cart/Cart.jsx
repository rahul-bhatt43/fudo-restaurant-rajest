import React, { useContext, useEffect, useRef, useState } from 'react'
import { CartContext } from '../../context/ContextApi'
import { RiDeleteBinLine } from "react-icons/ri";
import { categoryFood } from '../../apiData';
import { ImCart } from "react-icons/im";
import emptyCartImg from '../.././/../assets/weServe/emptyCart.webp'

function Cart() {
  // console.log(categoryFood)
  const { cart ,setCart} = useContext(CartContext)
  const [storeCoupen,setStoreCoupen] =useState('')
  const [coupenCodeToal, setCoupenCodeTotal] = useState(false)
  const cartRef = useRef(null)
  console.log(coupenCodeToal)

  const coupen ='rajesh@10';
  console.log('cart',cart)

  

  const removeHandler=(id)=>{
    setCart(cart.filter(pro=>pro.item.id!==id))
    setCoupenCodeTotal(false)

    }

    const incrementQuantity = (id) => {
      setCart(cart.map(pro => {
        if (pro.item.id === id) {
          const newQuantity = pro.quantity + 1; 
          return {
            ...pro,
            quantity: newQuantity,
            totalPrice: pro.item.Price * newQuantity 
          };
        }
        return pro; 
      }));
    }

  
    const decrementQuantity = (id) => {
      setCart(cart.map(pro => {
        if (pro.item.id === id) {
          const newQuantity = pro.quantity > 1 ? pro.quantity - 1 : 1; 
          return {
            ...pro,
            quantity: newQuantity,
            totalPrice: pro.item.Price * newQuantity 
          };
        }
        return pro; 
      }));
    }
  
    // Calculate subtotal
    const subtotal = cart.reduce((acc, pro) => acc + pro.totalPrice, 0);
    const deliveryFee = 60; 
    const total = subtotal + deliveryFee; 
    const discount = 10;
    const coupenCodeHandler =()=>{

      if(storeCoupen===coupen){
        const discountedAmount = total*(discount/100)
        setCoupenCodeTotal(total - discountedAmount)
        if(cart.quantity<1) {
            setCoupenCodeTotal(false)
            console.log('less then one')
        }
      }
      else{
        alert('invalid coupen')
      }            
    }

    useEffect(() => {
      if (cartRef.current) {
          cartRef.current.scrollIntoView({ behavior: 'smooth', });
      }
  }, []);

  return (
    <section ref={cartRef} className=' mt-[125px] lg:mt-[160px] font-poppins'>
      <div className=' w-[95vw] lg:w-[1300px]  mx-auto flex flex-col md:flex-row
       justify-between gap-y-4'>
        
        <div className='w-[95vw] md:w-[60vw] lg:w-[900px] 
        flex flex-col gap-y-5 '>
          {cart.map((pro,index)=>{
            return(
              
              <div key={index} className=' flex justify-between lg:justify-around items-center
               border-green-500 shadow-[0_5px_5px_rgba(00,00,00,0.1)] rounded-xl'>
                <div className='flex items-center gap-x-2 lg:gap-8
                w-[215px] md:w-fit  lg:w-[405px]'>
                <div className=' w-[70px] h-[70px] md:w-[120px] md:h-[120px] 
                lg:w-[170px] lg:h-[170px] rounded-full bg-gray-200 flex 
                justify-center items-center shadow-md'>
              <img src={pro.item.image} alt="" className=' w-[50px] h-[50px] md:w-[90px] md:h-[90px]
              lg:w-[120px] lg:h-[120px]
               rounded-full ' />
              </div>
              <div>
                <p className='text-[#000000] font-semibold text-[1rem] md:-[1.3rem] 
                lg:text-[1.5rem]'>{pro.item.mealName.slice(0,16)}</p>
                <p className='hidde lg:block text-gray-400 text-[1rem] '>
                 Healty food...</p>
              </div>
              </div>
             
              <p className='text-[1.1rem] md:text-[1.3rem] lg:text-[1.6rem] md:font-semibold'><span className='text-yellow-500 
              lg:text-[1.3rem]'>₹</span> {pro.item.Price} </p>
              <div className=' w-[45px] h-[30px] md:w-[70px] md:h-[40px] lg:w-[120px] lg:h-[60px] rounded-xl bg-[#FF3E3E]
              flex justify-center items-center gap-x-1 lg:gap-x-3 '>
                <span onClick={()=>decrementQuantity(pro.item.id)} className=' 
                text-[1.2rem] lg:text-[1.9rem] text-[#fff] cursor-pointer'>-</span>
                <span className=' text-[1.3rem] lg:text-[2rem] text-[#fff]'>{pro.quantity}</span>
                <span onClick={()=>incrementQuantity(pro.item.id)} className='
                 text-[1.2rem] lg:text-[1.9rem] text-[#fff] cursor-pointer'>+</span>
              </div>
              
              <div onClick={()=>removeHandler(pro.item.id)} className='
              text-[1.1rem] md:text-[1.4rem] lg:text-[1.9rem] text-[#FF3E3E]  cursor-pointer'>
                <RiDeleteBinLine></RiDeleteBinLine>
              </div>
    
            </div>
            )
          })}
        </div>

        {/* right side */}
       {cart.length < 1 ? 
        <div className='  md:translate-x-[-50%]
         lg:translate-x-[-400px] '>
          <p className=' '>
            {/* Your cart is empty */}
            <img src={emptyCartImg} alt="" />
          </p>
             
      </div> :


        <div className=' w-[95vw] md:w-[35%] lg:w-[350px] shadow-md p-4 h-fit'>

          <div className='space-y-4 '>
            <div  >
              <p className='text-[1rem] text-slate-500'>for 10% discount   <span className='text-red-600
              text-[1.3rem] font-semibold'> rajesh@10</span></p>
             <div className='relative flex justify-between items-center shadow-[0_0px_5px_rgba(00,00,00,0.2)] '>
              <input type="text" placeholder='Apply promo code here'
              onChange={(e)=>setStoreCoupen(e.target.value)}
              className='w-full h-[50px] p-3 outline-none' />
              <button onClick={()=>coupenCodeHandler()} className='outline-none absolute right-2 bg-[#FF3E3E]
              shadow-sm rounded-sm text-white text-[1rem] font-semibold px-3 py-2
               hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700' >Apply</button>
            </div>
            </div>
          <div className='flex justify-between shadow-sm '>
            <p className='text-[1.5rem]  text-[#000000]'>Subtotal</p>
            <p className='text-[1.3rem] text-[#555] '>₹ {subtotal}</p>
          </div>
          <div className='flex justify-between shadow-sm'>
            <p className='text-[1.5rem]  text-[#000000]'>Delivery</p>
            <p  className='text-[1.3rem] text-[#555] '>₹ 60</p>
          </div>
          <div className='flex justify-between shadow-sm'>
            <p className='text-[1.5rem] font-bold text-[#000000]'>Total</p>
            <p  className='text-[1.3rem] text-[#555] font-semibold'>₹ 
              {coupenCodeToal ?coupenCodeToal :total   } </p>
          </div>
          <button className='bg-[#FF3E3E] w-full h-[50px] text-white
          rounded-xl font-bold text-[1.3rem] outline-none
           hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700'>
            Place Order
          </button>

          </div>
        </div>
       
        }


      </div>


    </section>
  )
}

export default Cart


