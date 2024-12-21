import React from 'react'
import airfilterImg from '../../../assets/app-design/desktop/image-airfilter.jpg'
import eyecamImg from '../../../assets/app-design/desktop/image-eyecam.jpg'
import faceitImg from '../../../assets/app-design/desktop/image-faceit.jpg'
import loopstudiosImg from '../../../assets/app-design/desktop/image-loopstudios.jpg'
import todoImg from '../../../assets/app-design/desktop/image-todo.jpg'
import graphicDesignImg from '../../../assets/home/desktop/graphic-design.jpg'
import webDesignImg from '../../../assets/home/desktop/web-design.jpg'
import { Link } from 'react-router-dom'

const AppDesign = () => {
  return (
    <div className='pb-[340px] px-6'>
      <div className='w-[100%] lg:w-[1000px] mx-auto py-10 px-12 lg:py-20 lg:px-24 rounded-2xl bg-[#e88069] flex items-center justify-center ctaBg'>
        <div className=' flex flex-col text-center items-center justify-center'>
          <h2 className='text-[40px] font-medium text-white leading-[40px]'>
            App design
          </h2>
          <p className='mt-4 font-medium text-white text-[16px] w-[60%]'>
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </div>
      </div>

      <div className='mt-32 w-[100%] lg:w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='airfilter rounded-2xl group cursor-pointer'>
          <img
            className='rounded-t-2xl object-contain group'
            src={airfilterImg}
            alt=''
          />
          <div className='bg-[#ffac993d] rounded-b-2xl px-4 py-8 text-center space-y-4 group-hover:bg-[#e88069] transition-colors duration-500 ease-in-out'>
            <h2 className='text-[20px] font-medium text-[#e88069] group-hover:text-white tracking-[8px] uppercase'>
              airfilter
            </h2>
            <p className='text-[#323036] group-hover:text-white transition-all ease-in-out duration-500 delay-150'>
              Solving the problem of poor indoor air quality by filtering the
              air
            </p>
          </div>
        </div>

        <div className='eyecam rounded-2xl group cursor-pointer'>
          <img
            className='rounded-t-2xl object-contain group'
            src={eyecamImg}
            alt=''
          />
          <div className='bg-[#ffac993d] rounded-b-2xl px-4 py-8 text-center space-y-4 group-hover:bg-[#e88069] transition-colors duration-500 ease-in-out'>
            <h2 className='text-[20px] font-medium text-[#e88069] group-hover:text-white tracking-[8px] uppercase'>
              eyecam
            </h2>
            <p className='text-[#323036] group-hover:text-white transition-all ease-in-out duration-500 delay-150'>
              Product that lets you edit your favorite photos and videos at any
              time
            </p>
          </div>
        </div>

        <div className='faceit rounded-2xl group cursor-pointer'>
          <img
            className='rounded-t-2xl object-contain group'
            src={faceitImg}
            alt=''
          />
          <div className='bg-[#ffac993d] rounded-b-2xl px-4 py-8 text-center space-y-4 group-hover:bg-[#e88069] transition-colors duration-500 ease-in-out'>
            <h2 className='text-[20px] font-medium text-[#e88069] group-hover:text-white tracking-[8px] uppercase'>
              faceit
            </h2>
            <p className='text-[#323036] group-hover:text-white transition-all ease-in-out duration-500 delay-150'>
              Get to meet your favorite internet superstar with the faceit app
            </p>
          </div>
        </div>

        <div className='todo rounded-2xl group cursor-pointer'>
          <img
            className='rounded-t-2xl object-contain group'
            src={todoImg}
            alt=''
          />
          <div className='bg-[#ffac993d] rounded-b-2xl px-4 py-8 text-center space-y-4 group-hover:bg-[#e88069] transition-colors duration-500 ease-in-out'>
            <h2 className='text-[20px] font-medium text-[#e88069] group-hover:text-white tracking-[8px] uppercase'>
              todo
            </h2>
            <p className='text-[#323036] group-hover:text-white transition-all ease-in-out duration-500 delay-150'>
              A todo app that features cloud sync with light and dark mode
            </p>
          </div>
        </div>

        <div className='loopstudios rounded-2xl group cursor-pointer'>
          <img
            className='rounded-t-2xl object-contain group'
            src={loopstudiosImg}
            alt=''
          />
          <div className='bg-[#ffac993d] rounded-b-2xl px-4 py-8 text-center space-y-4 group-hover:bg-[#e88069] transition-colors duration-500 ease-in-out'>
            <h2 className='text-[20px] font-medium text-[#e88069] group-hover:text-white tracking-[8px] uppercase'>
              loopstudios
            </h2>
            <p className='text-[#323036] group-hover:text-white transition-all ease-in-out duration-500 delay-150'>
              A VR experience app made for Loopstudios
            </p>
          </div>
        </div>
      </div>

      <div className='mt-32 w-[100%] lg:w-[1000px] mx-auto'>
        <div className='flex flex-col lg:flex-row gap-8 '>
          <div className='appDesign flex-1 relative group h-[275px]'>
            <div className='textDiv uppercase absolute flex justify-center items-center flex-col inset-0 z-10 group'>
              <h1 className='text-white text-[40px] font-medium'>Web Design</h1>

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
              alt='App Design'
            />
            <div className='overlay absolute inset-0 bg-slate-900 group-hover:bg-[#e88069] bg-opacity-50 group-hover:bg-opacity-80 transition duration-300 rounded-2xl'></div>
          </div>

          <div className='graphicsDesign flex-1 relative group h-[275px]'>
            <div className='textDiv uppercase absolute flex justify-center items-center flex-col inset-0 z-10 group'>
              <h1 className='text-white text-[40px] font-medium'>
                Graphics Design
              </h1>

              <Link
                to={'/graphics-design'}
                className='text-white text-[16px] tracking-widest font-medium mt-6 cursor-pointer'
              >
                View Projects
              </Link>
            </div>
            <img
              className='w-full h-full rounded-2xl object-cover'
              src={graphicDesignImg}
              alt='Graphics Design'
            />
            <div className='overlay absolute inset-0 bg-slate-900 group-hover:bg-[#e88069] bg-opacity-50 group-hover:bg-opacity-80 transition duration-300 rounded-2xl'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDesign
