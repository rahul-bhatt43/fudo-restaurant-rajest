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
    const videoUrl = 'https://youtu.be/I_MWvhjufKA?si=aKQ1WeoAb0eKqIH2';
  return (
    <header className=' z-0 mt-[120px] h-[600p]
     overflow-x-hidden'>
        <div className=' font-poppins  relative w-[90vw] md:w-[98vw] lg:w-[1250px] h-[600p]
         mx-auto flex flex-col md:flex-row  md:justify-between lg:justify-normal gap-y-11 lg:items-center'>
               {/* left */}
            <div className='space-y-5 lg:space-y-1 w-[90vw] md:w-[43vw]  lg:w-[594px]'>
                <div>
                    <button className='w-[204px] h-[52px] outline-none bg-[#FEE9DE] mx-auto lg:mx-0
                    text-[#EB5757] hover:bg-[#f7ded1] 
                    rounded-3xl flex items-center justify-center gap-x-5'>More than Faster 
                    <img src={left_Apple} alt=""
                    className='w-[20px] h-[18px] ' /></button>
                </div>
 
                <h1 className=' w-full md:w-[40vw] lg:w-[594px] leading-[60px] md:leading-[45px] lg:leading-[90px]
                 font-bold text-[2.7rem]  md:text-[2rem] lg:text-[4.5rem]
                 text-[#333333]'>Be The Fastest In
                     Delivering Your <span className='text-[#EB5757]'>Food</span>  
                    
                </h1>

                <p className='w-full h-fit lg:w-[470px] lg:h-[70px] leading-[30px] text-[1.2rem] font-medium text-[#333333]'>Our job is to filling your
                 tummy with delicious food and  with fast and free delivery</p>

                <div className='flex items-center gap-x-[40px]'>
                    <button className='px-4 py-3 rounded-3xl outline-none lg:w-[186px] lg:h-[68px] lg:rounded-full font-medium 
                    lg:text-[1.2rem]  hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700
                     text-[#FFFFFF] bg-[#EB5757]'>Get Started</button>
                   <div className='relative flex items-center gap-x-4 cursor-pointer'>
                    <div className='w-[46px] h-[46px] rounded-full flex justify-center
                    items-center  bg-[#F2F2F2]'>
                        <a href={videoUrl} className='absolute w-full h-full z-10'>..</a>
                            <img src={left_PlayVector} alt="" className='z-0' />
                    </div>
                    
                   <button className=' outline-none font-medium text-[1.2rem] 
                   text-[#333333]'>Watch video</button>
                </div>
                </div> 

                {/* <div>
                    <button>hoee
                    </button>
                </div> */}

            </div>
               {/* right */}
            <div className='   relative  self-end  '>
                <div className='w-[90vw] h-[300px] flex justify-center bg-[#FF9E0C] rounded-[50px] 
               md:w-[50vw]  md:h-[300px] lg:w-[600px] lg:h-[400px]'>
                <img src={african_Woman} alt="" className='absolute bottom-0 w-[400px] 
               md:w-[400px] lg:w-[518px]' />
                   
                   <div className='w-[130px] lg:w-[237px] lg:h-[76px] bg-[#FFFFFF]
                   absolute bottom-5 rounded-2xl right-[-10px] lg:right-[-50px]  shadow-[0_3px_5px_rgba(0,0,0,0.5)] 
                   flex items-center justify-center gap-x-3 group hover:bg-blue-500 cursor-pointer duration-200 '>
                    <div>
                   <img src={right_Location} alt="" className='w-[30px] lg:w-fit' />
                   </div>
                   <div>
                      <p className='text-[#404040] font-semibold text-[1rem]
                       lg:text-[1.4rem] group-hover:text-white '>Location</p>
                      <p className='text-[#404040 text-[0.7rem] lg:text-[1rem]
                      group-hover:text-white'>at destination</p>
                   </div>
                   </div>

                   <div className='hidden absolute right-[-100px] top-8  w-[270px] h-[85px] bg-[#ffff]
                   rounded-2xl shadow-[0_3px_5px_rgba(0,0,0,0.5)] lg:flex group hover:bg-black cursor-pointer duration-300 ease-in
                   items-center justify-center gap-x-5'>
                    <div>
                      <img src={right_Image} alt="" className='w-[58px] h-[58px]' />
                     </div>
                     <div className='w-[175px] h-[61px]'>
                        <p className='text-[#404040] font-semibold group-hover:text-white
                        text-[1.4rem]' >Rajesh Panwar</p>
                         <div className='flex justify-around '>
                            <div className='flex gap-x-2 text-[#404040]'>
                                <img src={right_Star} alt="" />
                                <p className='group-hover:text-white'>4.5</p>

                            </div>
                            <div className='flex gap-x-3 text-[#404040]'>
                                <img src={right_Like} alt="" />
                                <p className='group-hover:text-white'>1k</p>

                            </div>
                         </div>
                     </div>
                       
                   </div>

                   <div className='w-[130px] lg:w-[206px] lg:h-[76px] cursor-pointer bg-[#FFFFFF] group hover:bg-black
                   duration-300 ease-in
                   absolute left-[-20px] top-10 lg:left-[-50px]  rounded-2xl   shadow-[0_3px_5px_rgba(0,0,0,0.5)] 
                   flex items-center justify-center gap-x-3  '>
                    <div>
                   <img src={right_Delivery} alt="" className='w-[30px] lg:w-fit ' />
                   </div>
                   <div>
                      <p className='text-[#404040] font-semibold 
                      text-[1rem] lg:text-[1.4rem] group-hover:text-white '>Delivery</p>
                      <p className='text-[0.8rem] lg:text-[1rem] text-[#404040] group-hover:text-white'>in 30 mint</p>
                   </div>
                   </div>

                   <div className='hidde lg:block absolute left-0  lg:left-[-140px] bottom-0 flex flex-col 
                   justify-center items-center gap-x-1 '>
                      <div className='flex '>
                        <img src={right_CircleImage1} alt="" className='firstimg w-[50px] md:w-fit' />
                        <img src={right_CircleImage2} alt="" className='secondimg ml-[-20px] w-[50px] md:w-fit' />
                        <img src={right_CircleImage3} alt="" className='thirdimg ml-[-20px] w-[50px] md:w-fit' />

                      </div>
                      <div className='flex flex-col group  '>
                        <p className='font-semibold text-[#000000] 
                        '>Our Happy Customer</p>
                        <div className='flex gap-x-2'>
                            <img src={right_Star} alt="" className='w-[20px]' />
                            <div className='flex gap-x-2'>
                                <p className='font-medium text-[#000000]
                            '>4.5</p>
                                <p className='text-[#828282] font-medium text-[0.9rem]
                                '>(12.5k Review)</p>
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
                