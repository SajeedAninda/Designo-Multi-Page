import React from 'react';
import Hero from './HeroSection/Hero';
import ProjectGallery from './ProjectGallery/ProjectGallery';
import Illustration from './IllustrationSection/Illustration';
import TalkProject from './TalkProject/TalkProject';

const Home = () => {
    return (
        <>
           <Hero></Hero> 
           <ProjectGallery></ProjectGallery>
           <Illustration></Illustration>
           <TalkProject></TalkProject>
        </>
    );
};

export default Home;