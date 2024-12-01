import React from 'react';
import { motion } from 'framer-motion';
import slide1 from '../Assets/img/slider/slide1.svg';
import slide2 from '../Assets/img/slider/slide2.svg';
import slide3 from '../Assets/img/slider/slide3.svg';
import slide4 from '../Assets/img/slider/slide4.svg';
import slide5 from '../Assets/img/slider/slide5.svg';
import slide6 from '../Assets/img/slider/slide6.svg';
import ok from '../Assets/img/okk.svg';

function Slider() {
    const slides = [
        { id: 1, title: 'Royal Taksi', image: slide1 },
        { id: 2, title: 'Social Tech', image: slide2 },
        { id: 3, title: 'Andel Solutions', image: slide3 },
        { id: 4, title: 'Aek Burger House', image: slide4 },
        { id: 5, title: 'Hairdresser', image: slide5 },
        { id: 6, title: 'Hairdresser', image: slide6 },
    ];

    return (
        <div>
            <div className="slider-container">
                <motion.div
                    className="slider-track"
                    initial={{x: 0}}
                    animate={{x: -1000}}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20, // Total duration for full loop
                    }}
                >
                    {slides.concat(slides).map((slide, index) => (
                        <div key={index} className="slide">
                            <img src={slide.image} alt={slide.title}/>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="contact-cont">
                <div className="contact-button">
                    Lets Contact!
                    <img src={ok}/>
                </div>
            </div>
        </div>

    )
        ;
}

export default Slider;
