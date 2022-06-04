import React from 'react';
import airbnb from '../../images/brandIcons/airbnb.png'
import google from '../../images/brandIcons/google.png'
import uber from '../../images/brandIcons/uber.png'
import netflix from '../../images/brandIcons/netflix.png'
import slack from '../../images/brandIcons/slack.png'
const BrandLogos = () => {
    return (
        <section className='grid lg:grid-cols-5 px-16 py-28 md:grid-cols-3 sm:grid-cols-1 sm:w-full'>
            <div><img className='lg:w-24 sm:w-full mb-5 md:w-24 h-14 mx-auto' src={airbnb} alt="" /></div>
            <div><img className='lg:w-24 sm:w-full mb-5 md:w-24 h-14 mx-auto' src={google} alt="" /></div>
            <div><img className='lg:w-24 sm:w-full mb-5 md:w-24 h-14 mx-auto' src={uber} alt="" /></div>
            <div><img className='lg:w-24 sm:w-full mb-5 md:w-24 h-14 mx-auto' src={netflix} alt="" /></div>
            <div><img className='lg:w-24 sm:w-full mb-5 md:w-24 h-14 mx-auto' src={slack} alt="" /></div>
        </section>
    );
};

export default BrandLogos;