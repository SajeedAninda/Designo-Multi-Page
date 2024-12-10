import React from 'react';
import "./cta.css"

const TalkProject = () => {
    return (
        <div>
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
                    <button className='uppercase font-medium mt-8 px-8 py-4 rounded-xl bg-white text-[#1c1b1d] hover:bg-[#ffac99] hover:text-white transition duration-500 ease-in-out'>
                        Get In Touch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TalkProject;