import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.scss';
import './style/addtodo.scss';
import './style/todolist.scss';
import './style/togglelist.scss';
import store from './store/store.js' ;


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
