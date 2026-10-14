import logo from '../assets/images/logo.svg'

export const Footer = () => {
  return (
    <div className='relative'>
        <div className='px-20'>
            <div className='flex flex-col justify-center'>
                <div className='flex items-center justify-center gap-6 mb-4'>
                    <div className='bg-[#FF5E41] h-0.5 w-21.5'></div>
                    <p className='tracking-widest text-2xl text-[#FF5E41]'>BOOKING NOW</p>
                </div>

                <p className='font-semibold text-6xl text-[#222222] text-center'>
                    <span className='text-[#FF5E41]'>MOVING</span> THE WAY YOU WANT
                </p>
            </div>

            <form action="" className='mt-20'>
                <div className='grid grid-cols-2 gap-20 mb-10'>
                    <input type="name" placeholder='NAME' className='input' />
                    <input type="email" placeholder='EMAIL ADDRESS' className='input' />
                    <input type="number" placeholder='PHONE NUMBER' className='input' />
                    <input type="date" placeholder='DATE' className='input' />
                </div>
                <textarea name="description" placeholder='SERVICE DESCRIPTION' className='border-b w-full h-20 outline-0 resize-none text-[#7A7A7A]' ></textarea>
                <div className='flex items-center text-xl font-semibold float-end mt-5'>BOOKING NOW <a href='' className='bg-[#FF5E41] px-5 py-3 rounded-4xl text'>&gt;</a></div>
            </form>
        </div>

        <div>
            <div></div>
            
            <div className='bg-black px-13'>
                <div>
                    <div className='flex items-center'>
                        <img src={logo} alt="Logo image for the unpack delivery service" className='w-12'/>
                        <p className='font-bold text-white text-3xl'><span className='text-[#FF5E41]'>UN</span>PACK</p>
                    </div>

                    <div className='text-white'>
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

                <div className='text-white'>
                    <h3>DISCOVER MORE</h3>

                    <div>
                        <a href="">ABOUT US</a>
                        <a href="">SERVICE</a>
                        <a href="">FEATURES</a>
                    </div>
                </div>

                <div className='text-white'>
                    <h3>JOIN OUR NEWSLETTER</h3>

                    <form action="">
                        <input type="email" placeholder='EMAIL ADDRESS' />
                        <button className='border-b border-b-white bg-[#FF5E41]'>&gt;</button>
                    </form>

                    <div>
                        {/* socials icons */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
