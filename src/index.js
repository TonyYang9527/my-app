import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormMaker from '../src/builder/FormMaker';

ReactDOM.render(<FormMaker form={{display: 'form'}}  options={{base: 'https://examples.form.io'} } />, document.getElementById('root'));
