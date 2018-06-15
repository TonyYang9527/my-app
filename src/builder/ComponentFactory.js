import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Load  custom all  Components
 * ***/
class ComponentFactory extends React.Component{
    
  static propTypes = {
         components: PropTypes.object,
    };

  static defaultProps = {
      components: {}
   };


    render=() => {
     let component = {} ;
     let props ={} ;
     return React.createElement(component, {props});
    }
    
  }

   ComponentFactory.registerComponent = function(type, component ){
	  let props = TypeField.prototype;
	   props.components[type] = component;
  };
  export default ComponentFactory;
  