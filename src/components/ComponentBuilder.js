import React from 'react';
import PropTypes from 'prop-types';

class ComponentBuilder extends React.Component{
    static propTypes = {
         type: PropTypes.string,
         title: PropTypes.string,
         icon: PropTypes.string,
         group:  PropTypes.string,
         weight: PropTypes.number,
         schema:  PropTypes.object,
     };

    static defaultProps = {
        type : 'textField',
        title: 'Text Field',
        icon: 'fa fa-terminal',
        group: 'basic',
        weight: 0,
        schema: {}
     };
     
     render =() =>{
        return(
          <span id={'builder-'+this.props.type} className='btn btn-primary btn-xs btn-block formcomponent drag-copy'>
             <i className={this.props.icon} style={{marginRight: 5}} />
             {this.props.title}
         </span>) ;
    };
}
export default ComponentBuilder;