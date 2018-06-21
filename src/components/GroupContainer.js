import React from 'react';
import PropTypes from 'prop-types';

class GroupContainer extends React.Component{
    
    static propTypes = {
         type: PropTypes.string,
         children:  PropTypes.array,
    };
    
    static defaultProps = {
        type : 'basic',
        children: [],
     };
     
    render =() =>{
        return(
          <div id={'group-container-'+this.props.type}  className='card-body panel-body no-drop'>
            {this.props.children}
         </div>) ;
    };
}
export default GroupContainer;