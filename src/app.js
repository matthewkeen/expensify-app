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



store.dispatch(addExpense({ description: 'water bill', amount:4500}));
store.dispatch(addExpense({ description: 'gas bill', createdAt:1000}));
store.dispatch(addExpense({ description: 'rent', amount:1095}));



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

