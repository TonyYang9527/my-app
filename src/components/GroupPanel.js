import React from 'react';
import PropTypes from 'prop-types';

class GroupPanel extends React.Component{
       
    static propTypes = {
        key: PropTypes.string
   };
   
   static defaultProps = {
       key : 'basic'
    };

    render =() =>{
        return(
          <div id={'group-panel-'+this.props.key} className='card panel panel-default form-builder-panel'>
            {this.props.children}
         </div>) ;
    };
}
export default GroupPanel;