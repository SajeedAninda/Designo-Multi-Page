import React from 'react'
import realDealImg from "../../../assets/about/desktop/image-real-deal.jpg";

const RealDeal = () => {
  return (
    <div className='pt-24 lg:pt-32 pb-[340px]'>
      <div className='w-full lg:w-[1000px] mx-auto rounded-none lg:rounded-2xl bg-[#ffac993d] flex flex-col lg:flex-row items-center justify-between'>
        <div  className='w-full lg:w-[65%] lg:pl-24 text-center lg:text-left py-8 lg:py-0  px-6 lg:px-0'>
          <h2 className='text-[35px] md:text-[40px] lg:text-[50px] font-medium text-[#e88069] leading-[40px] w-full lg:w-[60%]'>
          The real deal
          </h2>
          <p className='mt-8 text-[#303036] text-[16px] w-full lg:w-[80%]'>
          As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.
          </p>
          <p className='mt-8 text-[#303036] text-[16px] w-full lg:w-[80%]'>
          We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
          </p>
        </div>

        <div className='w-full lg:w-[35%] flex justify-center lg:justify-end'>
          <img
            className='object-cover w-full rounded-none lg:rounded-r-2xl'
            src={realDealImg}
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default RealDeal
