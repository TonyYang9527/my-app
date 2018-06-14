import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FormTemplateMaker from '../src/components/FormTemplateMaker';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<FormTemplateMaker form={{display: 'form'}}  options={{baseUrl: 'https://examples.form.io'} } />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
