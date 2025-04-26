import React from 'react';
import "../CSS/NavBar.css";
import { Link } from 'react-router-dom';
function NavBar() {
    return (
            <div className="Nav-Bar">
            <div className="Left-Nav-Bar">
              <h2><span className="Name">Chaitanya</span></h2>
            </div>
            <div className="Right-Nav-Bar">
              <nav>
                <ul type="none">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/About">About</Link></li>
                  <li><Link to="Skills">Skills</Link></li>
                  <li><Link to="/Projects">Projects</Link></li>
                  <li><Link to="/Contact">Contact</Link></li>
                  <button className="Blog-Button">My Blog</button>
                </ul>
              </nav>    
            </div>
          </div>
    );
  }
  
  export default NavBar;