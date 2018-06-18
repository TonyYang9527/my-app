import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';


/**
 * For Form Builder left components List  
 * *****/
class ProxyComponents extends React.Component{
    static propTypes = {
        components: PropTypes.object,
     };

    static defaultProps = {
        components: {}
     };

     componentWillMount = () => {
      console.log(" componentWillUnmount => run ");
        if (this.builder !== undefined) {
          this.builder.instance.destroy(true);
        }
    };


   static mutateComponent =(WrappedComponent,injectedProps )=>{
        return class extends React.Component {
          render() {
            console.log('Current props: ', this.props);
            console.log('Next props: ', injectedProps);
            const newProps = {
               injected: injectedProps
            }
            return <WrappedComponent  {...this.props} {...newProps} />;
           }
        }
      }

      render = () => {
          return(<div>{ ProxyComponents.mutateComponent()}</div>) ;
      };
}
export default ProxyComponents;