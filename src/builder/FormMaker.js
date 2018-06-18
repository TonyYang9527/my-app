import React from 'react';
import PropTypes from 'prop-types';
import AllComponents from 'formiojs/components';
import Components from 'formiojs/components/Components';
import FormBuilder from 'formiojs/FormBuilder';
Components.setComponents(AllComponents);

class FormMaker extends React.Component{
    
     static defaultProps = {
        options: {}
     };

    static propTypes = {
         form: PropTypes.object,
         options: PropTypes.object,
    };
    
    componentWillUnmount = () => {
        if (this.builder !== undefined) {
          this.builder.instance.destroy(true);
        }
    };

    render = () => {
        return <div ref={element => this.element = element}/>;
    };

    componentDidMount = () => {
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
  export default FormMaker;
  