import React from 'react';
import ReactDOM from 'react-dom';
import {  Route,BrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './comonents/home/Home';
import About from './comonents/about/About';
import Car from './comonents/car/Car';
import CarDetail from './comonents/car/CarDetail';

ReactDOM.render(
    <BrowserRouter  >
        <App>
            <Route exact path="/" component={Home} />
            <Route path="/cars" component={Car} />
            <Route path="/cars/:id" component={CarDetail}  />
            <Route path="/about" component={About} />
        </App>
    </BrowserRouter>,
    document.getElementById('root')
);
