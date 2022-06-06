import React from 'react';
import Banner2 from './Banner2';
import BrandLogos from './BrandLogos';
import ClientsFeedback from './ClientsFeedback';
import Contact from './Contact';
import Services from './Services';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Banner2 />
            <BrandLogos />
            <Services />
            <Slider />
            <ClientsFeedback />
            <Contact />
        </div>
    );
};

export default Home;