import React, { Component } from 'react';
import './Counter.css';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            {' '}
            <h1>{this.props.title}</h1>
          </tr>
          <tr>
            {' '}
            <ButtonWrapper value={1} incrementMethod={this.increment} />
            <ButtonWrapper value={2} incrementMethod={this.increment} />
            <ButtonWrapper value={3} incrementMethod={this.increment} />
          </tr>
          <tr>
            {' '}
            <ButtonWrapper value={4} incrementMethod={this.increment} />
            <ButtonWrapper value={5} incrementMethod={this.increment} />
            <ButtonWrapper value={6} incrementMethod={this.increment} />
          </tr>
          <tr>
            {' '}
            <ButtonWrapper value={7} incrementMethod={this.increment} />
            <ButtonWrapper value={8} incrementMethod={this.increment} />
            <ButtonWrapper value={9} incrementMethod={this.increment} />
          </tr>
          <span>{this.state.counter}</span>
          <tr />
          <tr>
            <div style={{ align: 'center' }}>
              <button className="reset" onClick={this.reset}>
                Reset
              </button>
            </div>
          </tr>
        </table>
      </div>
    );
  }

  increment(value) {
    this.setState(prevState => {
      return { counter: prevState.counter + value };
    });
  }

  reset() {
    this.setState({ counter: 0 });
  }
}

export default Counter;
