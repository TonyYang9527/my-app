import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList' ;
import AddToDo from './components/AddToDo';
import ToggleList from './components/ToggleList';

/***********
class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}
*****/

const App = ({ store }) => (
  <div className="todo-app">
    <AddToDo store={store} />
    <ToggleList store={store} />
    <ToDoList store={store} />
  </div>
)

export default App;
