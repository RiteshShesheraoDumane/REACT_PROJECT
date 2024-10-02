import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  handleCountryChange = (event) => {
    this.props.onCountryChange(event.target.value); // Pass selected country to App
  };

  handleCategoryChange = (event) => {
    this.props.onCategoryChange(event.target.value); // Pass selected category to App
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand animated-brand" href="/">NovaNews</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link animated-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link animated-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link animated-link" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link animated-link" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link animated-link" href="/news">Latest News</a>
              </li>
              {/* Dropdown for selecting category */}
              <li className="nav-item">
                <select
                  className="form-select category-select"
                  aria-label="Select Category"
                  onChange={this.handleCategoryChange}
                >
                  <option value="general">General</option>
                  <option value="business">Business</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="health">Health</option>
                  <option value="science">Science</option>
                  <option value="sports">Sports</option>
                  <option value="technology">Technology</option>
                </select>
              </li>
              <li className="nav-item">
                {/* Dropdown for selecting country */}
                <select
                  className="form-select country-select"
                  aria-label="Select Country"
                  onChange={this.handleCountryChange}
                >
                  <option value="in">India</option>
                  <option value="us">United States</option>
                  <option value="gb">United Kingdom</option>
                  <option value="au">Australia</option>
                  <option value="ca">Canada</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
