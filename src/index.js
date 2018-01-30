import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.scss';
import './style/addtodo.scss';
import './style/todolist.scss';
import './style/togglelist.scss';
import store from './store/store.js' ;
import socket from './store/socket.js' ;

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={store} socket={socket}/>, document.getElementById('root'));
registerServiceWorker();
