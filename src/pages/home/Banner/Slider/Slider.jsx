import { Carousel } from 'flowbite-react';
import './Gradient.css';
import BannerTitle from '../BannerTitle/BannerTitle';

const Slider = () => {
    return (
        <div className="h-48 sm:h-[400px] xl:h-80 2xl:h-[515px] mt-6 md:mt-0">
            <Carousel slideInterval={3000}>
                <div className='custom-gradient-styling' id='show_bg_1'><BannerTitle></BannerTitle></div>
                <div className='custom-gradient-styling' id='show_bg_2'><BannerTitle></BannerTitle></div>
                <div className='custom-gradient-styling' id='show_bg_3'><BannerTitle></BannerTitle></div>
            </Carousel>
        </div>
    );
};
// slideInterval={3000}
export default Slider;