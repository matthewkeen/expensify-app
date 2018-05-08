import { CreateStore, createStore } from 'redux';



const incrementCount = ({incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type:'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type:'RESET'
});

const setCount = ({ count }  = {}) => ({
  type:'SET',
  count
});

// reducers
// - are pure functions, output is only determined by the input, state and action
// does not change anything outside of the function scope
// never change the state or action
// - just read them and return new state


const countReducer = (state = { count: 0 }, action) => {

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy 
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state;
  }

}

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
})

// increment count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());



store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));


store.dispatch(setCount({ count: 101}))