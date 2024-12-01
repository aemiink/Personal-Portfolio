import React from 'react'
import useHover from '../Assets/hooks/useHover'
import '../Assets/css/expertise.css'
import photo from '../Assets/img/ExpertiseImg/photo.svg'
import fs from '../Assets/img/ExpertiseImg/fullstack.svg'
import br from '../Assets/img/ExpertiseImg/brand.svg'
import ui from '../Assets/img/ExpertiseImg/uiux.svg'
import edu from '../Assets/img/ExpertiseImg/edu.svg'
import title from '../Assets/img/ExpertiseImg/title.svg'


function Expertise() {
    const [isHovered1, handleMouseOver1, handleMouseOut1] = useHover();
    const [isHovered2, handleMouseOver2, handleMouseOut2] = useHover();
    const [isHovered3, handleMouseOver3, handleMouseOut3] = useHover();
    const [isHovered4, handleMouseOver4, handleMouseOut4] = useHover();
    
    const exp=  [
        { id: 1, years: '5+', describe:'Years of Experience'},
        { id: 2, years: '10+', describe:'Company Served' },
        { id: 3, years: '50+', describe:'Project Completed' },
        { id: 4, years: '50+', describe:'Satisfied Client'  }
    ];

    return (
    <div className='exp-comp'>
        <div className='title-exp'>
            <h1 style={{color: '#FEB061'}}>My Expertise </h1>
            <img src={title} alt='title'/>
        </div>
         <div className='expertise-component'>
            <div className='area'>
            <div
                onMouseOver={handleMouseOver1}
                onMouseOut={handleMouseOut1}
                className="web card-exp"
            >
                {
                    isHovered1 ? (
                        <div className='web-img'>
                            <img className='web-img' src={fs} alt="" />
                        </div>
                    ) :(
                        <div className='web-text'>Full-Stack Web Development</div>
                    )
                }

            </div>
            <div
                onMouseOver={handleMouseOver2}
                onMouseOut={handleMouseOut2}
                className="brand card-exp"
            >
                {
                    isHovered2 ? (
                        <div className='brand-img'>
                            <img className='brand-img' src={br} alt="" />
                        </div>
                    ) :(
                        <div className='brand-text'>Branding</div>
                    )
                }            
            </div>
            </div>
            <div>
            <img className='photosavage' src={photo} alt="" />
            </div>
            <div className='area'>
            <div
                onMouseOver={handleMouseOver3}
                onMouseOut={handleMouseOut3}
                className="ui card-exp"
            >
                {
                    isHovered3 ? (
                        <div className='ui-img'>
                            <img className='brand-img' src={ui} alt="" />
                        </div>
                    ) :(
                        <div className='ui-text'>UI-UX Design</div>
                    )
                }            
            </div>
            <div
                onMouseOver={handleMouseOver4}
                onMouseOut={handleMouseOut4}
                className="ed card-exp"
            >
                {
                    isHovered4 ? (
                        <div className='ed-img'>
                            <img className='brand-img' src={edu} alt="" />
                        </div> 
                    ) :(
                        <div className='ed-text'>Education</div>
                    )
                }              
            </div>
            </div>
            </div>
            <div className="cards-of-exp">
                {exp.map((card, index) => (
                            <div key={index} className="exp-card">
                                <h1>{card.years}</h1>
                                <h2>{card.describe}</h2>
                            </div>
                ))}
            </div>

    </div>
     
    );
}
export default Expertise
