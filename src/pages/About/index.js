import React from 'react';
import { SocialIcon } from 'react-social-icons';
// import {logo} from '../../karthik.jpg';
import { CSSTransition} from 'react-transition-group';
import './index.css';

function About() 
    {
     return (
         <div className="container">
             <br></br>
             <CSSTransition in={true} appear={true} timeout={900} classNames='fade'>
             <div>
        <h1>About me</h1>
        <br></br>
        {/* <img src={logo}></img> */}
        <p>
            Hello everyone!
        </p>
        {/* <br></br> */}
        <p> I am Karthik Kancharla. I am currently pursuing B.Tech Computer Science and Engineering at Indian Institute of Technology, Dharwad.</p>
        <p> I am Eager to be an expert in my area of work with passion for challenges, innovation and working with people and communities.</p>
        <div>
            <p>
            <SocialIcon url="https://www.linkedin.com/in/karthik-kancharla/" style={{ height: 30, width: 30 }}/> 
        <SocialIcon url="https://github.com/karthikkancharla2002" style={{ height: 30, width: 30 }}/> 
        <SocialIcon network="email" url="karthikkancharla2002@gmail.com" style={{ height: 30, width: 30 }}/>
            </p>
        </div>
        </div>
        </CSSTransition>
     </div>
     )
     
    }
    export default About;