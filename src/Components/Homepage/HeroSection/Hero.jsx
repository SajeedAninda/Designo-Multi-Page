import React from 'react'
import heroBg from '../../../assets/home/desktop/bg-pattern-hero-home.svg'
import heroImg from '../../../assets/home/desktop/image-hero-phone.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='w-[100%] lg:w-[1000px] mx-auto'>
      <div className='mainDiv bg-[#e88069] relative h-[160vh] lg:h-[640px] w-full rounded-none lg:rounded-2xl px-20 pt-20 lg:pt-0 block lg:flex items-center overflow-hidden'>
        <div className='textDiv w-full lg:w-[55%]'>
          <h1 className='text-[35px] md:text-[45px] lg:text-[50px] font-medium text-white leading-[50px] text-center lg:text-left'>
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className='text-[16px] text-white mt-6 lg:mt-8 text-center lg:text-left'>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <div className='mt-6 lg:mt-12 flex justify-center items-center lg:block'>
            <Link
              to={'/aboutCompany'}
              className='uppercase font-medium px-8 py-4 rounded-xl bg-white text-[#1c1b1d] hover:bg-[#ffac99] hover:text-white transition duration-500 ease-in-out'
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className='absolute left-1/2 transform -translate-x-1/2 w-[400px] md:w-[550px] lg:w-auto -bottom-52 lg:translate-x-0 lg:-right-24'>
          <img src={heroImg} alt='Hero Phone' />
        </div>
        <img
          className='absolute right-0 top-0'
          src={heroBg}
          alt='Background Pattern'
        />
      </div>
    </div>
  )
}

export default Hero
