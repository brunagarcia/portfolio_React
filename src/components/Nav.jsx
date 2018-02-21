import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Header extends Component {
  render(){
    return(
      <div>
        <nav className="navbar sticky-top navbar-dark bg-dark">
          <ul className="nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/">Brunatron</Link>
            </li>
            <Link to="/home" className="nav-link active">
              <li className="nav-item">
                Home
              </li>
            </Link>
            
            <Link to="/about" className="nav-link">
              <li className="nav-item">
              About
              </li>
            </Link>

            <Link to="/contact" className="nav-link">
              <li className="nav-item">
              Contact
              </li>
            </Link>
          </ul>        
        </nav>
      </div>
    )
  }
}
