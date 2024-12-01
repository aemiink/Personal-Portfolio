import React from 'react';
import bag from '../Assets/img/AboutMePic/bag.svg'
import pp from '../Assets/img/aboutPhoto.svg'

function AboutMe() {

    return (
        <div className="About-Me">
            <div className='am-description'>
                <img src={pp}/>
                <div className="we-area">
                    <div className="am-text">
                        <h1 style={{color: '#FEB061'}}>My Work Experience </h1>
                        <img src={bag}/>
                    </div>
                    <div className="work-experience">
                        <ul>
                            <li className="list-item-we">
                                <div className="span-we">
                                    <span> Kodwise</span><span> 2024-Ongoing </span>
                                </div>
                                <div>Web Developer, Instructor</div>
                            </li>
                            <div className="am-divider"></div>
                            <li className="list-item-we">
                                <div className="span-we">
                                    <span> Kodland</span><span> 2023-Ongoing </span>
                                </div>
                                <div>Web & Unity Consultant</div>
                            </li>
                            <div className="am-divider"></div>
                            <li className="list-item-we">
                                <div className="span-we">
                                    <span> Kodland</span><span> 2022-Ongoing </span>
                                </div>
                                <div>Web, Python, Unity Insturactor</div>
                            </li>
                            <div className="am-divider"></div>
                            <li className="list-item-we">
                                <div className="span-we">
                                    <span> desMoss Software</span><span> 2023- 2024 </span>
                                </div>
                                <div>Web Developer, Founder</div>
                            </li>
                            <div className="am-divider"></div>
                            <li className="list-item-we">
                                <div className="span-we">
                                    <span> Algorithmics</span><span> 2023- 2024 </span>
                                </div>
                                <div>Unity Developer</div>
                            </li>
                            <div className="am-divider"></div>
                            <li className="list-item-we">
                                <div className="span-we">
                                    <span> Artem IS</span><span> 2021- 2021 </span>
                                </div>
                                <div>Intern Web Developer</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;