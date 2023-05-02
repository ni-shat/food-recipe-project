import { Carousel } from 'flowbite-react';
import './Gradient.css';

const Slider = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-[515px] mt-6 md:mt-0">
            <Carousel slideInterval={2000}>
                <div className='custom-gradient-styling' id='show_bg_1'></div>
                <div className='custom-gradient-styling' id='show_bg_2'></div>
                <div className='custom-gradient-styling' id='show_bg_3'></div>
            </Carousel>
        </div>
    );
};

export default Slider;