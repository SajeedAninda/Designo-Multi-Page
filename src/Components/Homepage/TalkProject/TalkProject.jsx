import React from 'react';
import "./cta.css"
import { Link } from 'react-router-dom';

const TalkProject = () => {
    return (
        <div className='absolute -top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
            <div className='w-[1000px] mx-auto py-20 px-24 rounded-2xl bg-[#e88069] flex items-center justify-between relative ctaBg'>
                <div className='w-[60%]'>
                    <h2 className='text-[40px] font-medium text-white leading-[40px] w-[60%]'>
                        Let’s talk about your project
                    </h2>
                    <p className='mt-4 font-medium text-white text-[16px]'>
                        Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                    </p>
                </div>

                <div className='w-[40%] flex justify-end'>
                    <Link to={"/contact"} className='uppercase font-medium mt-8 px-8 py-4 rounded-xl bg-white text-[#1c1b1d] hover:bg-[#ffac99] hover:text-white transition duration-500 ease-in-out'>
                        Get In Touch
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TalkProject;