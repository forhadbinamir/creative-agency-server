import React from 'react';
import banner from '../../images/banner/frame.png'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='basis-1/2'>
                        <img src={banner} className="rounded-lg" />
                    </div>
                    <div className='basis-1/2'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Hire Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;