import React from 'react';
import ReactDOM from 'react-dom/client';
import ChaituPic from '../Images/Chaitu-Pic.jpeg';
import Git from '../Images/Git.png';
import LeetCode from '../Images/LEETCODE.png';
import Linkedin from '../Images/Linkedin.png';
import Resume from '../Chaitanya Pyla_resume.pdf'
import '../CSS/Home.css'
function Home(){

  const HandleClick=(app)=>{
    switch(app){
      case 'Git':
        window.open('https://github.com/Chaitanya4633','_blank');
        break;
      case 'Linkedin':
        window.open('https://www.linkedin.com/in/chaitanya-pyla-62545a1a9/','_blank');
        break;
      case 'Leetcode':
        window.open('https://leetcode.com/u/user3700ui/','_blank');
        break;
      default:
        break;
    }
  };

  return(
    <>
      <div className="Contanier">

        <div className="wrapper">
          <h2>Hello,I'm</h2>
          <span class="typing">Chaitanya Pyla</span>
          <h5>I'm a passionate Computer Science Student 😇.India, Andhra Pradesh. 📍</h5>
           <h3 className="Resume-Container">
            <a href={Resume} download={Resume}>
              <button className="Resume" type="button" >Resume</button>
            </a>
          </h3>

          <div className="Applications">
            <img src={Git} alt="GIT" onClick={()=>HandleClick('Git')}/>
            <img src={Linkedin} alt="Linkdin" onClick={()=>HandleClick('Linkedin')}/>
            <img src={LeetCode} alt="Leetcode" onClick={()=>HandleClick('Leetcode')}/>
          </div>
        </div>
     
        <div className="Profile-pic">
          <img src={ChaituPic} alt="Profile-pic" className="Pic"/>
        </div>
        
      </div>
    </>
  );
}

export default Home;