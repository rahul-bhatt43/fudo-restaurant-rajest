import React, { useContext, useEffect, useRef, useState } from 'react'
import { categoryFood } from '../apiData'
import { RxCross2 } from "react-icons/rx";
import { CartContext } from '../context/ContextApi';

function ChineseFood() {
    const [showModel,setShowModel] = useState(null)
    const {addToCart} = useContext(CartContext)
    const {cart} = useContext(CartContext)
    const {setCart}= useContext(CartContext)
    console.log('indian remove btn',cart)
    const cartRef = useRef(null);
    const modelHandler=(id)=>{
        setShowModel(id)
    }
    const closeModal = () => {
        setShowModel(null);
    };
    

    const removeHandler = (removeItem) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(pro => pro.item.id === removeItem.id);
    
            if (existingItem) {
                if (existingItem.quantity > 1) {
            
                    return prevCart.map(pro => 
                        pro.item.id === removeItem.id
                            ? {
                                ...pro,
                                quantity: pro.quantity - 1,
                                totalPrice: (pro.quantity - 1) * pro.item.Price
                              }
                            : pro
                    );
                } else {
                    
                    return prevCart.filter(pro => pro.item.id !== removeItem.id);
                }
            }
            return prevCart; 
        });
    };

    useEffect(() => {
        if (cartRef.current) {
            cartRef.current.scrollIntoView({ behavior: 'smooth', });
        }
    }, []);

  return (
    <section ref={cartRef} className='mt-[110px] font-poppins'>
        <div className='w-[95vw] md:w-[80vw] lg:w-[1150px] mx-auto space-y-28'>
            <h2 className=' text-[1.9rem] md:text-[2rem] lg:text-[2.5rem] font-bold text-center'>Our Indian Food</h2>
            <div className='flex flex-wrap justify-between gap-y-24 md:gap-y-36'>
                {categoryFood.chineseFood.map((item,index)=>{
                    return(
                        <div key={index} className='relative rounded-xl -z-0 
                        shadow-[0_3px_10px_rgba(00,00,00,0.2)] w-[47%] md:w-[250px] h-[250px]
                        flex flex-col justify-center items-center space-y-12
                        hover:scale-105 cursor-pointer'>
                            <div className=' absolute top-[-50px] md:top-[-75px]  z-20 
                            shadow-[0_4px_10px_rgba(00,00,00,0.2)] 
                          w-[120px] h-[120px]  md:w-[160px] md:h-[160px] rounded-full
                            flex justify-center items-center bg-white transition-all
                             duration-300 ease-in hover:rotate-90 hover:duration-200
                             hover:border-green-200 hover:border'>
                                <img src={item.image} alt="food" className='w-[80xp] h-[80px]
                                md:w-[110px] md:h-[110px]  shadow-[0_0px_10px_rgba(00,00,00,0.5)]
                                rounded-full 
                                '></img>

                            </div>

                            <div className='flex flex-col items-center gap-y-4'>
                            <div className='space-y-2'>
                                <h1 className='text-[1rem] md:text-[1.3rem] font-semibold text-center'>{item.mealName.slice(0,18)}</h1>
                                <p className='text-[1rem] text-center text-[#555]'>
                                 {item.des.slice(0,28)}...</p>              
                            </div>
                            <p className='text-[1.5rem] font-semibold
                                text-center'><span className= 
                                'text-yellow-500 text-[1.2rem]'>₹ </span>{item.Price}
                            </p>  
                            <div className='absolute bottom-[-25px]'>
                                <div className='w-[50px] h-[50px] rounded-full   bg-[#FF3E3E]
                                flex justify-center items-center
                                transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-red-400
                                 hover:to-red-700 '>
                                <button onClick={()=>modelHandler(item.id)} className=' text-white  text-[1.9rem] font-semibold
                                 '> +
                                </button>
                                {showModel===item.id &&
                                <div  className='w-[170px] h-[80px]
                             md:w-[250px] md:h-[80px]
                                absolute top-[-70px] left-[-60px] md:top-[-50px] md:left-[-100px] inset-0
                                 shadow-[0_2px_5px_rgba(00,00,00,0.5)] bg-slate-50
                                bg-opacity-45
                                backdrop-blur-sm  rounded-lg
                                '>
                                    <div className='  h-[75px] flex flex-col
                                    justify-between ' >
                                    <button onClick={closeModal} className='text-black text-[1.9rem]
                                    self-top font-bold self-end'>
                                       <RxCross2></RxCross2>
                                    </button>
                                    <div className='space-x-3 self-center flex  '>
                                    <button onClick={()=>addToCart(item)} className=' 
                                      bg-[#FF3E3E] p-2 md:px-3 md:py-2 outline-none
                                      text-[0.9rem] md:text-[1rem] text-white rounded-xl md:font-semibold
                                      hover:bg-gradient-to-r hover:from-red-500
                                       hover:to-red-700
                                      transition-all duration-300 ease-in'>
                                        AddToCart
                                    </button>
                                    <button
                                    onClick={()=>removeHandler(item)}
                                     className=' 
                                         bg-[#FF3E3E] p-2 md:px-6 md:py-2 outline-none
                                     text-[0.9rem]  md:text-[1rem] text-white rounded-xl md:font-semibold
                                      hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700
                                       transition-all duration-300 ease-in'>
                                        Remove
                                    </button>
                                    </div>
                                    </div>
                                </div> }
                                </div>
                
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>

    </section>
  )
}

export default ChineseFood