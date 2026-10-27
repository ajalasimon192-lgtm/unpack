import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa' 
import hero from '../assets/images/aboutUs.webp'

export const AboutUs = () => {
  return (
    <div className='flex flex-col md:flex-row gap-15 px-7 md:px-9 lg:px-13 items-center md:gap-18.25 lg:gap-15' id='about'>
        <div className='relative roundedxl'>
            <img src={hero} alt="image of a man deliering a package" className='md:w-122.75 h-100 object-cover object-top rounded-xl md:h'/>
            <div className='absolute -right-7 -bottom-7 bg-[#FF5E41] flex items-center gap-1.5 text-white px-4 py-5'>
                <p className='lg:text-7xl font-bold text-[40px] tracking-tighter'>23</p>
                <div className='flex flex-col text-xs lg:text-[16px] '>
                    <span>YEARS</span>
                    <span>OF</span>
                    <span>EXPERIENCE</span>
                </div>
            </div>
        </div>
        <div>
            <div className='flex items-center gap-6 mb-4 text-lg lg:text-2xl text-[#FF5E41]'>
                <hr  className='w-21.5 '/>
                <p className='tracking-widest'>ABOUT US</p>
            </div>
            <h2 className='text-2xl md:text-4xl lg:text-[64px] mb-8 font-semibold md:w-70 md:leading-10 lg:w-110 lg:leading-20'>TRANSPORT & <span className='text-[#FF5E41]'>LOGISTICS</span></h2>
            <p className='text-[#A7A7A7] md:text-sm lg:text-lg'>
                At Unpack delivery service, we are committed to making deliveries simple, fast and reliable. 
                Our goal is to provide convienient delivery solutions for individuals and businesses, 
                ensuring that packages, documents,  and orders reach their destination safely 
                and on time.
            </p>
            
            <div className="flex gap-4 mt-14 text-[#A7A7A7] float-right">
                <FaTwitter className='abt-icons' />
                <FaInstagram className='abt-icons' />
                <FaFacebook className='abt-icons' />
            </div>
        </div>
    </div>
  )
}
