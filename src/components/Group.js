import React from 'react';
import PropTypes from 'prop-types';

class Group extends React.Component{
    
    static propTypes = {
         key: PropTypes.string,
    };
    
    static defaultProps = {
        key : 'basic',
     };
     
    render =() =>{
        return(
          <div id={'group-'+this.props.key}  className='panel-collapse collapse in show'>
            {this.props.children}
         </div>) ;
    };
}
export default Group;