import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import dragula from 'dragula';
import ReactDOM from 'react-dom';
class GroupContainer extends React.Component{
    
    static propTypes = {
         type: PropTypes.string,
    };
    
    static defaultProps = {
        type : ''
     };
     
     componentDidMount=()=> {
        let  container = ReactDOM.findDOMNode(this);
          dragula([container]);
      };

    render =() =>{
        return(
          <div id={'group-container-'+this.props.type}  className='card-body panel-body no-drop'>
            {this.props.children}
         </div>) ;
    };
}
export default observer(GroupContainer);