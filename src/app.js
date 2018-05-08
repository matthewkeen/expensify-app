import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses'
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();
const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

