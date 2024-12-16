import React from 'react'
import expressImg from '../../../assets/web-design/desktop/image-express.jpg'
import builderImg from '../../../assets/web-design/desktop/image-builder.jpg'
import campImg from '../../../assets/web-design/desktop/image-camp.jpg'
import photonImg from '../../../assets/web-design/desktop/image-photon.jpg'
import transferImg from '../../../assets/web-design/desktop/image-transfer.jpg'
import blogrImg from '../../../assets/web-design/desktop/image-blogr.jpg'
import appDesignImg from '../../../assets/home/desktop/app-design.jpg'
import graphicsDesignImg from '../../../assets/home/desktop/graphic-design.jpg'
import { Link } from 'react-router-dom'

const WebDesign = () => {
  return (
    <div className='pb-[340px]'>
      <div className='w-[1000px] mx-auto py-20 px-24 rounded-2xl bg-[#e88069] flex items-center justify-center ctaBg'>
        <div className=' flex flex-col text-center items-center justify-center'>
          <h2 className='text-[40px] font-medium text-white leading-[40px]'>
            Web design
          </h2>
          <p className='mt-4 font-medium text-white text-[16px] w-[60%]'>
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </div>
      </div>

      <div className='mt-32 w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='express rounded-2xl group cursor-pointer'>
          <img
            className='rounded-t-2xl object-contain group'
            src={expressImg}
            alt=''
          />
          <div className='bg-[#ffac993d] rounded-b-2xl px-4 py-8 text-center space-y-4 group-hover:bg-[#e88069] transition-colors duration-500 ease-in-out'>
            <h2 className='text-[20px] font-medium text-[#e88069] group-hover:text-white tracking-[8px] uppercase'>
              Express
            </h2>
            <p className='text-[#323036] group-hover:text-white transition-all ease-in-out duration-500 delay-150'>
              A multi-carrier shipping website for ecommerce businesses
            </p>
          </div>
        </div>

        <div className='transfer rounded-2xl group cursor-pointer'>
          <img
            className='rounded-t-2xl object-contain group'
            src={transferImg}
            alt=''
          />
          <div className='bg-[#ffac993d] rounded-b-2xl px-4 py-8 text-center space-y-4 group-hover:bg-[#e88069] transition-colors duration-500 ease-in-out'>
            <h2 className='text-[20px] font-medium text-[#e88069] group-hover:text-white tracking-[8px] uppercase'>
              transfer
            </h2>
            <p className='text-[#323036] group-hover:text-white transition-all ease-in-out duration-500 delay-150'>
              Site for low-cost money transfers and sending money within seconds
            </p>
          </div>
        </div>

        <div className='photon rounded-2xl group cursor-pointer'>
          <img
            className='rounded-t-2xl object-contain group'
            src={photonImg}
            alt=''
          />
          <div className='bg-[#ffac993d] rounded-b-2xl px-4 py-8 text-center space-y-4 group-hover:bg-[#e88069] transition-colors duration-500 ease-in-out'>
            <h2 className='text-[20px] font-medium text-[#e88069] group-hover:text-white tracking-[8px] uppercase'>
              photon
            </h2>
            <p className='text-[#323036] group-hover:text-white transition-all ease-in-out duration-500 delay-150'>
              A state-of-the-art music player with high-resolution audio and DSP
              effects
            </p>
          </div>
        </div>

        <div className='builder rounded-2xl group cursor-pointer'>
          <img
            className='rounded-t-2xl object-contain group'
            src={builderImg}
            alt=''
          />
          <div className='bg-[#ffac993d] rounded-b-2xl px-4 py-8 text-center space-y-4 group-hover:bg-[#e88069] transition-colors duration-500 ease-in-out'>
            <h2 className='text-[20px] font-medium text-[#e88069] group-hover:text-white tracking-[8px] uppercase'>
              builder
            </h2>
            <p className='text-[#323036] group-hover:text-white transition-all ease-in-out duration-500 delay-150'>
              Connects users with local contractors based on their location
            </p>
          </div>
        </div>

        <div className='blogr rounded-2xl group cursor-pointer'>
          <img
            className='rounded-t-2xl object-contain group'
            src={blogrImg}
            alt=''
          />
          <div className='bg-[#ffac993d] rounded-b-2xl px-4 py-8 text-center space-y-4 group-hover:bg-[#e88069] transition-colors duration-500 ease-in-out'>
            <h2 className='text-[20px] font-medium text-[#e88069] group-hover:text-white tracking-[8px] uppercase'>
              blogr
            </h2>
            <p className='text-[#323036] group-hover:text-white transition-all ease-in-out duration-500 delay-150'>
              Blogr is a platform for creating an online blog or publication
            </p>
          </div>
        </div>

        <div className='camp rounded-2xl group cursor-pointer'>
          <img
            className='rounded-t-2xl object-contain group'
            src={campImg}
            alt=''
          />
          <div className='bg-[#ffac993d] rounded-b-2xl px-4 py-8 text-center space-y-4 group-hover:bg-[#e88069] transition-colors duration-500 ease-in-out'>
            <h2 className='text-[20px] font-medium text-[#e88069] group-hover:text-white tracking-[8px] uppercase'>
              camp
            </h2>
            <p className='text-[#323036] group-hover:text-white transition-all ease-in-out duration-500 delay-150'>
              Get expert training in coding, data, design, and digital marketing
            </p>
          </div>
        </div>
      </div>

      <div className='mt-32 w-[1000px] mx-auto'>
        <div className='flex gap-8 '>
          <div className='appDesign flex-1 relative group'>
            <div className='textDiv uppercase absolute flex justify-center items-center flex-col inset-0 z-10 group'>
              <h1 className='text-white text-[40px] font-medium'>App Design</h1>

              <Link to={"/app-design"} className='text-white text-[16px] tracking-widest font-medium mt-6 cursor-pointer'>
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
          <div className='graphicsDesign flex-1 relative group'>
            <div className='textDiv uppercase absolute flex justify-center items-center flex-col inset-0 z-10 group'>
              <h1 className='text-white text-[40px] font-medium'>
                Graphics Design
              </h1>

              <Link to={"/graphics-design"} className='text-white text-[16px] tracking-widest font-medium mt-6 cursor-pointer'>
                View Projects
              </Link>
            </div>
            <img
              className='w-full h-full rounded-2xl object-cover'
              src={graphicsDesignImg}
              alt='Graphics Design'
            />
            <div className='overlay absolute inset-0 bg-slate-900 group-hover:bg-[#e88069] bg-opacity-50 group-hover:bg-opacity-80 transition duration-300 rounded-2xl'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDesign
