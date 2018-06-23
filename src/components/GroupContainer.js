import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
class GroupContainer extends React.Component{
    
    static propTypes = {
         type: PropTypes.string,
    };
    
    static defaultProps = {
        type : ''
     };
     
    render =() =>{
        return(
          <div id={'group-container-'+this.props.type}  className='card-body panel-body no-drop'>
            {this.props.children}
         </div>) ;
    };
}
export default observer(GroupContainer);