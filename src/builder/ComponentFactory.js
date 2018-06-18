import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Components from './Components';
/**
 * Load  custom all  Components
 * ***/
class ComponentFactory extends React.Component{
    
  static propTypes = {
         components: PropTypes.object,
         type: PropTypes.string,
    };

  static defaultProps = {
      components: _.assign(Components.components, Components),
      type :null
   };

    render=() => {
      console.log(":", this.props.components );
      return React.createElement(this.props.components[this.props.type] ,{...this.props.type});
    } 
  }
  export default ComponentFactory;
  