import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { runWithAdal } from 'react-adal';
import { authContext } from './adalConfig';
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';
import * as serviceWorker from './serviceWorker';
runWithAdal(authContext, () => {
    // TODO : continue your process
    ReactDOM.render(  <ActionCableProvider url={API_WS_ROOT}>
    <App />
  </ActionCableProvider>, document.getElementById('root'));

});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();