import React from 'react'
import hero from '../assets/images/aboutUs.jpg'

export const AboutUs = () => {
  return (
    <div className='flex px-13 items-center gap-15'>
        <div className='relative roundedxl'>
            <img src={hero} alt="image of a man deliering a package" className='w-500 h-100 object-cover object-top rounded-xl'/>
            <div className='absolute -right-7 -bottom-7 bg-[#FF5E41] flex items-center gap-1.5 text-white px-4 py-5'>
                <p className='text-7xl font-bold tracking-tighter'>23</p>
                <div className='flex flex-col text-sm'>
                    <span>YEARS</span>
                    <span>OF</span>
                    <span>EXPERIENCE</span>
                </div>
            </div>
        </div>
        <div>
            <div className='flex items-center gap-4 mb-4 text-2xl text-[#FF5E41]'>
                <hr  className='w-15 '/>
                <p className='tracking-widest'>ABOUT US</p>
            </div>
            <h2 className='text-6xl mb-8'>TRANSPORT & <span className='text-[#FF5E41]'>LOGISTICS</span></h2>
            <p className='text-[#A7A7A7] text-lg'>
                At Unpack delivery service, we are committed to making deliveries simple, fast and reliable. 
                Our goal is to provide convienient delivery solutions for individuals and businesses, 
                ensuring that packages, documents,  and orders reach their destination safely 
                and on time
            </p>
            
            <div className="icons mt-14 text-[#A7A7A7] ">
                {/* icons twitter, fb, ig */}
                <p>Icon</p>
            </div>
        </div>
    </div>
  )
}
