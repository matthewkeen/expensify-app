// action generators for expenses

import uuid from 'uuid';
import database from '../firebase/firebase';
import { addExt } from 'upath';
// componenets call the action generator
// action generator returns an object
// component dispatches object
// redux store changaes

// with firebase

// componenets call the action generator
// action generator returns an *function
// component dispatches *function
// function runs, it has the ability to dispatch other actions and do whateever it wants


// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense( {
        id: ref.key,
        ...expense
      }))
    });

  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

