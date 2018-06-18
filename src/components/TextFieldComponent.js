import React from 'react';
import PropTypes from 'prop-types';

/**
 * For Form Builder left components List  
 * *****/
class TextFieldComponent extends React.Component{
    static propTypes = {
         label: PropTypes.string,
         key: PropTypes.string,
         type:  PropTypes.string,
         mask: PropTypes.bool,
         inputType:  PropTypes.string,
     };

    static defaultProps = {
         label: 'Text Field',
         key: 'textField',
         type: 'textfield',
         mask: false,
         inputType: 'text',
     };
     
     render =() =>{
        return(<div><input name={this.props.name}  key={this.props.key}  type="text" /></div> ) ;
    };
}
export default TextFieldComponent;