import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    value: state.CounterReducer
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrement: () => {
      dispatch({type: 'INCREMENT'});
    },
    onDecrement: () => {
      dispatch({type: 'DECREMENT'})
    },
  }
}

class Counter extends Component {

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    )
  }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer;
