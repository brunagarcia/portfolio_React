import React, { Component } from 'react';

export default class Header extends Component {
  render(){
    return(
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <ul className="nav">
          <li className="nav-item">
            <a className="navbar-brand" href="#">Brunatron</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#" onClick={(e)=> {this.props.navigationFunc(e, 'Home')}}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={(e)=> {this.props.navigationFunc(e, 'About')}}>About</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#" onClick={(e)=> {this.props.navigationFunc(e, 'Contact')}}>Contact</a>
          </li>
        </ul>        
      </nav>
    )
  }
}