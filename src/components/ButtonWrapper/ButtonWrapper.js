import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ButtonWrapper.css';

class ButtonWrapper extends Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
  }
  render() {
    return (
      <button className="btnWrapper" onClick={this.increment}>
        {this.props.value}
        {this.props.incrementMethod}
      </button>
    );
  }

  increment() {
    this.props.incrementMethod(this.props.value);
  }
}

ButtonWrapper.defaultProps = {
  value: 0
};

ButtonWrapper.propTypes = {
  value: PropTypes.number
};
export default ButtonWrapper;
