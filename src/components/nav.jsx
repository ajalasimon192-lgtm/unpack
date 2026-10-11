import { useState } from 'react';
import logo from '../assets/images/logo.svg'

export const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='bg-black text-white flex justify-between items-center border-b border-{#BDBDBD} px-13 py-4'>
        <div className='flex items-center'>
            <img src={logo} alt="Logo image for the unpack delivery service" className='w-12'/>
            <p className='font-bold text-3xl'><span className='text-[#FF5E41]'>UN</span>PACK</p>
        </div>

        <div className='flex items-center gap-4'>
            <a href="" className='text-[#FF5E41]'>HOME</a>
            <a href="">ABOUT US</a>
            <a href="">SERVICE</a>
            <div className='relative'>
                <p onClick={toggle} >FEATURE <span> {isOpen ? 'up' : 'down'} </span></p>
                {isOpen && (
                    <div className="flex flex-col w-25 bg-black text-white absolute top-15">
                        <a href="#" className="link">FAQ</a>
                        <a href="#" className="link">404 PAGE</a>
                    </div>
                )}
            </div>
            <a href="">BLOG</a>

            <button className='px-8 py-5 bg-[#FF5E41]'>CONTACT US</button>
        </div>
    </div>
  )
}
