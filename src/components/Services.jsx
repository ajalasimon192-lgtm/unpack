import world from '../assets/images/worldMoving.webp'
import storage from '../assets/images/storageUnits.webp'
import moving from '../assets/images/MovingKits.webp'
import background from '../assets/images/serviceImg.webp'

export const Services = () => {
  return (
    <div className='px-7 md:px-9 lg:px-13 py-8 bg-center bg-cover' id='service' style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${background})`
    }}>
        <div className="flex items-center justify-center text-[#FF5E41] mb-4">
            <hr className='w-21.5'/>
            <p className='text-lg lg:text-2xl ml-6 tracking-widest'>OUR SERVICES</p>
        </div>

        <h3 className='text-center text-[36px] lg:text-6xl font-semibold mb-14 text-white'>PRECISE & <span className=' text-[#FF5E41] '>HARDWORKING</span></h3>

        <div className='flex flex-col md:flex-row justify-around items-center'>
            <div className='container'>
                <img src={world} alt="a globe icon"  className='image'/>
                <p className='title'>WORLD MOVING</p>
                <p className='desc'>
                    Easy and reliable local and international relocation.
                </p>
                <a href="" className='link-att'>GET STARTED</a>
            </div>
            <div className='container-2 md:ml-4 mt-10 md:mt-0'>
                <img src={storage} alt="a globe icon"  className='image'/>
                <p className='title2'>STORAGE UNIT</p>
                <p className='desc2'>
                    Safe storage for your belongings.
                </p>
                <a href="" className='link-att2'>GET STARTED</a>
            </div>
            <div className='container md:ml-4 mt-10 md:mt-0'>
                <img src={moving} alt="a globe icon"  className='image'/>
                <p className='title'>MOVING KITS</p>
                <p className='desc'>
                    Quality packing supplier for a smooth move.
                </p>
                <a href="" className='link-att'>GET STARTED</a>
            </div>
        </div>
    </div>
  )
}
