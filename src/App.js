import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      page: 'Home'
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <Nav navigationFunc={this.navigationFunc} />
        <Header />
        <Switch>
          <Route path='/home' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } />
        </Switch>
      </div>
    )
  }
}

export default App;
