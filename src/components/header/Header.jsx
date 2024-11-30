import React from 'react'
import left_Apple from '../../assets/header/image 1.svg'
import left_PlayVector from '../../assets/header/Vector (19).svg'
import right_Backgroundcircle from '../../assets/header/Ellipse 3.svg'
import african_Woman from '../../assets/header/girl.svg'
import right_Location from '../../assets/header/image 23.svg'
import right_Image from '../../assets/header/Ellipse 2.svg'
import right_Delivery from '../../assets/header/delivery.svg'
import right_Star from '../../assets/header/image 24.svg'
import right_Like from '../../assets/header/Vector (20).svg'
import right_CircleImage1 from '../../assets/header/Ellipse 5.svg'
import right_CircleImage2 from '../../assets/header/Ellipse 6.svg'
import right_CircleImage3 from '../../assets/header/Ellipse 7.svg'
import right_fireImage from '../../assets/header/noto_fire.svg'

function Header() {
  return (
    <header className=' z-0 mt-[120px] h-[600p]
     overflow-x-hidden'>
        <div className=' font-poppins  relative w-[90vw] lg:w-[1250px] h-[600p]
         mx-auto flex flex-col lg:flex-row gap-y-11 lg:items-center'>
               {/* left */}
            <div className='space-y-5 lg:space-y-1 w-[90vw]  lg:w-[594px]'>
                <div>
                    <button className='w-[204px] h-[52px] bg-[#FEE9DE] mx-auto lg:mx-0
                    text-[#EB5757] rounded-3xl flex items-center justify-center gap-x-5'>More than Faster 
                    <img src={left_Apple} alt=""
                    className='w-[20px] h-[18px] ' /></button>
                </div>
 
                <h1 className=' w-full lg:w-[594px] leading-[60px] lg:leading-[90px] font-bold text-[2.8rem] lg:text-[4.5rem]
                 text-[#333333]'>Be The Fastest In
                     Delivering Your <span className='text-[#EB5757]'>Food</span>  
                    
                </h1>

                <p className='w-full h-fit lg:w-[470px] lg:h-[70px] leading-[30px] text-[1.2rem] font-medium text-[#333333]'>Our job is to filling your
                 tummy with delicious food and  with fast and free delivery</p>

                <div className='flex items-center gap-x-[40px]'>
                    <button className='px-4 py-4 rounded-3xl lg:w-[186px] lg:h-[68px] lg:rounded-full font-medium 
                    lg:text-[1.2rem]
                     text-[#FFFFFF] bg-[#EB5757]'>Get Started</button>
                   <div className='flex items-center gap-x-4'>
                    <div className='w-[46px] h-[46px] rounded-full flex justify-center
                    items-center  bg-[#F2F2F2]'>
                            <img src={left_PlayVector} alt="" />
                    </div>
                    
                   <button className='font-medium text-[1.2rem] text-[#333333]'>Watch video</button>
                </div>
                </div> 

                {/* <div>
                    <button>hoee
                    </button>
                </div> */}

            </div>
               {/* right */}
            <div className='   relative  self-end  '>
                <div className='w-[90vw] h-[300px] flex justify-center bg-[#FF9E0C] rounded-[50px] lg:w-[600px] lg:h-[400px]'>
                <img src={african_Woman} alt="" className='absolute bottom-0 w-[400px] lg:w-[518px]' />
                   
                   <div className='w-[130px] lg:w-[237px] lg:h-[76px] bg-[#FFFFFF]
                   absolute bottom-5 rounded-2xl right-[-10px] lg:right-[-50px]  shadow-[0_3px_5px_rgba(0,0,0,0.5)] 
                   flex items-center justify-center gap-x-3  '>
                    <div>
                   <img src={right_Location} alt="" className='w-[30px] lg:w-fit' />
                   </div>
                   <div>
                      <p className='text-[#404040] font-semibold text-[1rem] lg:text-[1.4rem]'>Location</p>
                      <p className='text-[#404040 text-[0.7rem] lg:text-[1rem]'>at destination</p>
                   </div>
                   </div>

                   <div className='hidden absolute right-[-100px] top-8  w-[270px] h-[85px] bg-[#ffff]
                   rounded-2xl shadow-[0_3px_5px_rgba(0,0,0,0.5)] lg:flex 
                   items-center justify-center gap-x-5'>
                    <div>
                      <img src={right_Image} alt="" className='w-[58px] h-[58px]' />
                     </div>
                     <div className='w-[175px] h-[61px]'>
                        <p className='text-[#404040] font-semibold 
                        text-[1.4rem]' >Rajesh Panwar</p>
                         <div className='flex justify-around '>
                            <div className='flex gap-x-2 text-[#404040]'>
                                <img src={right_Star} alt="" />
                                <p>4.5</p>

                            </div>
                            <div className='flex gap-x-3 text-[#404040]'>
                                <img src={right_Like} alt="" />
                                <p>1k</p>

                            </div>
                         </div>
                     </div>
                       
                   </div>

                   <div className='w-[130px] lg:w-[206px] lg:h-[76px] bg-[#FFFFFF]
                   absolute left-[-20px] top-10 lg:left-[-70px]  rounded-2xl   shadow-[0_3px_5px_rgba(0,0,0,0.5)] 
                   flex items-center justify-center gap-x-3  '>
                    <div>
                   <img src={right_Delivery} alt="" className='w-[30px] lg:w-fit' />
                   </div>
                   <div>
                      <p className='text-[#404040] font-semibold 
                      text-[1rem] lg:text-[1.4rem]'>Delivery</p>
                      <p className='text-[0.8rem] lg:text-[1rem] text-[#404040]'>in 30 mint</p>
                   </div>
                   </div>

                   <div className='hidden lg:block absolute left-[-140px] bottom-0 flex flex-col 
                   justify-center items-center gap-x-1 '>
                      <div className='flex '>
                        <img src={right_CircleImage1} alt="" className='firstimg' />
                        <img src={right_CircleImage2} alt="" className='secondimg ml-[-20px]' />
                        <img src={right_CircleImage3} alt="" className='thirdimg ml-[-20px]' />

                      </div>
                      <div className='flex flex-col  '>
                        <p className='font-semibold text-[#000000] '>Our Happy Customer</p>
                        <div className='flex gap-x-2'>
                            <img src={right_Star} alt="" className='w-[20px]' />
                            <div className='flex gap-x-2'>
                                <p className='font-medium text-[#000000]'>4.5</p>
                                <p className='text-[#828282] font-medium text-[0.9rem]'>(12.5k Review)</p>
                            </div>
                        </div>

                      </div>
                   </div>

                   <div className='fireImg absolute right-0 top-[-40px]'>
                        <img src={right_fireImage}
                         alt="" className='' />
                   </div>


                </div>


            </div>


            </div>
            </header>

           )     }

        export default Header;    
                