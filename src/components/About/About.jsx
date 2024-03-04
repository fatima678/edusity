import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img'></img>
            <img src={play_icon} alt='' className='play-icon'></img>

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurtursing Tommorow's Leader  Today</h2>
            <p>Education is the cornerstone of personal and societal growth, providing individuals with the knowledge, 
            skills, and perspectives necessary to navigate an
             increasingly complex world. </p>
             <p>Education is the cornerstone of personal and societal growth, providing individuals with the knowledge, 
            skills, and perspectives necessary to navigate an
             increasingly complex world. </p>
             <p>Education is the cornerstone of personal and societal growth, providing individuals with the knowledge, 
            skills, and perspectives necessary to navigate an
             increasingly complex world. </p>
       


        </div>
      
    </div>
  )
}

export default About
