
var Counter = React.createClass({
  getInitialState: function(){
      return{
        count:0
      };
  },

  increment: function() {
    var count = this.state.count + 1;
    this.setState({ count: count});
  },
  decrement: function() {
    var count = this.state.count - 1;
    if(count <0){
      count = 0;
    }
    this.setState({ count: count});
  },
  render:function(){
    return(
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }
});

export default Counter;
