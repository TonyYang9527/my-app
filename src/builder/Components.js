import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';


/**
 * 
 * For Form Builder left components List  
 * 
 * *****/
class Components extends React.Component{


    static propTypes = {
        components: PropTypes.object,
     };

    static defaultProps = {
      components: {}
     };


   static mutateComponent =(WrappedComponent,injectedProps )=>{
        return class extends React.Component {
          render() {
            console.log('Current props: ', this.props);
            console.log('Next props: ', injectedProps);
            return <WrappedComponent  {...this.props} />;
           }
        }
      }
}
export default Components;