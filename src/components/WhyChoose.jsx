import hero from '../assets/images/whyImg.webp'
import profIcon from '../assets/images/profService.webp'
import timeIcon from '../assets/images/onTime.webp'
import hoursIcon from '../assets/images/hours.webp'
import rateIcon from '../assets/images/ratesFees.webp'

export const WhyChoose = () => {
  return (
    <div className='px-7 md:px-9 lg:px-13 py-10 flex flex-col justify-center'>
        <div>
            <div className='flex items-center justify-center'>
                <hr className='text-[#FF5E41] w-21.5 mr-6' />
                <p className="tracking-widest text-lg lg:text-2xl text-[#FF5E41]">
                    WHY CHOOSE US
                </p>
            </div>
            <p className='text-4xl lg:text-[64px] mt-4 text-center font-semibold'>
                THE <span className='text-[#FF5E41]'>BEST</span> MOVERS AROUND
            </p>
        </div>

        <div className='flex flex-col justify-center mt-15 md:relative'>
            <img src={hero} alt="" className='w-70 lg:w-97.5 md:h-114.25 self-center object-cover mb-10'/>

            <div className='md:absolute md:-left-1 top-15 lg:-left-15 flex md:flex-row-reverse items-center gap-6 md:gap-3 mb-8'>
                <img src={profIcon} alt="an icon" className='bg-[#E9E9E9] p-2' />
                <div className='md:text-right md:w-50 lg:w-100 md:tracking-tighter'>
                    <p className='text-[#7A7A7A] font-semibold text-[16px] md:text-sm  lg:text-xl'>PROFESSIONAL SERVICE</p>
                    <p className='text-sm lg:text-lg text-[#A7A7A7]'>Our trained, uniformed crew handles every item with care, rom wrapping fragilepieces to loading the van.</p>
                </div>
            </div>

            <div className='md:absolute md:top-10 lg:top-15 md:-right-1 lg:-right-10 flex items-center gap-6 md:gap-3 mb-8'>
                <img src={hoursIcon} alt="an icon" className='hover:bg-[#FF5E41] bg-[#E9E9E9] p-2 h-16' />
                <div className='text-left md:w-50 lg:w-100 tracking-tighter'>
                    <p className='text-[#7A7A7A] font-semibold text-[16px] md:text-lg lg:text-xl'>24 HOURS EMERGENCY SERVICE</p>
                    <p className='text-sm lg:text-lg text-[#A7A7A7]'> Last minute move? Sudden change of plans? We're available around the clock, day and night. </p>
                </div>
            </div>
            
            <div className='md:absolute md:-left-1 bottom-15 lg:-left-15 flex md:flex-row-reverse gap-6 md:gap-3 items-center mb-8'>
                <img src={timeIcon} alt="an icon" className='bg-[#E9E9E9] p-2 h-16' />
                <div className='md:text-right md:w-50 tracking-tighter lg:w-100'>
                    <p className='text-[#7A7A7A] font-semibold text-[16px] md:text-lg lg:text-xl'>ALWAYS ON TIME</p>
                    <p className='text-sm lg:text-lg text-[#A7A7A7]'>We show up when we say we will and keep to the schedule. No watitng, No delays. </p>
                </div>
            </div>
            
            <div className='md:absolute bottom-15 md:-right-1 lg:-right-10 flex gap-6 md:gap-3 mb-8'>
                <img src={rateIcon} alt="an icon" className='bg-[#E9E9E9] p-2' />
                <div className='text-left md:w-50 lg:w-100 tracking-tighter'>
                    <p className='text-[#7A7A7A] font-semibold text-[16px] md:text-lg lg:text-xl'>FLAT RATE FEES</p>
                    <p className='text-sm lg:text-lg text-[#A7A7A7]'> One clear price,agreed upfront. No hidden charges or surprise add-ons. </p>
                </div>
            </div>
        </div>
    </div>
  )
}
