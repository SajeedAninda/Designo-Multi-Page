import React from 'react';
import heroBg from "../../../assets/home/desktop/bg-pattern-hero-home.svg";
import heroImg from "../../../assets/home/desktop/image-hero-phone.png";


const Hero = () => {
    return (
        <div className='w-[1000px] mx-auto'>
            <div className='mainDiv bg-[#e88069] relative h-[640px] w-full rounded-2xl px-20 flex items-center overflow-hidden'>
                <div className="textDiv w-[55%]">
                    <h1 className='text-[50px] font-medium text-white leading-[50px]'>
                        Award-winning custom designs and digital branding solutions
                    </h1>
                    <p className='text-[16px] text-white mt-8'>
                        With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                    </p>
                    <button className='uppercase font-medium mt-8 px-8 py-4 rounded-xl bg-white text-[#1c1b1d] hover:bg-[#ffac99] hover:text-white transition duration-500 ease-in-out'>
                        Learn More
                    </button>
                </div>
                <div className='absolute -bottom-52 -right-24'>
                    <img src={heroImg} alt="Hero Phone" />
                </div>
                <img className='absolute right-0 top-0' src={heroBg} alt="Background Pattern" />
            </div>
        </div>

    );
};

export default Hero;