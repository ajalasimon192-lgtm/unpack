import React from 'react'
import header from '../assets/images/headerImg.jpg'

export const Header = () => {
  return (
    <div className='relative'>
        <div className='absolute inset-0 bg-[#FF5E41]' 
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 73%)' }}/>

        <div className='relative h-115 bg-cover bg-center px-13 flex justify-between items-center text-white pb-24' 
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${header})`
                    ,clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)"}}>
            
            <div className='w-100'>
                <div className='flex items-center gap-3'>
                    <hr className='w-20' />
                    <p className='tracking-widest'>FAST & SECURE MOVE</p>
                </div>

                <p className='font-semibold text-7xl leading-18 mt-3 pb-10'>
                    MOVING WAS NEVER <span className='text-[#FF5E41]'>SO EASY</span>
                </p>

                {/* to add icon */}
                <a href="" className=''>GET STARTED <span></span> </a>
            </div>

            <div className='flex flex-col justify-between gap-5 text-right'>
                <div>
                    <p className='text-[#FF5E41] text-xl'>Relocation</p>
                    <p className='text-5xl font-semibold'>80<sup>+</sup></p>
                </div>
                <div>
                    <p className='text-[#FF5E41] text-xl'>CLIENT</p>
                    <p className='text-5xl font-semibold'>12<sup>K</sup></p>
                </div>
                <div>
                    <p className='text-[#FF5E41] text-xl'>MOVING HOURS</p>
                    <p className='text-5xl font-semibold'>150<sup>+</sup></p>
                </div>
            </div>
        </div>
    </div>
  )
}
