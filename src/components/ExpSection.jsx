import hero from '../assets/images/ExperienceImg.jpg'
import warehousing from '../assets/images/warehousing.svg'
import packaging from '../assets/images/packaging.svg'
import shipping from '../assets/images/shipping.svg'
import reliability from '../assets/images/reliability.svg'

export const ExpSection = () => {
  return (
    <div className='md:px-8 lg:px-13 flex gap-20'>
        <div>
            <div className='flex gap-6 justify-end items-center mb-4'>
                <hr className='w-21.5 text-[#FF5E41]'/>
                <p className='md:text-lg lg:text-2xl tracking-widest text-[#FF5E41]'>OUR EXPERIENCE</p>
            </div>

            <h3 className='font-semibold md:text-4xl lg:text-6xl text-right w-full'>
                LET THE NUMBERS <span className='text-[#FF5E41]'>SPEAK</span>
            </h3>

            <div className='mt-11 w-full flex flex-col gap-3.5'>
                <div className='flex items-center w-full hover:text-[#FF5E41]'>
                    <span className='pr-5'>
                        {/* icon */} 
                        ⭐
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
                        {/* icon */} 
                        🌞
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
                        🌞
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
                        🌞
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
        <img src={hero} alt="Hero image" className='w-1/2' />
    </div>
  )
}
