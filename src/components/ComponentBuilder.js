import React from 'react';
import PropTypes from 'prop-types';


class ComponentBuilder extends React.Component{
    static propTypes = {
         key: PropTypes.string,
         title: PropTypes.string,
         icon: PropTypes.string,
         group:  PropTypes.string,
         weight: PropTypes.bool,
         schema:  PropTypes.object,
     };

    static defaultProps = {
        key : 'textField',
        title: 'Text Field',
        icon: 'fa fa-terminal',
        group: 'basic',
        weight: 0,
        schema: {}
     };
     
     render =() =>{
        return(<span id='builder-${.key}' class='drag-copy'><i class={this.props.icon} style={{marginRight: 5}}></i>{this.props.title}</span> ) ;
    };
}
export default ComponentBuilder;