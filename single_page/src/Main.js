import React from 'react'
import my from './Assert/my.jpg'
import proj2 from './Assert/proj2.png'
import baby from './Assert/baby.JPG'
import frd from './Assert/frd.jpg'
import frd1 from './Assert/frd1.JPG'


const Main = () => {
  return (
    <div className='main'>
        <div className='hero-section'>
            <div className='cv-details'>
                <div className='cv-bg'>
                    <h1><span>Uchenna </span>Jude</h1>
                    <h2>React Front-End developer</h2>
                </div>
                
                <p>PROFESSIONAL SUMMARY :
                    A passionate and aspiring front-end developer yerning for his first real world industrial experience with Bincom. Has experience in developing web application , eager and willing to learn more. He see every problem as an opportunity to gain more knowlegde and experience.
                </p>
                <p>
                    EXPERIENCE:
                    Front-end Developer Program			November 2022 - August 2023
                    Azubi Africa, Ghana							                                          
                    Developing resturant web app for ordering of meal and reserving a table(80+ completed).<br></br>
                    Built single page website just for practicing with react.
                    Collaborate with other colleges will working with and learning.<br></br>

                    Front-End Developer Course		              September 2022 - June 2023
                    Meta(Cousera), online
                    Designed Component with variation with Figma
                    Prototyping of web app
                    Wireframing of web app
                    Marking of other student works which help the learner to understand better</p>
                    <p>

                    SKILLS:
                    HTML | CSS | Javascrip | React | Figma | Git
                    </p>
                    <p>

                    EDUCATION
                    Maths/Computer Bs.c(ed)							 August/2016
                    Federal University of Agriculture Makurdi</p>
            </div>
            <div className='hero-image'>
                <div className='circle'></div>
                <div className='rectangle'></div>
                <img src={my} alt=''/>
            </div>
        </div>
        <div className='projects'>
            <h2>My Most Recent React Projects</h2>
            <div className='portfolio'>
                <div className='portfolio-image'>
                    <img src={proj2} alt=''/>
                </div>
                <div className='portfolio-image'>
                    <img src={proj2} alt=''/>
                </div>
            </div>
        </div>
        <div className='testimonies'>
            <h2>What my Family and friends has to say</h2>
            <div className='friends-container'>
                <div className='friends-image'>
                    <img src={baby} alt=''/>
                    <p>He is really a cool guy with perseverance in what he loves doing</p>
                </div>
                <div className='friends-image'>
                    <img src={frd} alt=''/>
                    <p>He loves to code front-end developing is what he enjoys doing day in day out. He's my guy</p>
                </div>
                <div className='friends-image'>
                    <img src={frd1} alt=''/>
                    <p>Most time he hardly interact with us just because of coding a website or web app. The only this that comes out of his mouth is coding things</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Main