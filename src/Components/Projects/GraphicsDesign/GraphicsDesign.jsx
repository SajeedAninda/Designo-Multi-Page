import React from 'react'
import { Link } from 'react-router-dom'
import boxedwaterImg from '../../../assets/graphic-design/desktop/image-boxed-water.jpg'
import changeImg from '../../../assets/graphic-design/desktop/image-change.jpg'
import scienceImg from '../../../assets/graphic-design/desktop/image-science.jpg'
import appDesignImg from '../../../assets/home/desktop/app-design.jpg'
import webDesignImg from '../../../assets/home/desktop/web-design.jpg'

const GraphicsDesign = () => {
  return (
    <div className='pb-[340px] px-6'>
      <div className='w-[100%] lg:w-[1000px] mx-auto py-10 px-12 lg:py-20 lg:px-24 rounded-2xl bg-[#e88069] flex items-center justify-center ctaBg'>
        <div className=' flex flex-col text-center items-center justify-center'>
          <h2 className='text-[40px] font-medium text-white leading-[40px]'>
            Graphic design
          </h2>
          <p className='mt-4 font-medium text-white text-[16px] w-[60%]'>
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </p>
        </div>
      </div>

      <div className='mt-32 w-[100%] lg:w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='Tim Brown rounded-2xl group cursor-pointer'>
          <img
            className='rounded-t-2xl object-contain group'
            src={changeImg}
            alt=''
          />
          <div className='bg-[#ffac993d] rounded-b-2xl px-4 py-8 text-center space-y-4 group-hover:bg-[#e88069] transition-colors duration-500 ease-in-out'>
            <h2 className='text-[20px] font-medium text-[#e88069] group-hover:text-white tracking-[8px] uppercase'>
              Tim Brown
            </h2>
            <p className='text-[#323036] group-hover:text-white transition-all ease-in-out duration-500 delay-150'>
              A book cover designed for Tim Brown’s new release, ‘Change’
            </p>
          </div>
        </div>

        <div className='boxedWater rounded-2xl group cursor-pointer'>
          <img
            className='rounded-t-2xl object-contain group'
            src={boxedwaterImg}
            alt=''
          />
          <div className='bg-[#ffac993d] rounded-b-2xl px-4 py-8 text-center space-y-4 group-hover:bg-[#e88069] transition-colors duration-500 ease-in-out'>
            <h2 className='text-[20px] font-medium text-[#e88069] group-hover:text-white tracking-[8px] uppercase'>
              Boxed water
            </h2>
            <p className='text-[#323036] group-hover:text-white transition-all ease-in-out duration-500 delay-150'>
              A simple packaging concept made for Boxed Water
            </p>
          </div>
        </div>

        <div className='science rounded-2xl group cursor-pointer'>
          <img
            className='rounded-t-2xl object-contain group'
            src={scienceImg}
            alt=''
          />
          <div className='bg-[#ffac993d] rounded-b-2xl px-4 py-8 text-center space-y-4 group-hover:bg-[#e88069] transition-colors duration-500 ease-in-out'>
            <h2 className='text-[20px] font-medium text-[#e88069] group-hover:text-white tracking-[8px] uppercase'>
              Science!
            </h2>
            <p className='text-[#323036] group-hover:text-white transition-all ease-in-out duration-500 delay-150'>
            A poster made in collaboration with the Federal Art Project
            </p>
          </div>
        </div>
      </div>

      <div className='mt-32 w-[100%] lg:w-[1000px] mx-auto'>
        <div className='flex flex-col lg:flex-row gap-8 '>
          <div className='appDesign flex-1 relative group h-[275px]'>
            <div className='textDiv uppercase absolute flex justify-center items-center flex-col inset-0 z-10 group'>
              <h1 className='text-white text-[40px] font-medium'>App Design</h1>

              <Link
                to={'/app-design'}
                className='text-white text-[16px] tracking-widest font-medium mt-6 cursor-pointer'
              >
                View Projects
              </Link>
            </div>
            <img
              className='w-full h-full rounded-2xl object-cover'
              src={appDesignImg}
              alt='App Design'
            />
            <div className='overlay absolute inset-0 bg-slate-900 group-hover:bg-[#e88069] bg-opacity-50 group-hover:bg-opacity-80 transition duration-300 rounded-2xl'></div>
          </div>

          <div className='graphicsDesign flex-1 relative group h-[275px]'>
            <div className='textDiv uppercase absolute flex justify-center items-center flex-col inset-0 z-10 group'>
              <h1 className='text-white text-[40px] font-medium'>
                Web Design
              </h1>

              <Link
                to={'/web-design'}
                className='text-white text-[16px] tracking-widest font-medium mt-6 cursor-pointer'
              >
                View Projects
              </Link>
            </div>
            <img
              className='w-full h-full rounded-2xl object-cover'
              src={webDesignImg}
              alt='Graphics Design'
            />
            <div className='overlay absolute inset-0 bg-slate-900 group-hover:bg-[#e88069] bg-opacity-50 group-hover:bg-opacity-80 transition duration-300 rounded-2xl'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraphicsDesign
