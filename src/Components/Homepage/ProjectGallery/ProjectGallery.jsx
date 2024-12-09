import React from 'react';
import webDesignImg from "../../../assets/home/desktop/web-design.jpg";
import appDesignImg from "../../../assets/home/desktop/app-design.jpg";
import graphicsDesignImg from "../../../assets/home/desktop/graphic-design.jpg";

const ProjectGallery = () => {
    return (
        <div className='w-[1000px] mx-auto mt-32 flex items-center gap-6 mb-20'>
            {/* Web Design */}
            <div className='flex-1 h-[640px] relative group'>
                <div className="webDesign h-full group">
                    <div className="textDiv uppercase absolute flex justify-center items-center flex-col inset-0 z-10 group">
                        <h1 className='text-white text-[40px] font-medium'>
                            Web Design
                        </h1>

                        <p className='text-white text-[16px] tracking-widest font-medium mt-6 cursor-pointer'>
                            View Projects
                        </p>
                    </div>
                    <img
                        className='w-full h-full rounded-2xl object-cover'
                        src={webDesignImg}
                        alt="Web Design"
                    />
                    <div className="overlay absolute inset-0 bg-slate-900 group-hover:bg-[#e88069] bg-opacity-50 group-hover:bg-opacity-80 transition duration-300 rounded-2xl"></div>
                </div>
            </div>

            {/* App and Graphics Design */}
            <div className='flex flex-1 flex-col gap-4 h-[640px]'>
                <div className="appDesign flex-1 relative group">
                    <div className="textDiv uppercase absolute flex justify-center items-center flex-col inset-0 z-10 group">
                        <h1 className='text-white text-[40px] font-medium'>
                            App Design
                        </h1>

                        <p className='text-white text-[16px] tracking-widest font-medium mt-6 cursor-pointer'>
                            View Projects
                        </p>
                    </div>
                    <img
                        className='w-full h-full rounded-2xl object-cover'
                        src={appDesignImg}
                        alt="App Design"
                    />
                    <div className="overlay absolute inset-0 bg-slate-900 group-hover:bg-[#e88069] bg-opacity-50 group-hover:bg-opacity-80 transition duration-300 rounded-2xl"></div>
                </div>
                <div className="graphicsDesign flex-1 relative group">
                    <div className="textDiv uppercase absolute flex justify-center items-center flex-col inset-0 z-10 group">
                        <h1 className='text-white text-[40px] font-medium'>
                            Graphics Design
                        </h1>

                        <p className='text-white text-[16px] tracking-widest font-medium mt-6 cursor-pointer'>
                            View Projects
                        </p>
                    </div>
                    <img
                        className='w-full h-full rounded-2xl object-cover'
                        src={graphicsDesignImg}
                        alt="Graphics Design"
                    />
                    <div className="overlay absolute inset-0 bg-slate-900 group-hover:bg-[#e88069] bg-opacity-50 group-hover:bg-opacity-80 transition duration-300 rounded-2xl"></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectGallery;
