import React from 'react';
import CompanyAboutUs from '../CompanyAbout/CompanyAboutUs';
import WorldClass from '../WorldClass/WorldClass';
import CountriesTiles from '../CountriesTile/CountriesTiles';
import RealDeal from '../RealDeal/RealDeal';

const Company = () => {
    return (
        <>
           <CompanyAboutUs></CompanyAboutUs> 
           <WorldClass></WorldClass>
           <CountriesTiles></CountriesTiles>
           <RealDeal></RealDeal>
        </>
    );
};

export default Company;