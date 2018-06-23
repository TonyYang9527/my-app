import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

class BuilderSidebar extends React.Component{
     
    static propTypes = {
        id: PropTypes.string,
    };

   static defaultProps = {
       id : ''
    };
    
    render =() =>{
        return(
          <div id={this.props.id} className='accordion panel-group'>
            {this.props.children}
         </div>) ;
    };
}
export default observer (BuilderSidebar);