import React, { Component} from 'react';
import { observer, inject } from 'mobx-react'

@observer 
class ToDoList extends Component {
render(){

    console.log("ToDoList  ");
    let store = this.props.store ;
    return (
        <ul className="todo-list">
            { 
             store.getListData.map((tdda, index) => <li key={index}>{tdda.data}</li>) 
            }
        </ul>
    );
}
}
export default ToDoList;