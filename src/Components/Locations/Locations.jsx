import React from 'react'
import './location.css'
import canadaImg from '../../assets/locations/desktop/image-map-canada.png'
import australiaImg from '../../assets/locations/desktop/image-map-australia.png'
import ukImg from '../../assets/locations/desktop/image-map-united-kingdom.png'

const Locations = () => {
  return (
    <div className='pb-[340px]'>
      <div className='w-[100%] lg:w-[1000px] mx-auto'>
        <div className='Canada flex flex-col lg:flex-row gap-8 items-center justify-between'>
          <div className='w-full lg:w-[60%] pl-8 pr-28 py-20 rounded-none lg:rounded-2xl bg-[#ffac993d] locationBg'>
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
                  P : +1 253-863-8967
                  <br /> M : contact@designo.com
                </p>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-[40%] flex justify-end'>
            <img
              className='object-contain w-full rounded-none lg:rounded-2xl'
              src={canadaImg}
              alt=''
            />
          </div>
        </div>

        <div className='Australia mt-32 flex flex-col lg:flex-row-reverse gap-8 items-center justify-between'>
          <div className='w-full lg:w-[60%] pl-8 pr-28 py-20 rounded-none lg:rounded-2xl bg-[#ffac993d] locationBg'>
            <h2 className='text-[40px] font-medium text-[#E88069] leading-[40px] w-[60%]'>
              Australia
            </h2>
            <div className='flex items-center justify-between'>
              <div>
                <p className='mt-8 text-[#323036] text-[18px] font-bold'>
                  Designo AU Office
                </p>
                <p className='mt-1 text-[#323036] text-[16px]'>
                  19 Balonne Street <br /> New South Wales 2443
                </p>
              </div>

              <div>
                <p className='mt-8 text-[#323036] text-[18px] font-bold'>
                  Contact
                </p>
                <p className='mt-1 text-[#323036] text-[16px]'>
                  P : (02) 6720 9092
                  <br />M : contact@designo.au
                </p>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-[40%] flex justify-end'>
            <img
              className='object-contain w-full rounded-none lg:rounded-2xl'
              src={australiaImg}
              alt=''
            />
          </div>
        </div>

        <div className='UK mt-32 flex flex-col lg:flex-row gap-8 items-center justify-between'>
          <div className='w-full lg:w-[60%] pl-8 pr-28 py-20 rounded-none lg:rounded-2xl bg-[#ffac993d] locationBg'>
            <h2 className='text-[40px] font-medium text-[#E88069] leading-[40px] w-[60%]'>
              United Kingdom
            </h2>
            <div className='flex items-center justify-between'>
              <div>
                <p className='mt-8 text-[#323036] text-[18px] font-bold'>
                  Designo UK Office
                </p>
                <p className='mt-1 text-[#323036] text-[16px]'>
                  13 Colorado Way <br /> Rhyd-y-fro SA8 9GA
                </p>
              </div>

              <div>
                <p className='mt-8 text-[#323036] text-[18px] font-bold'>
                  Contact
                </p>
                <p className='mt-1 text-[#323036] text-[16px]'>
                  P : 078 3115 1400
                  <br />M : contact@designo.co
                </p>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-[40%] flex justify-end'>
            <img
              className='object-contain w-full rounded-none lg:rounded-2xl'
              src={ukImg}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Locations
