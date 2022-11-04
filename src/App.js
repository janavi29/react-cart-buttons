import React from 'react';
import './style.css';

export default class App extends React.Component {
  // declaring state
  state = {
    count: 0,
  };
  render() {
    // accessing the state value
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count} </h1>
        <div>
          {/* aMOUNT increasing button */}
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Add One
          </button>{' '}
          {/* aMOUNT decreasing button */}
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Minus One
          </button>
        </div>
      </div>
    );
  }
}
