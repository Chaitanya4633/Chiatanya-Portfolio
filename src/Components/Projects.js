import React from 'react';
import ReactDOM from 'react-dom/client';
import Football from '../Images/Football-Banner.jpg';
import College from '../Images/College-Banner.jpg';
import cricket from '../Images/Cricket-Banner.jpg'
// import Pro from 'https://github.com/Chaitanya4633';
import '../CSS/Projects.css'
function Project(){

  const Projects = [
    {title:"Live FootBall Score",logo:Football,Description:"It showa live foot ball score for users.They need to login in the website by giving username,Nation,Password ans they can login after login, This web site shows live footbal score, Upcoming fictures,Rankings of franchises on each league. Users check their favourate player stats. Latest football news on home page"},

    {title:"Student Portal",logo:College,Description:"It showa live foot ball score for users.They need to login in the website by giving username,Nation,Password ans they can login after login, This web site shows live footbal score, Upcoming fictures,Rankings of franchises on each league. Users check their favourate player stats. Latest football news on home page"},

    {title:"Live Cricket Score",logo:cricket,Description:"It showa live foot ball score for users.They need to login in the website by giving username,Nation,Password ans they can login after login, This web site shows live footbal score, Upcoming fictures,Rankings of franchises on each league. Users check their favourate player stats. Latest football news on home page"},
  ];
  return(
    <>
      <div className="Projects-Container">
          <div className="Project">
            { Projects.map((section,index)=>(
              <div className="Project-Card">
                <div key={index} className="Project-Title">
                  <h1>{section.title}</h1>
                </div>
                <div key={index} className="Project-logo">
                  <img src={section.logo} alt={section.logo} />
                </div>
                <div key={index} className="Project-Description">
                    <h5>{section.Description}</h5>
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}

export default Project;