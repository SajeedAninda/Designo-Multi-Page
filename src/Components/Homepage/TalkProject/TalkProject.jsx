import React from 'react'
import './cta.css'
import { Link } from 'react-router-dom'

const TalkProject = () => {
  return (
    <div className='absolute -top-60 lg:left-1/2 lg:transform lg:-translate-x-1/2'>
      <div className='w-[85%] lg:w-[1000px] mx-auto py-12 md:py-16 lg:py-20 px-8 md:px-16 lg:px-24 rounded-2xl bg-[#e88069] flex flex-col lg:flex-row items-center justify-between relative ctaBg'>
        <div className='w-full lg:w-[60%]'>
          <h2 className='text-[28px] md:text-[35px] lg:text-[40px] font-medium text-white leading-[40px] w-full lg:w-[60%] text-center lg:text-left'>
            Let’s talk about your project
          </h2>
          <p className='mt-4 font-medium text-white text-[16px] text-center lg:text-left'>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>

        <div className='w-full lg:w-[40%] flex justify-center lg:justify-end'>
          <Link
            to={'/contact'}
            className='uppercase font-medium mt-8 px-8 py-4 rounded-xl bg-white text-[#1c1b1d] hover:bg-[#ffac99] hover:text-white transition duration-500 ease-in-out'
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TalkProject
