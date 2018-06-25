import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
class GroupHeader extends React.Component{ 
  
  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    onOpenGroup : PropTypes.func ,
};

static defaultProps = {
   id : '',
   type : '',
   title : '',
   onOpenGroup : () => void(0) ,
};

render =() =>{
        return(
          <div  className='card-header panel-heading form-builder-group-header'>
          <h5 className='mb-0 panel-title' > 
            <button className='btn btn-block builder-group-button'
             data-toggle='collapse' 
             data-parent={'#'+this.props.id}
             data-target ={'#group-'+this.props.type} 
             onClick={e =>this.props.onOpenGroup(this.props.type) }> 
               {this.props.title}
            </button>
          </h5>
         </div>) ;
    };
}

export default observer(GroupHeader);