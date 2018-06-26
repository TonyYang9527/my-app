import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import DragulaContainers from '../DragulaContainers';
class DragDropTip extends React.Component{
    
    static propTypes = {
        random: PropTypes.string,
    };
    static defaultProps = {
        random : ''
     };
     componentDidMount=()=> {
        DragulaContainers.addDragContainers(ReactDOM.findDOMNode(this)) ;
     };

    render =() =>{
        return(
            <div id={this.props.random+"-placeholder"}  className="alert alert-info" style={{textAlign :'center',marginBottom:'0px'}}>
              Drag and Drop a form component
               {this.props.children}
            </div>
        ) ;
    };
}
export default observer(DragDropTip);