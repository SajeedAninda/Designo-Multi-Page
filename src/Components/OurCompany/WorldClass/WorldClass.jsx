import React from 'react'
import talentImg from '../../../assets/about/desktop/image-world-class-talent.jpg'

const WorldClass = () => {
  return (
    <div className='pt-24 lg:pt-32'>
      <div className='w-full lg:w-[1000px] mx-auto rounded-none lg:rounded-2xl bg-[#ffac993d] flex flex-col lg:flex-row-reverse items-center justify-between'>
        <div className='w-full lg:w-[65%] lg:pl-24 text-center lg:text-left py-8 lg:py-0 px-6 lg:px-0'>
          <h2 className='text-[35px] md:text-[40px] lg:text-[50px] font-medium text-[#e88069] leading-[40px] w-full lg:w-[60%]'>
          World-class talent
          </h2>
          <p className='mt-8 text-[#303036] text-[16px] w-full lg:w-[80%]'>
          We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
          </p>
          <p className='mt-8 text-[#303036] text-[16px] w-full lg:w-[80%]'>
          Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
          </p>
        </div>

        <div className='w-full lg:w-[35%] flex justify-center lg:justify-end'>
          <img
            className='object-cover w-full rounded-none lg:rounded-l-2xl'
            src={talentImg}
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default WorldClass
