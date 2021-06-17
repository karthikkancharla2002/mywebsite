import React from 'react';
import { CSSTransition} from 'react-transition-group';

function Skills() 
    {
     return (
         <div className="container">
             <br></br>
        <CSSTransition in={true} appear={true} timeout={900} classNames='fade'>
        <div>
        <h1>Skills</h1>
        <br></br>
        <h3>Programming Languages:</h3>
        <ul>
        <li>C</li>
        <li>C++</li>
        <li>Python</li>
        </ul>
        {/* <p>C, C++, Python</p> */}
        <h3>Web Development: </h3>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>ReactJS</li>
        <li>Django</li>
        <li>MySQL Database</li>
        </ul>
        {/* <p>HTML, CSS, JavaScript, PHP, ReactJS, Django, MySQL Database</p> */}
        <h3>Others: </h3>
        <p>MATLAB, AutoCAD, Git, Bash, Adobe Photoshop, LaTeX, Beamer, RaspberryPi, Arduino</p>
        </div>
        </CSSTransition>
     </div>
     )
     
    }
    export default Skills;