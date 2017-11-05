import React, { Component} from 'react';
import { observer, inject } from 'mobx-react'


@inject("store") @observer class ToDoList extends Component {
render(){
    let { store } = this.props ;
    return (
        <ul className="todo-list">
            {
                store.getListData.map((todo, i) =>
                    <li key={i}>{todo.data}</li>
                )
            }
        </ul>
    );
}
}
export default ToDoList;