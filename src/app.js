import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import AppRouter, { history } from './router/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses'
import { login, logout } from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/style.scss';
import { firebase } from './firebase/firebase';
//import './playground/promises';


const store = configureStore();


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(login(user.uid));
    console.log('Uid', user.uid);
    console.log('Log in');
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    })

  } else {
    store.dispatch(logout());
    console.log('Log out');
    renderApp();
    history.push('/');;
  }
})


