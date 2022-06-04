import React from 'react';
import graphic from '../../images/service/graphic.png'
import responsive from '../../images/service/responsive.png'
import smartphone from '../../images/service/smartphone.png'
const Services = () => {
    return (
        <div className='py-10 px-12'>
            <h2 className='text-4xl font-bold text-center p-5'>Provide Awesome <span className='text-green-700 '>Services</span> </h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 py-10'>
                <div className='text-center hover:shadow-2xl p-10 rounded-lg hover:translate-y-5 duration-300'>
                    <img className='w-16 h-16 mx-auto' src={graphic} alt="" />
                    <h2 className='text-2xl font-bold mt-1'>Graphic Design</h2>
                    <p> Amazing flyers social media posts and brand representations that would make your brand stand out</p>
                </div>
                <div className='text-center hover:shadow-2xl p-10 rounded-lg hover:translate-y-5 duration-300'>
                    <img className='w-16 h-16 mx-auto' src={responsive} alt="" />
                    <h2 className='text-2xl font-bold mt-1'>Web & Mobile Design</h2>
                    <p>We craft stunning and amazing web UI using a will drafted UX to fit your product</p>
                </div>
                <div className='text-center hover:shadow-2xl p-10 rounded-lg hover:translate-y-5 duration-300'>
                    <img className='w-16 h-16 mx-auto' src={smartphone} alt="" />
                    <h2 className='text-2xl font-bold mt-1'>Web Development</h2>
                    <p>With well writing codes we build amazing apps for all platform mobile and web apps in general</p>
                </div>
            </div>
        </div>
    );
};

export default Services;