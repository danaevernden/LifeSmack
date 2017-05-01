
import React, { Component } from 'react';
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count:0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    var count = this.state.count + 1;
    this.setState({ count: count});
  };
  decrement() {
    var count = Math.max(0, this.state.count - 1);
    this.setState({ count: count});
  };
  render(){
    return(
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }
}

export default Counter;
