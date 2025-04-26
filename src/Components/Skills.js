import React from 'react';
import Html from '../Images/HTML.png';
import ReactLogo from '../Images/react.png';
import Css from '../Images/css.png';
import Node from '../Images/node.png';
import Mongo from '../Images/mongodb.png';
import '../CSS/Skills.css';

function Skills() {
  const Logos = [
    { logo: Html, title: 'HTML' },
    { logo: ReactLogo, title: 'React' },
    { logo: Css, title: 'CSS' },
    { logo: Node, title: 'Node' },
    { logo: Mongo, title: 'MongoDB' },
    
  ];

  return (
    <div className="Skills-Container">
      <div className="Header">
        <h2 className="Title">Skills</h2>
      </div>
      <h5 className="Data">These are the technologies I've worked with</h5>
      <div className="Languages">
        {Logos.map((sec, index) => (
          <div key={index} className="Logo-Wrapper">
            <img
              src={sec.logo}
              alt={`${sec.title} Logo`}
              className={`Languages-Logo ${sec.title}-Logo`}
            />
            <h5 className="Logo-Name">{sec.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;