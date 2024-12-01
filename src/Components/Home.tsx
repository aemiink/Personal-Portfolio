import React from 'react';
import '../Assets/css/home.css'
import exp from '../Assets/img/exp.svg'
import home_pp from '../Assets/img/content-pp.svg'
import AboutMe from "./AboutMe";
import Slider from "./Slider";
import Expertise from './Expertise';
import FeaturedCreations from './FeaturedCreations';

function Home() {
    return (
        <div className="Home">
            <div className="background"></div>
            <div className="content">
                <div className="are-of-text">
                    <h1 className="h1-text">Ahmet Emin Kaya<br/><span className="span-text"> a passionate web <br/>developer.</span>
                    </h1>
                    <div className="hire-me-button">
                        <span className="button-text">Hire Me</span>
                        <span className="button-icon"></span>
                    </div>
                </div>
                <div className="hire-me-img">
                    <img className="hire-me-exp" src={exp}/>
                    <img className="hire-me-image" src={home_pp}/>
                </div>
            </div>
            <AboutMe/>
            <Slider/>
            <Expertise/>
            <FeaturedCreations/>
        </div>
    );
}

export default Home;