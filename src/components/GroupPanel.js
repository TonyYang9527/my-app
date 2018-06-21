import React from 'react';
import PropTypes from 'prop-types';

class GroupPanel extends React.Component{
       
    static propTypes = {
        type: PropTypes.string
   };
   
   static defaultProps = {
        type : 'basic'
    };

    render =() =>{
        return(
          <div id={'group-panel-'+this.props.type} className='card panel panel-default form-builder-panel'>
            {this.props.children}
         </div>) ;
    };
}
export default GroupPanel;