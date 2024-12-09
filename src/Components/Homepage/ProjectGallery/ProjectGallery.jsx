import React from 'react';
import webDesignImg from "../../../assets/home/desktop/web-design.jpg";
import appDesignImg from "../../../assets/home/desktop/app-design.jpg";
import graphicsDesignImg from "../../../assets/home/desktop/graphic-design.jpg";

const ProjectGallery = () => {
    return (
        <div className='w-[1000px] mx-auto mt-32 flex items-center gap-6 mb-20'>
            <div className='flex-1 h-[640px]'>
                <div className="webDesign h-full">
                    <img className='w-full h-full rounded-2xl object-cover' src={webDesignImg} alt="" />
                </div>
            </div>

            <div className='flex flex-1 flex-col gap-4  h-[640px]'>
                <div className="appDesign flex-1">
                    <img className='w-full h-full rounded-2xl object-cover' src={appDesignImg} alt="" />
                </div>
                <div className="graphicsDesign flex-1">
                    <img className='w-full h-full rounded-2xl object-cover' src={graphicsDesignImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProjectGallery;