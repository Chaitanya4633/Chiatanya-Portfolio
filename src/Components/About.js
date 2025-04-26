import React from 'react';
import ReactDOM from 'react-dom/client';
import '../CSS/About.css'
function About(){

  const aboutData1 = [
    {
      title: "I am a ...",
      items: ["B.Tech IT Student", "Tech Enthusiast", "A Quick Learner", "A Team Player"],
    },
    {
      title: "I am familiar with",
      items: ["Web Development", "Competitive Programming", "Node.js", "AWS Cloud"],
    },
    {
      title: "I Like",
      items: ["Exploring Tech", "Tweaking phone settings", "Open Source Contributions", "Learning New Technologies"],
    },
  ];

  const aboutData2 =[
    {
      title:"I am also a...",
      items:["3-star coder in CodeChef","Top 25% in LeetCode"]
    },
    {
      title:"Skills",
      items:["Flutter developer in MLSA","National service scheme member"]
    },
    {
      title:"I love",
      items:["Coding","Problem solving"]
    }
  ];

  return(
    <>
      <div className="About-Container">
        <div className="Header">
            <h2 className="Title">About Me</h2>
        </div>
        <div className="About-Me">
          <div className="About-Me-top">
            {aboutData1.map((section, index) => (
              <div key={index} className="Am">
                <h1 className="About-Me-Title">{section.title}</h1>
                {section.items.map((item, itemIndex) => (
                  <h5 key={itemIndex} className="About-Data">{item}</h5>
                ))}
              </div>
            ))}
          </div>
          <div className="About-Me-bottom">
            {aboutData2.map((section, index) => (
              <div key={index} className="Am">
                <h1 className="About-Me-Title">{section.title}</h1>
                {section.items.map((item, itemIndex) => (
                  <h5 key={itemIndex} className="About-Data">{item}</h5>
                ))}
              </div>
            ))}
            </div>
        </div>
      </div>
    </>
  );
}

export default About;