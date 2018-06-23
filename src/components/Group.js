import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

class Group extends React.Component{
    
    static propTypes = {
         type: PropTypes.string,
         className: PropTypes.string,
         
    };
    
    static defaultProps = {
        type : '',
        className :'' ,
     };
     
    render =() =>{
        console.log("Group render ", this.props);
        return(
          <div id={'group-'+this.props.type}  className={this.props.className}>
            {this.props.children}
         </div>) ;
    };
}
export default observer(Group);