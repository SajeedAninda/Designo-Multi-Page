import React from 'react'
import realDealImg from "../../../assets/about/desktop/image-real-deal.jpg";

const RealDeal = () => {
  return (
    <div className='pt-32 pb-[340px]'>
      <div className='w-[1000px] mx-auto rounded-2xl bg-[#ffac993d] flex items-center justify-between'>
        <div className='w-[65%] pl-24'>
          <h2 className='text-[40px] font-medium text-[#E88069] leading-[40px] w-[60%]'>
          The real deal
          </h2>
          <p className='mt-8 text-[#323036] text-[16px] w-[80%]'>
          As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.
          </p>
          <p className='mt-8 text-[#323036] text-[16px] w-[80%]'>
          We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
          </p>
        </div>

        <div className='w-[35%] flex justify-end'>
          <img
            className='object-cover w-full rounded-r-2xl'
            src={realDealImg}
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default RealDeal
