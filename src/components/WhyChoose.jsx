import hero from '../assets/images/whyImg.jpg'
import profIcon from '../assets/images/profService.svg'
import timeIcon from '../assets/images/onTime.png'
import hoursIcon from '../assets/images/hours.svg'
import rateIcon from '../assets/images/ratesFees.svg'

export const WhyChoose = () => {
  return (
    <div className='md:px-9 lg:px-13 py-10 flex flex-col justify-center'>
        <div>
            <div className='flex items-center justify-center'>
                <hr className='text-[#FF5E41] w-23 mr-6' />
                <p className="tracking-widest md:text-lg lg:text-2xl text-[#FF5E41]">
                    WHY CHOOSE US
                </p>
            </div>
            <p className='md:text-4xl lg:text-[64px] md:mt-4 text-center font-semibold'>
                THE <span className='text-[#FF5E41]'>BEST</span> MOVERS AROUND
            </p>
        </div>

        <div className='flex justify-center mt-15 relative'>
            <img src={hero} alt="" className='w-97.5 h-114.25 object-cover'/>

            <div className='absolute top-15 left-20 flex flex-row-reverse items-center'>
                <img src={profIcon} alt="an icon" className='bg-[#E9E9E9] p-2' />
                <div className='text-right w-100 mr-6'>
                    <p className='text-[#7A7A7A] font-semibold md:text-lg lg:text-xl'>PROFESSIONAL SERVICE</p>
                    <p className='md:text-sm lg:text-lg text-[#A7A7A7]'>Our trained, uniformed crew handles every item with care, rom wrapping fragilepieces to loading the van.</p>
                </div>
            </div>
            
            <div className='absolute bottom-15 left-20 flex flex-row-reverse'>
                <img src={timeIcon} alt="an icon" className='bg-[#E9E9E9] p-2' />
                <div className='text-right w-100 mr-6'>
                    <p className='text-[#7A7A7A] font-semibold md:text-lg lg:text-xl'>ALWAYS ON TIME</p>
                    <p className='md:text-sm lg:text-lg text-[#A7A7A7]'>We show up when we say we will and keep to the schedule. No watitng, No delays. </p>
                </div>
            </div>
            
            <div className='absolute top-15 right-20 flex'>
                <img src={hoursIcon} alt="an icon" className='bg-[#FF5E41] p-2' />
                <div className='text-left w-100 ml-6'>
                    <p className='text-[#7A7A7A] font-semibold md:text-lg lg:text-xl'>24 HOURS EMERGENCY SERVICE</p>
                    <p className='md:text-sm lg:text-lg text-[#A7A7A7]'> Last minute move? Sudden change of plans? We're available around the clock, day and night. </p>
                </div>
            </div>
            
            <div className='absolute bottom-15 md:right-0 lg:right-20 flex'>
                <img src={rateIcon} alt="an icon" className='bg-[#E9E9E9] p-2' />
                <div className='text-left w-100 ml-6'>
                    <p className='text-[#7A7A7A] font-semibold md:text-lg lg:text-xl'>FLAT RATE FEES</p>
                    <p className='md:text-sm lg:text-lg text-[#A7A7A7]'> One clear price,agreed upfront. No hidden charges or surprise add-ons. </p>
                </div>
            </div>
        </div>
    </div>
  )
}
