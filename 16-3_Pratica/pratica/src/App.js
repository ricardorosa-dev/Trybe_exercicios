import React from 'react';
import Counter from './components/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const INITIAL_STATE = {
  count: 0,
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Counter />
      </Provider>
    )
  }
}

export default App;
