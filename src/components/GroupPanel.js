import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

class GroupPanel extends React.Component{
       
    static propTypes = {
        type: PropTypes.string
   };
   
   static defaultProps = {
        type : ''
    };

    render =() =>{
        return(
          <div id={'group-panel-'+this.props.type} className='card panel panel-default form-builder-panel'>
            {this.props.children}
         </div>) ;
    };
}
export default observer(GroupPanel) ;