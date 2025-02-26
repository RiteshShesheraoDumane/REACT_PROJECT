import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: "",
      currentDate: "",
      currentDay: "",
      isNavExpanded: false, // State to manage navbar expansion
    };
  }

  componentDidMount() {
    this.updateDateTime();
    this.timer = setInterval(this.updateDateTime, 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateDateTime = () => {
    const date = new Date();
    const dayOptions = { weekday: "long" };
    const timeString = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const dateString = date.toLocaleDateString();
    const dayString = new Intl.DateTimeFormat("en-US", dayOptions).format(date);

    this.setState({
      currentTime: timeString,
      currentDate: dateString,
      currentDay: dayString,
    });
  };

  handleCountryChange = (event) => {
    this.props.onCountryChange(event.target.value);
  };

  handleCategoryChange = (category, event) => {
    event.preventDefault(); // Prevent page reload
    this.props.onCategoryChange(category); // Pass category to parent component
  };

  toggleNavbar = () => {
    this.setState((prevState) => ({ isNavExpanded: !prevState.isNavExpanded }));
  };

  render() {
    return (
      <>
        {/* First Navbar Section */}
        <div className="mx-auto text-center date-time">
          <span>
            {this.state.currentDay}, {this.state.currentDate} - {this.state.currentTime}
          </span>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
          <div className="container-fluid">
            <a className="navbar-brand animated-brand" href="/">
              NovaNews
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={this.toggleNavbar}
              aria-controls="navbarNav"
              aria-expanded={this.state.isNavExpanded}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${this.state.isNavExpanded ? "show" : ""}`} id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link animated-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link animated-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link animated-link" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link animated-link" href="/">
                    Latest News
                  </a>
                </li>
              </ul>
              <select className="form-select country-select" aria-label="Select Country" onChange={this.handleCountryChange}>
                <option value="in">India</option>
                <option value="us">United States</option>
                <option value="gb">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="ca">Canada</option>
              </select>
            </div>
          </div>
        </nav>

        {/* Second Navbar Section */}
        <nav className="navbar navbar-expand-lg navbar-light custom-category-navbar">
          <div className="container-fluid">
            <ul className="navbar-nav mx-auto">
              {["general", "business", "entertainment", "health", "science", "sports", "technology"].map((category) => (
                <li className="nav-item" key={category}>
                  <a
                    className="nav-link animated-link"
                    href="/"
                    onClick={(event) => this.handleCategoryChange(category, event)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
