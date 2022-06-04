import React from 'react';
import './Banner.css'
import banner from '../../images/banner/frame.svg'
import video from '../../video/video.mp4'
const Banner2 = () => {
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video autoPlay loop muted src={video} type="video/mp4" />
            <div className='content flex flex-col lg:flex-row-reverse justify-evenly items-center p-5 min-h-screen'>
                <div className='basis-1/2 px-5 md:mb-5'>
                    <img src={banner} alt="" />
                </div>
                <div className='basis-1/2 px-5'>
                    <h1 className="text-6xl text-white font-bold">Let's Grow Your Brand to the Next Level</h1>
                    <p className="py-6 text-gray-400">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-accent text-black hover:text-white">Hire Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner2;