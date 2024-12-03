import React, { useContext, useEffect, useState,} from 'react'
import { Link } from 'react-router-dom';
import { categoryFood } from '../apiData'
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../context/ContextApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function TopSelling() {
    const catergoryTop=[
        {id:1, name:"Chicken", dishCount:8, image:"https://media.istockphoto.com/id/178421857/photo/various-types-of-cheese.webp?s=1024x1024&w=is&k=20&c=zdGUXYNObbt7vp5WuaIpmvsMQ1jfZH8w-NuHoKT50xM="},
        {id:2, name:"Sea Food", dishCount:12, image:"https://media.istockphoto.com/id/467972538/photo/seafood-platter.jpg?s=612x612&w=0&k=20&c=-e6L4aoKgVfxugBGhhESRV2ObU8MGNyXtn0Qo24-NDc="},
        {id:3, name:"Dairy Food", dishCount:12, image:"https://media.istockphoto.com/id/623069396/photo/butter-curl-or-roll-clipping-paths.jpg?s=612x612&w=0&k=20&c=K9rxuDfEb-zvgorx3u1xX1vbphMgK7REkXptcpsQY6Y="},
        {id:4, name:"Fruits", dishCount:8, image:"https://media.istockphoto.com/id/851897232/photo/assorted-ripe-fresh-plums-bananas-peaches-and-apples-on-white-table.jpg?s=612x612&w=0&k=20&c=yw5Pk2LjHiGby9XBmHAWYiVCWn9o6jcC6_6nIO0OGTc="},
    ]
    
    const {addToCart} =useContext(CartContext)
    const [saveData, setSaveData] = useState(categoryFood.seaFood);
    const [selectCategoryId,setSelectCategoryId]= useState(2)
    const topHandler=(id)=>{
        setSelectCategoryId(id)
         switch(id){
            case 1:
                setSaveData(categoryFood.chiken)
                break;
            case 2:
                setSaveData(categoryFood.seaFood)  
                break;
            case 3:
                setSaveData(categoryFood.dairyFood) 
                break;
            case 4:
                setSaveData(categoryFood.fruits)         
         }
    }

   


   
  return (
    
    <section className='mt-[110px] font-poppins flex flex-col space-y-9'>
        <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
         <div className='lg:w-[1000px] mx-auto flex flex-col text-center'>
            <p className='text-[#FF6868] font-bold text-[1.5rem] tracking-wider '>Customer Favorites</p>
            <h2 className='font-bold text-[2rem] md:text-[3.8rem] text-[#000000]'>Popular Catagories</h2>

         </div>
        <div className='w-[100vw] md:w-[95vw]  lg:w-[1000px] mx-auto  flex
        flex-wra gap-x-2 justify-between   '>   
           {
            catergoryTop.map((item, index) => {
                return (
                    <div key={index} onClick={()=>topHandler(item.id)}
                     className={`
                        w-[45% w-[85px] h-[135px] h-[175px md:w-[150px]  lg:w-[200px] lg:h-[200px] cursor-pointer rounded-3xl
                         flex flex-col  justify-center items-center gap-y-1
                    bg-[#fffff] shadow-[0_0px_4px_rgba(0,0,0,0.3)]
                   ${selectCategoryId===item.id ?
                   "bg-[#EB5757 bg-black ":""} `}>
                    <div className={` w-[70px] h-[70px] lg:w-[110px] lg:h-[110px] bg-[#C1F1C6] rounded-full
                    flex  justify-center items-center hover:scale-105 border
                     hover:border-green-500
                    hover:brightness-90
                     ${selectCategoryId===item.id ?
                   " bg-slate-50 ":""} `}>
                        <img src={item.image} alt="" className='w-[40px] h-[40px]
                        lg:w-[70px] lg:h-[70px] rounded-full
                        hover:scale-105' />
                         
                    </div>
                  
                    <p className={`text-[#1E1E1E] text-[0.9rem] lg:text-[1.2rem] font-semibold
                     ${selectCategoryId===item.id ?
                   " text-slate-50 ":""} `}>{item.name}</p>
                    <p className={`text-gray-500 text-[0.9rem]
                     ${selectCategoryId===item.id ?
                   " text-slate-50 text-[1] font-semibold ":""} `}>({item.dishCount} dishes)</p>
                </div>
                )
                
           })
        }



        </div>


        <div className='w-[90vw] md:w-[80vw] lg:w-[1250px] mx-auto  '>
            <div className=' flex justify-between  flex-wrap gap-y-16 gap-x-2 '>
                {saveData.map((item,index)=>{
                    return(
                        <div key={index} className=' relative mx-auto w-[250px] h-[380px]
                        flex flex-col items-center justify-center gap-y-4 rounded-xl
                        shadow-lg hover:shadow-[0_0px_9px_rgba(00,00,00,0.3)] 
                        hover:scale-105 transition-shadow duration-500 '>
                            <Link to={`product/${item.id}`} className='
                            w-[100%] flex justify-center' >
                            <img src={item.image} alt="" className='w-[80%] border-black h-[195px]
                             rounded-full object-center cursor-pointer hover:brightness-90
                             transform transition-transform duration-300 hover:scale-105 hover:
                             hover:border hover:border-green-600 hover:drop-shadow-lg shadow-xl'
                             />
                             </Link>
                             <div className='flex flex-col gap-y-2 items-center'>
                             <h2 className='text-[1.4rem] font-semibold'>{item.mealName.slice(0,18)}</h2>
                             <p className='text-gray-500'>Fresh food and 100% healthy</p>
                             <p className='text-[1.5rem] text-center font-semibold'>
                                <span className='text-[1.2rem] text-yellow-500'>₹</span> {item.Price}</p>
                             <button onClick={()=>addToCart(item)}
                              className='absolute bottom-[-25px] outline-none 
                             py-3 px-7 rounded-2xl  text-[#ffff] bg-[#EB5757]
                             hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 font-semibold flex items-center 
                             gap-x-2 shadow-lg hover:scale-10 transition-transform duration-300'>Add To Cart
                             <FaCartShopping></FaCartShopping></button>
                             </div>

                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default TopSelling