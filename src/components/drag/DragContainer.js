import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import DragulaContainers from '../DragulaContainers';
import DragDropTip from './DragDropTip';

class DragContainer extends React.Component{
    
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
          <div id={'builder-element-'+this.props.random} className="col-xs-8 col-sm-9 col-md-10 formarea drag-container" style={{visibility : 'visible',position :'relative'}}> 
             <DragDropTip  random={this.props.random} />
         </div>) ;
    };
}
export default observer(DragContainer);