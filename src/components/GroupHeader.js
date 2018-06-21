import React from 'react';
import PropTypes from 'prop-types';

class GroupHeader extends React.Component{ 
  
  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
};

static defaultProps = {
   id : '',
   type : 'basic'
};
 

    render =() =>{
        return(
          <div  className='card-header panel-heading form-builder-group-header'>
          <h5 className='mb-0 panel-title' > 
            
            <button className='btn btn-block builder-group-button'
             data-toggle='collapse' 
             data-parent={'#'+this.props.id}
             data-target ={'#group'+this.props.type} > 
             
             {this.props.children}
            </button>
          </h5>
         </div>) ;
    };
}
export default GroupHeader;