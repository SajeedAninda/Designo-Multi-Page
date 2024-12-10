import React from 'react';
import Hero from './HeroSection/Hero';
import ProjectGallery from './ProjectGallery/ProjectGallery';
import Illustration from './IllustrationSection/Illustration';

const Home = () => {
    return (
        <>
           <Hero></Hero> 
           <ProjectGallery></ProjectGallery>
           <Illustration></Illustration>
        </>
    );
};

export default Home;