import React from 'react' ;
import { observer } from 'mobx-react';
import { observer, inject } from 'mobx-react'

@inject("store") @observer  class ToggleList extends React.Component{
    render() {
        let { store } = this.props
        return (
            <div className="toggle-list">
                <p style={store.setLeftStyle}>
                    all
          <input type="radio" name="allornot" checked={store.checked} onChange={store.handerToggleLeft} />
                </p>
                <p style={store.setRightStyle}>
                    part
          <input type="radio" name="allornot" checked={!store.checked} onChange={store.handerToggleRight} />
                </p>
            </div>
        )
    }


}
export default ToggleList ;