import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import increment from '../actions/increment';
import decrement from '../actions/decrement'

function Counter({ count, myIncrement, myDecrement }) {
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={ myDecrement }>&ndash;</button>
        <span>{ count }</span>
        <button onClick={ myIncrement }>+</button>
      </div>
    </div>
  )
}


// class Counter extends React.Component {
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         <h2>Counter</h2>
//         <div>
//           <button onClick={ this.props.myDecrement }>&ndash;</button>
//           <span>{ this.props.count }</span>
//           <button onClick={ this.props.myIncrement }>+</button>
//         </div>
//       </div>
//     )
//   }
// }

const mapStateToProps = state => ({
  count: state.reducer.count,
});

const mapDispatchToProps = dispatch => ({
  myIncrement: () => dispatch(increment({ type: 'INCREMENT' })),
  myDecrement: () => dispatch(decrement({ type: 'DECREMENT' }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


  // state = {
  //   count: 0,
  // }

  // increment = () => {
  //   this.props.dispatch({ type: 'INCREMENT' });
  // }

  // decrement = () => {
  //   this.props.dispatch({ type: 'DECREMENT' });
  // }
