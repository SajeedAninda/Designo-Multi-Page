import React from 'react'
import ProjectGallery from '../../Homepage/ProjectGallery/ProjectGallery'
import aboutImg from '../../../assets/about/desktop/image-about-hero.jpg';
import "./aboutBg.css";

const CompanyAboutUs = () => {
  return (
    <div>
      <div>
        <div className='w-[1000px] mx-auto rounded-2xl bg-[#e88069] flex items-center justify-between aboutBackground'>
          <div className='w-[65%] pl-24'>
            <h2 className='text-[50px] font-medium text-white leading-[40px] w-[60%]'>
              About Us
            </h2>
            <p className='mt-8 text-white text-[16px] w-[80%]'>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients' audiences.
            </p>
          </div>

          <div className='w-[35%] flex justify-end'>
            <img className='object-cover w-full rounded-r-2xl' src={aboutImg} alt='' />
          </div>
        </div>
      </div>
      <ProjectGallery></ProjectGallery>
    </div>
  )
}

export default CompanyAboutUs
