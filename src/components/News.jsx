import review1 from '../assets/images/review1.jpg'
import mainNews  from '../assets/images/newsMain.jpg'
import sideNews1  from '../assets/images/sideNews1.jpg'
import sideNews2 from '../assets/images/SideNews2.jpg'
import sideNews3  from '../assets/images/sideNews3.jpg'
import sideNews4  from '../assets/images/sideNews4.jpg'

export const News = () => {
    const newsItems = [ 
        {
            id: 1,
            src: sideNews1,
            title: 'HOW TO PACK FOR A LONG DISTANCE MOVE... ',
            desc: 'Make your long-distance move stress-free with smart packing tips to keep your belongings safe and organized throughout the journey.',
        },
        {
            id: 2,
            src: sideNews2,
            title: 'HOW TO SETUP YOUR HOME FOR OFFICE ',
            desc: 'Create a comfortable and productive home office with simple tips for organizing your space and getting settled in.',
        },
        {
            id: 3,
            src: sideNews3,
            title: '5 WAYS TO MAKE THE PROCESS EASIER... ',
            desc: `Moving doesn't have to be stresful. Discover five practical ways to save time, stay organized, and make your move smoother.`,
        },
        {
            id: 4,
            src: sideNews4,
            title: '5 BUDGET FRIENDLY LONG DISTANCE... ',
            desc: 'Planning a long-distance move on a budget? Learn how to cut costs, peak eficiently,  and move your belongings without overspending.',
        },
    ]

  return (
    <div className='md:px-9 lg:px-13' id='blog'>
            <div className='flex items-center gap-6 mb-4'>
                <div className='w-21.5 bg-[#FF5E41] h-1'></div>
                <p className='text-[#FF5E41] md:text-lg lg:text-2xl tracking-widest'>OUR NEWS</p>
            </div>

            <div className='flex justify-between'>
                <p className='md:text-4xl lg:text-6xl font-semibold'>RECENTLY <span className='text-[#FF5E41]'>UPDATED</span></p>
                <div className='flex items-center tracking-tight  cursor-pointer'>
                    <a href='' className='md:text-[16px] lg:text-xl text-[#A7A7A7] hover:underline'>
                        DISCOVER MORE
                    </a>
                    <a href="" className='text-xl bg-[#D3D3D3] text-[#A7A7A7] px-3 py-1 rounded-4xl'>
                        {/* TO ADD ICON */}
                        &gt;
                    </a>
                </div>
            </div>

            <div className='mt-16 flex md:gap-16 lg:gap-21.5' >
                <div className='w-3/5'>
                    <div className='relative'>
                        <img src={ mainNews } alt="a pic of a man holding a clipboard" className='' />
                        <p className='absolute bottom-10 left-10 border border-[#FF5E41] px-4.5 py-3.5 text-3.5 text-[#FFFFFF]'>COMMERCIAL MOVING</p>
                    </div>

                    <div className='mt-8'>
                        <p className='font-semibold text-2xl text-[#222222] leading-8 mb-4'>COMMON LONG-DISTANCE MOVING MISTAKES AND HOW TO AVOID THEM</p>
                        <p className='text-[#A7A7A7] text-4.5'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto molestiae quidem ea sit nisi voluptas corrupti dolore dignissimos esse. Deleniti soluta sed ratione distinctio qui obcaecati, sapiente dolorum doloremque a?
                        </p>

                        <hr className='text-[#A7A7A7] mt-4  mb-4 w-full' />

                        <div className='flex justify-between items-center'>
                            <div className='grid grid-cols-2 gap-7.25 items-center'>
                                <div className='flex items-center lg:border-r lg:pr-7.5 lg:border-[#BDBDBD]  gap-3'>
                                    <img src={ review1 } alt="image of the creator" className='w-10 rounded-2xl' />
                                    <p className='text-[#A7A7A7] text-3.5'>JOEL CALRNS</p>
                                </div>

                                <div className='md:hidden lg:inline'>
                                    {/* to add calendar icon */}
                                    <p className='text-[#A7A7A7]'>18 DECEMBER 2023</p>
                                </div>
                            </div>

                            <a href="" className='text-[#FF5E41] hover:underline'>READ MORE</a>
                        </div>
                    </div>
                </div>

                <div className='w-2/5 flex flex-col justify-between'>
                    {
                        newsItems.map((news) => {
                            return (
                                <div key={news.id} className='flex md:gap-6 lg:gap-9.75 mt-4'>
                                    <img src={news.src} alt="" className='md:w-25 md:object-cover lg:w-50'/>
                                    
                                    <div className='h-full border-b border-b-[#A7A7A7] w-full'>
                                        <h3 className='font-bold text-5 text-[#7A7A7A] mb-4'>{news.title}</h3>
                                        <p className='text-[#A7A7A7] text-4.5 line-clamp-2'>
                                            {news.desc}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
  )
}
