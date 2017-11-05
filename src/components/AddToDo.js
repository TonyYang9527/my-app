import React from 'react';
import { observer, inject } from 'mobx-react' ;

@observer 
class AddToDo extends React.Component {
    render() {
        let {sotre} =this.props;
        return (
            <div className="add-todo">
                <input
                    className="input"
                    placeholder="记录你的 todo 吧..."
                    value={store.defaultVal}
                    onChange={store.handlerChange}
                    onKeyDown={store.addTodo}
                />
                <i className="input-length">{store.getInputLength}</i>
                <p className="input-review">{store.defaultVal}</p>
            </div>

        );
    }
}
export default AddToDo;