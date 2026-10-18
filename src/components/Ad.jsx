import hero from '../assets/images/banner1.png'

export const Ad = () => {
  return (
    <div className='relative'>
        <img src={ hero } alt="delivery image" className='w-100 absolute z-10 right-0'/>
        <div className='absolute inset-0 bg-[#FF5E41]' 
                style={{ clipPath: 'polygon(0 15%, 100% 35%, 100% 30%, 0 100%)' }}/>
                {/* 'polygon(0 0, 100% 0, 100% 100%, 0 73%) */}

        <div className='bg-black flex items-center md:px-9 lg:px-13' 
                style={{ clipPath: 'polygon(0 35%, 100% 15%, 100% 100%, 0 100%)' }}>
            <div className='text-white h-100 flex items-center'>
                    {/* (0 0, 100% 0, 100% 75%, 0 100%)" */}
                <div className='mt-30'>
                    <p className='md:text-4xl lg:text-5xl font-semibold mb-15 lg:w-200 md:w-100'>
                        OUR FLEET IS READY TO SHIP <span className='text-[#FF5E41]'>WORLDWIDE</span>
                    </p>

                    {/* <a href="" className='text-xl font-semibold'>
                        CALL US NOW <span></span>
                    </a> */}

                    <div className='flex items-center cursor-pointer'>
                        <a href='tel:+2348105452155' className='md:text-[16px] lg:text-xl font-semibold hover:underline'>
                            CALL US NOW
                        </a>
                        <a href="" className='text-xl bg-[#FF5E41] text-white px-3 py-1 rounded-4xl'>
                            {/* TO ADD ICON */}
                            &gt;
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
