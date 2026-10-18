import React from 'react'
import header from '../assets/images/headerImg.jpg'

export const Header = () => {
  return (
    <div className='relative'>
        <div className='absolute inset-0 bg-[#FF5E41]' 
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 73%)' }}/>

        <div className='relative h-150 bg-cover bg-center md:px-9 lg:px-13 flex justify-between items-center text-white pb-24' 
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${header})`
                    ,clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)"}}>
            
            <div className='w-100'>
                <div className='flex items-center gap-3'>
                    <hr className='w-20' />
                    <p className='tracking-widest text-lg'>FAST & SECURE MOVE</p>
                </div>

                <p className='font-semibold md:text-[60px] lg:text-7xl leading-18 mt-3 pb-10'>
                    MOVING WAS NEVER <span className='text-[#FF5E41]'>SO EASY</span>
                </p>

                <div className='flex items-center cursor-pointer'>
                        <a href='' className='md:text-xl lg:text-xl font-semibold hover:underline'>
                            GET STARTED
                        </a>
                        <a href="" className='text-3xl bg-[#FF5E41] opacity-60 text-white px-2 rounded-4xl'>
                            {/* TO ADD ICON */}
                            &gt;
                        </a>
                </div>
                {/* to add icon <a href="" className='flex items-'>GET STARTED <span className='text-white  px-3 bg-[#FF5E41] text-3xl rounded-4xl'>&gt;</span> </a> */}
                
            </div>

            <div className='flex flex-col justify-between md:gap-4 lg:gap-5 text-right'>
                <div>
                    <p className='text-[#FF5E41] md:text-[16px] lg:text-xl'>Relocation</p>
                    <p className='md:text-[40px] lg:text-5xl font-semibold'>80<sup className='md:text-2xl'>+</sup></p>
                </div>
                <div>
                    <p className='text-[#FF5E41] md:text-[16px] lg:text-xl'>CLIENT</p>
                    <p className='md:text-[40px] lg:text-5xl font-semibold'>12<sup className='md:text-2xl'>K</sup></p>
                </div>
                <div>
                    <p className='text-[#FF5E41] md:text-[16px] lg:text-xl'>MOVING HOURS</p>
                    <p className='md:text-[40px] lg:text-5xl font-semibold'>150<sup className='md:text-2xl'>+</sup></p>
                </div>
            </div>
        </div>
    </div>
  )
}
