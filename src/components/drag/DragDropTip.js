import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

class DragDropTip extends React.Component{
    
    static propTypes = {
        random: PropTypes.string,
    };

    static defaultProps = {
        random : ''
     };
    render =() =>{
        return(
            <div id={this.props.random+"-placeholder"}  className="alert alert-info" style={{textAlign :'center',marginBottom:'0px'}}>
            Drag and Drop a form component
            </div>
        ) ;
    };
}
export default observer(DragDropTip);