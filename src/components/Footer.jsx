import logo from '../assets/images/logo.svg'

export const Footer = () => {
  return (
    <div className='relative mt-80' id='footer'>
        <div className='lg:px-20 absolute -top-1/3 left-1/2 -translate-x-1/2 bg-white w-2/3 pb-10 z-10'>
            <div className='flex flex-col justify-center'>
                <div className='flex items-center justify-center gap-6 mb-4'>
                    <div className='bg-[#FF5E41] h-0.5 w-21.5'></div>
                    <p className='tracking-widest md:text-lg lg:text-2xl text-[#FF5E41]'>BOOKING NOW</p>
                </div>

                <p className='font-semibold md:text-4xl lg:text-6xl text-[#222222] text-center'>
                    <span className='text-[#FF5E41]'>MOVING</span> THE WAY YOU WANT
                </p>
            </div>

            <form action="" className='mt-20 md:px-10 lg:px-0'>
                <div className=' grid grid-cols-2 gap-20 mb-10'>
                    <input type="name" placeholder='NAME' className='input' />
                    <input type="email" placeholder='EMAIL ADDRESS' className='input' />
                    <input type="number" placeholder='PHONE NUMBER' className='input' />
                    <input type="date" placeholder='DATE' className='input' />
                </div>
                <textarea name="description" placeholder='SERVICE DESCRIPTION' className='border-b border-b-[#BDBDBD] w-full h-20 outline-0 resize-none text-[#7A7A7A]' ></textarea>
                <div className='flex items-center md:justify-center md:text-[16px] lg:text-xl font-semibold lg:float-end mt-5'>BOOKING NOW <a href='' className='bg-[#FF5E41] px-5 py-3 rounded-4xl text'>&gt;</a></div>
            </form>
        </div>

        <div className='relative'>
            <div className='absolute inset-0 bg-[#FF5E41]' 
            style={{ clipPath: 'polygon(0 35%, 100% 0, 100% 100%, 0 73%)' }}/>
            
            <div className='bg-black w-full md:px-9 lg:px-13 pt-100 relative'
                    style={{ clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0 100%)"}}>
                <div className='grid grid-cols-3 gap-30 mb-10'>
                    <div className='grid grid-cols-1 gap-5.5'>
                        <div className='flex items-center'>
                            <img src={logo} alt="Logo image for the unpack delivery service" className='w-12'/>
                            <p className='font-bold text-white text-3xl'><span className='text-[#FF5E41]'>UN</span>PACK</p>
                        </div>

                        <div className='text-white text-[16px] pt-5.5 grid gap-5.5'>
                            <div>
                                {/* mail icon */}
                                <p>info@8pxlstudio</p>
                            </div>

                            <div>
                                {/* tel icon  */}
                                <p>+0123456789</p>
                            </div>
                            
                            <div>
                                {/* location icon */}
                                <p>021 Hollywood Boulevard, LA</p>
                            </div>
                        </div>
                    </div>

                    <div className='text-white grid gap-8.5 mt-5 mb-5'>
                        <h3 className='font-semibold text-xl'>DISCOVER MORE</h3>

                        <div className='grid grid-cols-1 gap-6'>
                            <a href="" className='hover:underline'>ABOUT US</a>
                            <a href="" className='hover:underline'>SERVICE</a>
                            <a href="" className='hover:underline'>FEATURES</a>
                        </div>
                    </div>

                    <div className='text-white mt-5 mb-5'>
                        <h3 className='font-semibold text-xl'>JOIN OUR NEWSLETTER</h3>

                        <form action="" className='flex mt-8.5 '>
                            <input type="email" placeholder='EMAIL ADDRESS' className='w-full outline-0 border-b border-b-white' required/>
                            <button className='border-b text-2xl border-b-white bg-[#FF5E41] px-4 py-2 hover:bg-[#f37963]'>&gt;</button>
                        </form>

                        <div>
                            {/* socials icons */}
                        </div>
                    </div>
                </div>

                <hr className='w-full text-[#FFFFFF]'/>

                <div className='pt-10'>
                    <p className='text-lg text-white  text-center'>
                        &copy; 2025 Unpack. All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
