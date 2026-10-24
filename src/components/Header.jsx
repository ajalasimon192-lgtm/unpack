import React from 'react'
import header from '../assets/images/headerImg.webp'

export const Header = () => {
  return (
    <div className='relative'>
        <div className='absolute inset-0 bg-[#FF5E41]' 
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 73%)' }}/>

        <div className='relative h-150 bg-cover bg-center px-7 py-10 md:px-9 lg:px-13 flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between items-center text-white pb-24' 
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${header})`
                    ,clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)"}}>
            
            <div className='w-full md:w-1/2 flex flex-col self-center text-center md:text-left'>
                <div className='flex items-center md:self-start self-center gap-6'>
                    <hr className='w-21.5' />
                    <p className='tracking-[10px] text-lg'>FAST & SECURE MOVE</p>
                </div>

                <p className='font-semibold text-[60px] lg:text-7xl leading-18 mt-3 pb-10'>
                    MOVING WAS NEVER <span className='text-[#FF5E41]'>SO EASY</span>
                </p>

                <div className='flex items-center cursor-pointer self-center md:self-start'>
                        <a href='' className='text-xl lg:text-xl font-semibold hover:underline'>
                            GET STARTED
                        </a>
                        <a href="" className='text-3xl bg-[#FF5E41] opacity-60 text-white px-2 rounded-4xl'>
                            {/* TO ADD ICON */}
                            &gt;
                        </a>
                </div>
                {/* to add icon <a href="" className='flex items-'>GET STARTED <span className='text-white  px-3 bg-[#FF5E41] text-3xl rounded-4xl'>&gt;</span> </a> */}
                
            </div>

            <div className='flex md:flex-col md:w-1/2 w-full justify-between text-center md:text-right'>
                <div>
                    <p className='top'>RELOCATION</p>
                    <p className='bottom'>80<sup className='sup'>+</sup></p>
                </div>
                <div>
                    <p className='top'>CLIENT</p>
                    <p className='bottom'>12<sup className='sup'>K</sup></p>
                </div>
                <div>
                    <p className='top'>MOVING HOURS</p>
                    <p className='bottom'>150<sup className='sup'>+</sup></p>
                </div>
            </div>
        </div>
    </div>
  )
}
