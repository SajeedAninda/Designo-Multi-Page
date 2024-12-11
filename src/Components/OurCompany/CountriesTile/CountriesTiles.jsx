import React from 'react'
import canadaImg from '../../../assets/shared/desktop/illustration-canada.svg'
import australiaImg from '../../../assets/shared/desktop/illustration-australia.svg'
import unitedKingdomImg from '../../../assets/shared/desktop/illustration-united-kingdom.svg'
import bgPattern from '../../../assets/home/desktop/bg-pattern-hero-home.svg'

const CountriesTiles = () => {
  return (
    <div className='pt-32'>
      <div className='w-[1000px] mx-auto'>
        <div className='grid grid-cols-3 gap-12 items-center'>
          <div className='passionate flex flex-col items-center relative'>
            <img className='z-10' src={canadaImg} alt='' />
            <img className='absolute w-[200px]' src={bgPattern} alt='' />
            <h2 className='mt-6 z-10 text-[20px] font-medium text-[#323036] tracking-[8px]'>
              CANADA
            </h2>
            <button className='uppercase font-medium mt-8 px-8 py-4 rounded-xl bg-[#E88069] text-white hover:bg-[#ffac99ab] hover:text-white transition duration-500 ease-in-out'>
              See Location
            </button>
          </div>

          <div className='passionate flex flex-col items-center relative'>
            <img className='z-10' src={australiaImg} alt='' />
            <img className='absolute w-[200px]' src={bgPattern} alt='' />
            <h2 className='mt-6 z-10 text-[20px] font-medium text-[#323036] tracking-[8px]'>
              AUSTRALIA
            </h2>
            <button className='uppercase font-medium mt-8 px-8 py-4 rounded-xl bg-[#E88069] text-white hover:bg-[#ffac99ab] hover:text-white transition duration-500 ease-in-out'>
              See Location
            </button>
          </div>

          <div className='passionate flex flex-col items-center relative'>
            <img className='z-10' src={unitedKingdomImg} alt='' />
            <img className='absolute w-[200px]' src={bgPattern} alt='' />
            <h2 className='mt-6 z-10 text-[20px] font-medium text-[#323036] tracking-[8px]'>
              UNITED KINGDOM
            </h2>
            <button className='uppercase font-medium mt-8 px-8 py-4 rounded-xl bg-[#E88069] text-white hover:bg-[#ffac99ab] hover:text-white transition duration-500 ease-in-out'>
              See Location
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountriesTiles
