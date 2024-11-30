import React from 'react'
import mobileGirl from '../../assets/weServe/mobilegirl.svg'
import scooterImg from '../../assets/weServe/scooter.svg'
import girlboysImg from '../../assets/weServe/girlboys.svg'

function WeServe() {
  return (
    <section className=' mt-20 flex flex-col gap-y-14'>
        <div className="self-center space-y-5">
        <p className='text-[#EB5757] text-[1.2rem] font-semibold
        text-center leading-[24px] '>What We Serve</p>
         <h1 className=' lg:w-[532px] font-bold text-[1.9rem] lg:text-[2.8rem]
         text-[#333333]  leading-[60px] text-center'>
            Your Favorite Food Delivery Partner</h1>
        </div>    
        <div className='font-poppins lg:w-[1250px] flex flex-col mx-auto '>
       

            <div className='w-[90vw]  lg:w-[1250px] mx-auto flex
             justify-between md:[1250px] gap-y-5
              lg:space-y-0 flex-wrap md:flex-nowrap'>
                <div className=' w-full md:w-[200px] lg:w-[314px]  h-[336px]
                 flex flex-col
                items-center justify-between '>
                     <img src={mobileGirl} alt="" className='mobileImg
                      w-[214px] h-[200px]' />
                     <div className='md:w-[200px] w-[314px] lg:w-[314px] flex flex-col justify-center
                     items-center'>
                        <p className='font-bold text-[1.8rem]  '>Easy To Order</p>
                        <p className='font-medium text-[1.2rem]
                        text-[#333] text-center'>You only need a few steps in ordering food</p>
                     </div>

                </div>
                 
                <div className='w-[90vw] md:w-[200px] lg:w-[314px] h-[336px]  flex flex-col
                items-center justify-between '>
                     <img src={scooterImg} alt="" className='scooterImg
                      w-[214px] h-[200px]' />
                     <div className=' md:w-[200px] w-[314px] lg:w-[314px] flex flex-col justify-center
                     items-center '>
                        <p className='font-bold text-[1.8rem]  '>Fast Delivery</p>
                        <p className='font-medium text-[1.2rem]
                        text-[#333] text-center'>Delivery that is always ontime 
                        even faster</p>
                     </div>

                </div>

                <div className='w-[90vw] md:w-[200px] lg:w-[314px] h-[336px] flex flex-col
                items-center justify-between '>
                     <img src={girlboysImg} alt="" className='girlBoy w-[214px] h-[200px]' />
                     <div className='w-[314px] md:w-[200px] lg:w-[314px] flex flex-col justify-center
                     items-center '>
                        <p className='font-bold text-[1.8rem]  '>Best Quality</p>
                        <p className='font-medium text-[1.2rem]
                        text-[#333] text-center'>Not only fast quality is
                         also number one</p>
                     </div>

                </div>

               

            </div>

        </div>

    </section>
  )
}

export default WeServe