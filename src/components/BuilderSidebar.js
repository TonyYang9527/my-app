import React from 'react';
import PropTypes from 'prop-types';

class BuilderSidebar extends React.Component{
     
    static propTypes = {
        id: PropTypes.string,
    };

   static defaultProps = {
       id : 'textField'
    };
    
    render =() =>{
        return(
          <div id={this.props.id} className='accordion panel-group'>
            {this.props.children}
         </div>) ;
    };
}
export default BuilderSidebar;