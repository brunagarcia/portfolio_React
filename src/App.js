import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      page: 'Home'
    }
  }


  //Function handling the page change:
  navigationFunc (e, pageTemp) {
    e.preventDefault()

    this.setState({
      page
    })
  }


  render() {
    let page
    //condition to handle page change
    if (this.state.page === 'Home'){
      page = <Home />

    }else if (this.state.page === 'About'){
      page = <About />

    }else if (this.state.page === 'Contact'){
      page = <Contact />
    }else{
      console.log("error on page --- Create 404")
    }

    return (
      <div className='container-fluid'>
        <Nav navigationFunc={this.navigationFunc} />
        <Header />

      </div>
    )
  }
}

export default App;
