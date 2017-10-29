import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route}  from 'react-router-dom' ;
import Home from  './comonents/home/Home' ;
import About from './comonents/about/About' ;


class App extends Component {
  render() {
    return (
     <Router>
      <div> 
         <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
      </div>
     </Router>
    );
  }
}

export default App;
