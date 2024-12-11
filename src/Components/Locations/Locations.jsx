import React from 'react'
import "./location.css"
import canadaImg from "../../assets/locations/desktop/image-map-canada.png";
import australiaImg from "../../assets/locations/desktop/image-map-australia.png";
import ukImg from "../../assets/locations/desktop/image-map-united-kingdom.png";

const Locations = () => {
  return (
    <div className='pb-[340px]'>
      <div className='w-[1000px] mx-auto'>
       <div className='Canada flex gap-8 items-center justify-between'>
       <div className='w-[60%] pl-8 pr-28 py-20 rounded-2xl bg-[#ffac993d] locationBg'>
          <h2 className='text-[40px] font-medium text-[#E88069] leading-[40px] w-[60%]'>
            Canada
          </h2>
          <div className='flex items-center justify-between'>
            <div>
              <p className='mt-8 text-[#323036] text-[18px] font-bold'>
                Designo Central Office
              </p>
              <p className='mt-1 text-[#323036] text-[16px]'>
                3886 Wellington Street <br /> Toronto, Ontario M9C 3J5
              </p>
            </div>

            <div>
              <p className='mt-8 text-[#323036] text-[18px] font-bold'>
                Contact
              </p>
              <p className='mt-1 text-[#323036] text-[16px]'>
              P : +1 253-863-8967<br /> M : contact@designo.com
              </p>
            </div>
          </div>
        </div>

        <div className='w-[40%] flex justify-end'>
          <img
            className='object-contain w-full rounded-2xl'
            src={canadaImg}
            alt=''
          />
        </div>
       </div>
      </div>
    </div>
  )
}

export default Locations
