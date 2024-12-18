import React from 'react'
import aboutImg from '../../../assets/about/desktop/image-about-hero.jpg';
import "./aboutBg.css";

const CompanyAboutUs = () => {
  return (
    <div>
      <div>
        <div className='w-full lg:w-[1000px] mx-auto rounded-none lg:rounded-2xl bg-[#e88069] flex flex-col-reverse lg:flex-row items-center justify-between aboutBackground'>
          <div className='w-full lg:w-[65%] lg:pl-24 text-center lg:text-left py-8 lg:py-0'>
            <h2 className='text-[35px] md:text-[40px] lg:text-[50px] font-medium text-white leading-[40px] w-full lg:w-[60%]'>
              About Us
            </h2>
            <p className='mt-8 text-white text-[16px] w-full lg:w-[80%]'>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients' audiences.
            </p>
          </div>

          <div className='w-full lg:w-[35%] flex justify-center lg:justify-end'>
            <img className='object-cover w-full rounded-none lg:rounded-r-2xl' src={aboutImg} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyAboutUs
