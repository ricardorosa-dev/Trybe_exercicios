import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick.bind(this);
    this.handleClick3 = this.handleClick.bind(this);

    this.state = {
      cliques: 0,
      second: 0,
      last: 0,
    }
  }

  handleClick(event) {
    this.setState((oldState, _props) => ({
      cliques: oldState.cliques + 1,
    }));

    if ((this.state.cliques + 1) % 2 === 0) {
      event.target.style.backgroundColor = 'green'
      console.log('Green');
    } else {
      event.target.style.backgroundColor = '';
      console.log('Default color');
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>{this.state.cliques}</button>
        <button onClick={this.handleClick}>Second Button</button>
        <button onClick={this.handleClick}>Last Button)</button>
      </div>
    );
  };
}

export default App;
