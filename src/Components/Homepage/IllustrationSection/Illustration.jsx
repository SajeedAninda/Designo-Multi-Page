import React from 'react';
import passionateImg from "../../../assets/home/desktop/illustration-passionate.svg";
import resourcefulImg from "../../../assets/home/desktop/illustration-resourceful.svg";
import friendlyImg from "../../../assets/home/desktop/illustration-friendly.svg";
import bgPattern from "../../../assets/home/desktop/bg-pattern-hero-home.svg";

const Illustration = () => {
    return (
        <div className='w-[1000px] mx-auto pt-32 pb-32'>
            <div className='grid grid-cols-3 gap-12 items-center'>
                <div className='passionate flex flex-col items-center relative'>
                    <img className='z-10' src={passionateImg} alt="" />
                    <img className='absolute w-[200px]' src={bgPattern} alt="" />
                    <h2 className='mt-6 z-10 text-[20px] font-medium text-[#323036] tracking-[8px]'>
                        PASSIONATE
                    </h2>
                    <p className='mt-6 z-10 text-[16px] text-[#323036] tracking-widest text-center'>
                    Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
                    </p>
                </div>


                <div className='passionate flex flex-col items-center relative'>
                    <img className='z-10' src={resourcefulImg} alt="" />
                    <img className='absolute w-[200px]' src={bgPattern} alt="" />
                    <h2 className='mt-6 z-10 text-[20px] font-medium text-[#323036] tracking-[8px]'>
                        RESOURCEFUL
                    </h2>
                    <p className='mt-6 z-10 text-[16px] text-[#323036] tracking-widest text-center'>
                    Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Illustration;