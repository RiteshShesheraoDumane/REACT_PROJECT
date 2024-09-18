import React, { Component } from 'react';
import './Navbar.css'; // Create and use this CSS file for custom styles

export default class Navbar extends Component {
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
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
