import hero from '../assets/images/ExperienceImg.webp'
import { FaWarehouse, FaShippingFast, FaBoxOpen, FaShieldAlt } from 'react-icons/fa'

export const ExpSection = () => {
  return (
    <div className='px-7 md:px-8 lg:px-13 flex flex-col md:flex-row gap-20'>
        <div className='flex flex-col'>
            <div className='flex gap-6 h-fit justify-center md:justify-end items-center mb-4'>
                <hr className='w-21.5 text-[#FF5E41]'/>
                <p className='text-lg lg:text-2xl tracking-widest text-[#FF5E41]'>OUR EXPERIENCE</p>
            </div>

            <h3 className='font-semibold h-fit text-4xl lg:text-6xl text-center md:text-right w-full mb-11'>
                LET THE NUMBERS <span className='text-[#FF5E41]'>SPEAK</span>
            </h3>

            <div className='flex flex-1 justify-between flex-col'>
                <div className='flex items-center w-full hover:text-[#FF5E41]'>
                    <span className='pr-5'>
                        <FaWarehouse className='text-3xl' />
                    </span>
                    <div className='cont-stat'>
                        <div className='stat'>
                            <p>WAREHOUSING</p>
                            <p>90%</p>
                        </div>
                        <div className='bar'>
                            <div className='level w-[90%]'></div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center w-full hover:text-[#FF5E41]'>
                    <span className='pr-5'>
                        <FaBoxOpen className='text-3xl' />
                    </span>
                    <div className='cont-stat'>
                        <div className='stat'>
                            <p>PACKAGING</p>
                            <p>83%</p>
                        </div>
                        <div className='bar'>
                            <div className='level w-[83%]'></div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center w-full hover:text-[#FF5E41]'>
                    <span className='pr-5'>
                        {/* icon */} 
                        <FaShippingFast className='text-3xl' />
                    </span>
                    <div className='cont-stat'>
                        <div className='stat'>
                            <p>SHIPPING</p>
                            <p>95%</p>
                        </div>
                        <div className='bar'>
                            <div className='level w-[95%]'></div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center w-full hover:text-[#FF5E41]'>
                    <span className='pr-5'>
                        {/* icon */} 
                        <FaShieldAlt className='text-3xl' />
                    </span>
                    <div className='cont-stat'>
                        <div className='stat'>
                            <p>RELIABILITY</p>
                            <p>85%</p>
                        </div>
                        <div className='bar'>
                            <div className='level w-[85%]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src={hero} alt="Hero image" className='w-80 h-100 object-cover self-center md:w-1/2' />
    </div>
  )
}
