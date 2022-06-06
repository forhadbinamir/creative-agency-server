import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-900 text-gray-300 py-12 px-5 lg:text-left    md:text-left sm:text-center'>
            <div className='container grid lg:grid-cols-[1fr_200px_200px_200px] md:grid-cols-[1fr_1fr] sm:grid-cols-[1fr] gap-4 '>
                <div><h5 className='text-white font-bold text-2xl'>Creative Agency WebSite</h5>
                    <p>Develop by Forhad bin  amir<br />Email: forhadbinamir@gmail.com <br />Address: Online remote Work from anywhere</p>

                </div>
                <div>
                    <ul>
                        <h5>Navigation</h5>
                        <li>Home</li>
                        <li>Our team</li>
                        <li>Our portfolio</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>

                    <ul>
                        <h5>Client Feedback</h5>
                        <li>Reviews</li>
                        <li>Service</li>
                        <li>Contact</li>
                        <li>Packaging</li>
                    </ul>
                </div>
                <div >
                    <ul>
                        <h5>Buy Now</h5>
                        <li>Master card</li>
                        <li>Visa Card</li>
                        <li>Us express</li>
                        <li>Online</li>
                    </ul>
                </div>
            </div>
            <div className='container copyRight-area text-center flex lg:flex-row justify-between items-center text-gray-600 md:flex-col sm:flex-col pt-3'>
                <p className='md:text-center'><span>Creative Agency </span> Made by react js & node js express framework</p>
                <p className='md:text-center'>CopyRight &copy; 2022 Creative Agency By <span>Forhad Bin Amir</span> </p>
            </div>
        </div>
    );
};

export default Footer;