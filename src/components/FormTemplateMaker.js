import React, {Component} from 'react';
import PropTypes from 'prop-types';
import  './LoadComponents';
import FormBuilder from 'formiojs/FormBuilder';

class FormTemplateMaker extends React.Component{
    
     static defaultProps = {
        options: {}
     };

    static propTypes = {
         form: PropTypes.object,
         options: PropTypes.object,
    };

    componentWillUnmount = () => {
        console.log("componentWillUnmount => Run") ;
        if (this.builder !== undefined) {
          this.builder.instance.destroy(true);
        }
    };

    render = () => {
        return <div   ref={element =>  this.element = element} />;
    };

    componentDidMount = () => {
      console.log(" componentDidMount => run ");
      this.initializeBuilder();
    };

    componentWillReceiveProps = (nextProps) => {
      const {options, form} = this.props;
      if (form !== nextProps.form) {
        this.initializeBuilder();
      }
      if (options !== nextProps.options) {
        this.initializeBuilder();
      }
    };

    initializeBuilder = () => {

      console.log(" initializeBuilder =>  element: " ,this.element);
        const {options, form} = this.props;
        this.builder = new FormBuilder(this.element, form, options);
        this.builderReady = this.builder.setDisplay(form.display);
        this.builderReady.then(() => {
            this.builder.instance.on('editComponent', (event)=> {
                console.log('editComponent', event);
              });

          this.builder.instance.on('saveComponent', (event)=> {
            console.log('saveComponent', event);

           });

           this.builder.instance.on('updateComponent', (event)=> {
            console.log('updateComponent', event);
           });

          this.builder.instance.on('deleteComponent', (event)=> {
            console.log('deleteComponent', event);
           });
        });
    };
  }
  export default FormTemplateMaker;
  