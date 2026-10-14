import hero from '../assets/images/testimonials.jpg'
import review1 from '../assets/images/review1.jpg'
import review2 from '../assets/images/review2.jpg'

export const Testimonials = () => {
  return (
    <div className='px-13 flex gap-10'>
        <img src={hero} alt="" className='w-101.25 h-100 object-center object-cover' />

        <div className='relative'>
            <div className='flex gap-4 flex-col'>
                <div className='flex items-center gap-6'>
                    <hr className='text-[#FF5E41] w-21.5' />
                    <p className='text-[#FF5E41] tracking-widest'>TESTIMONIALS</p>
                </div>
                <h3 className='font-semibold text-6xl'>
                    OUR <span className='text-[#FF5E41]'>HAPPY</span>  CUSTOMERS
                </h3>
            </div>

            <div className='bg-[#E9E9E9] flex justify-between px-17 py-10 absolute bottom-0 -left-27'>
                <div className='flex flex-col gap-3'>
                    <p className='text-[#FFC952]'>⭐⭐⭐⭐⭐</p>
                    <p className='text-[#A7A7A7] text-[16px]'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. accusamus nemo facilis voluptatibus laudantium nullaalias.
                    </p>

                    <div className='flex'>
                        <img src={review1} alt="image of a reviewer" className='w-15.25 rounded-4xl' />
                        <div className='flex flex-col justify-between'>
                            <p className='text-[#FF5E41] font-semibold text-xl'>DAVID CRAIG</p>
                            <p className='text-[#A7A7A7]'>CHICAGO</p>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col gap-3'>
                    <p className='text-[#FFC952]'>⭐⭐⭐⭐⭐</p>
                    <p className='text-[#A7A7A7] text-[16px]'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. accusamus nemo facilis voluptatibus laudantium nullaalias.
                    </p>

                    <div className='flex'>
                        <img src={review2} alt="image of a reviewer" className='w-15.25 rounded-4xl' />
                        <div className='flex flex-col justify-between'>
                            <p className='text-[#FF5E41] font-semibold text-xl'>ELIZABETH WRIGHT</p>
                            <p className='text-[#A7A7A7]'>SEATTLE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
