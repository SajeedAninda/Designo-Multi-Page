import React from 'react';
import CompanyAboutUs from '../CompanyAbout/CompanyAboutUs';
import WorldClass from '../WorldClass/WorldClass';
import CountriesTiles from '../CountriesTile/CountriesTiles';

const Company = () => {
    return (
        <>
           <CompanyAboutUs></CompanyAboutUs> 
           <WorldClass></WorldClass>
           <CountriesTiles></CountriesTiles>
        </>
    );
};

export default Company;