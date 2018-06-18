import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormMaker from '../src/builder/FormMaker';
import ComponentFactory from '../src/builder/ComponentFactory';
import ComponentBuilder from '../src/components/ComponentBuilder';

ReactDOM.render(<ComponentBuilder  />, document.getElementById('builder'));
ReactDOM.render(<FormMaker form={{display: 'form'}}  options={{base: 'https://examples.form.io'} } />, document.getElementById('root'));
