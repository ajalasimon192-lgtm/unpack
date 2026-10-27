import { useState } from 'react';
import logo from '../assets/images/logo.webp'
import Logo from '../assets/images/Logoforsmall.webp'
import { FaChevronUp, FaChevronDown, FaBars } from 'react-icons/fa';


export const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
}

const closeNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <div className={ isNavOpen ? 'bg-white text-black flex justify-between items-center border-b border-{#BDBDBD} px-7 md:px-9 lg:px-13 py-4' : 'bg-black text-white flex justify-between items-center border-b border-{#BDBDBD} px-7 md:px-9 lg:px-13 py-4' }>
        <div className='flex items-center'>
            <img src={isNavOpen ? Logo : logo} alt="Logo image for the unpack delivery service" className='w-12'/>
            <p className='font-bold text-3xl'><span className='text-[#FF5E41]'>UN</span>PACK</p>
        </div>

        <div className='hidden lg:flex lg:items-center lg:gap-4 '>
            <a href="/" className='text-[#FF5E41] cursor-pointer'>HOME</a>
            <a href="#about" className=' hover:text-[#FF5E41] cursor-pointer'>ABOUT US</a>
            <a href="#service" className=' hover:text-[#FF5E41] cursor-pointer'>SERVICE</a>
            <div className='relative'>
                <p onClick={toggle} className=' hover:text-[#FF5E41] cursor-pointer flex items-center gap-1'>FEATURE <span> {isOpen ? <FaChevronUp /> : <FaChevronDown />} </span></p>
                {isOpen && (
                    <div className="flex flex-col w-25 bg-black text-white absolute top-15.5 z-10">
                        <a href="#" className="link">FAQ</a>
                        <a href="#" className="link">404 PAGE</a>
                    </div>
                )}
            </div>
            <a href="#blog" className=' hover:text-[#FF5E41] cursor-pointer'>BLOG</a>

            <button className='px-8 py-5 bg-[#FF5E41] hover:bg-[#e88d7d]'>CONTACT US</button>
        </div>

        <div className='lg:hidden'>
            <button onClick={toggleNav} className={isNavOpen ? 'text-4xl font-semibold' : 'bg-transparent text-3xl' } >{isNavOpen ? 'X' : <FaBars /> }</button>

            {isNavOpen && (
                <div className='absolute top-20 left-0 z-10 bg-white w-full grid grid-cols-1 text-xl text-center gap-4 pt-[50.5px]'>
                    <a href="/" onClick={closeNav}  className='text-[#FF5E41] cursor-pointer'>HOME</a>
                    <a href="#about" onClick={closeNav} className=' hover:text-[#FF5E41] cursor-pointer'>ABOUT US</a>
                    <a href="#service" onClick={closeNav} className=' hover:text-[#FF5E41] cursor-pointer'>SERVICES</a>
                    <div className='relative'>
                        <p onClick={toggle} className=' hover:text-black cursor-pointer flex items-center justify-center'>FEATURE <span> {isOpen ? <FaChevronUp /> : <FaChevronDown /> } </span></p>
                        {isOpen && (
                            <div className="grid grid-cols-1 gap-4.5 bg-white text-[#A7A7A7]">
                                <a href="#" onClick={closeNav} className="mt-4.5 hover:text-[#FF5E41]">FAQ</a>
                                <a href="#" onClick={closeNav} className="hover:text-[#FF5E41]">404 PAGE</a>
                            </div>
                        )}
                    </div>
                    <a href="#blog" onClick={closeNav} className='hover:text-[#FF5E41] cursor-pointer mb-[50.5px]'>BLOG</a>

                    <button className='px-8 py-5 bg-[#FF5E41] hover:bg-[#e88d7d]'>
                        <a href="#footer" onClick={closeNav}>CONTACT US</a>
                    </button>
                </div>
            )}
        </div>
    </div>
  )
}
