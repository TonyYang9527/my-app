import React, { Component } from 'react';
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
  <div >
    <AddToDo store={store} />
    <ToggleList store={store} />
    <ToDoList store={store} />
  </div>
)

export default App;
