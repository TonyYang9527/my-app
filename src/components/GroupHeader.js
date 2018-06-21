import React from 'react';

class GroupHeader extends React.Component{     
    render =() =>{
        return(
          <div  className='card-header panel-heading form-builder-group-header'>
          <h5 className='mb-0 panel-title' > 
            {this.props.children}
          </h5>
         </div>) ;
    };
}
export default GroupHeader;