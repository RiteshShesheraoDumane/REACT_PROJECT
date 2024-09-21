import React, { Component } from 'react';
import loading from './loading.gif';  // Ensure loading image is correctly imported

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}
