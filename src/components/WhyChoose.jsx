import hero from '../assets/images/whyImg.jpg'
import profIcon from '../assets/images/profService.svg'
import timeIcon from '../assets/images/onTime.png'
// import hoursIcon from '../assets/images/hours.svg'
// import rateIcon from '../assets/images/rateFees.svg'

export const WhyChoose = () => {
  return (
    <div className='px-13 py-10 flex flex-col justify-center'>
        <div>
            <div className='flex items-center justify-center'>
                <hr className='text-[#FF5E41] w-23 mr-6' />
                <p className="tracking-widest text-2xl text-[#FF5E41]">
                    WHY CHOOSE US
                </p>
            </div>
            <p className='text-[64px] text-center font-semibold'>
                THE <span className='text-[#FF5E41]'>BEST</span> MOVERS AROUND
            </p>
        </div>

        <div className='flex justify-center relative'>
            <img src={hero} alt="" className='w-97.5 h-114.25 object-contain'/>

            <div className='absolute top-15 -left-7 flex flex-row-reverse'>
                <img src={profIcon} alt="an icon" className='bg-[#E9E9E9] p-2' />
                <div className='text-right w-100 mr-6'>
                    <p className='text-[#7A7A7A] font-semibold text-xl'>PROFESSIONAL SERVICE</p>
                    <p className='text-[18px] text-[#A7A7A7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsam </p>
                </div>
            </div>
            
            <div className='absolute bottom-15 -left-7 flex flex-row-reverse'>
                <img src={profIcon} alt="an icon" className='bg-[#E9E9E9] p-2' />
                <div className='text-right w-100 mr-6'>
                    <p className='text-[#7A7A7A] font-semibold text-xl'>PROFESSIONAL SERVICE</p>
                    <p className='text-[18px] text-[#A7A7A7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsam </p>
                </div>
            </div>
            
            <div className='absolute top-15 -right-7 flex'>
                <img src={profIcon} alt="an icon" className='bg-[#E9E9E9] p-2' />
                <div className='text-left w-100 ml-6'>
                    <p className='text-[#7A7A7A] font-semibold text-xl'>PROFESSIONAL SERVICE</p>
                    <p className='text-[18px] text-[#A7A7A7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsam </p>
                </div>
            </div>
            
            <div className='absolute bottom-15 -right-7 flex'>
                <img src={profIcon} alt="an icon" className='bg-[#E9E9E9] p-2' />
                <div className='text-left w-100 ml-6'>
                    <p className='text-[#7A7A7A] font-semibold text-xl'>PROFESSIONAL SERVICE</p>
                    <p className='text-[18px] text-[#A7A7A7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsam </p>
                </div>
            </div>
        </div>
    </div>
  )
}
