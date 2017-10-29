import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Link}  from 'react-router-dom' ;
import Home from  './comonents/home/Home' ;
import About from './comonents/about/About' ;
import List from './comonents/list/List' ;


class App extends Component {
 
  render() {
    return (
     <Router>
      <div> 
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/list" component={List} />
      </div>
     </Router>
    );
  }

}

export default App;
