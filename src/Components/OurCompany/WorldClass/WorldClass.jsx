import React from 'react'
import talentImg from '../../../assets/about/desktop/image-world-class-talent.jpg'

const WorldClass = () => {
  return (
    <div className='pt-32'>
      <div className='w-[1000px] mx-auto rounded-2xl bg-[#ffac993d] flex flex-row-reverse items-center justify-between'>
        <div className='w-[65%] pl-24'>
          <h2 className='text-[40px] font-medium text-[#E88069] leading-[40px] w-[60%]'>
          World-class talent
          </h2>
          <p className='mt-8 text-[#323036] text-[16px] w-[80%]'>
          We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
          </p>
          <p className='mt-8 text-[#323036] text-[16px] w-[80%]'>
          Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
          </p>
        </div>

        <div className='w-[35%] flex justify-end'>
          <img
            className='object-cover w-full rounded-l-2xl'
            src={talentImg}
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default WorldClass
