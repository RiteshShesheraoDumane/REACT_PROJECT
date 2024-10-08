import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: '',
      currentDate: '',
      currentDay: '',
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
    const dayOptions = { weekday: 'long' };
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = date.toLocaleDateString();
    const dayString = new Intl.DateTimeFormat('en-US', dayOptions).format(date);

    this.setState({
      currentTime: timeString,
      currentDate: dateString,
      currentDay: dayString,
    });
  };

  handleCountryChange = (event) => {
    this.props.onCountryChange(event.target.value); // Pass selected country to App
  };

  handleCategoryChange = (event) => {
    this.props.onCategoryChange(event.target.value); // Pass selected category to App
  };

  toggleNavbar = () => {
    this.setState((prevState) => ({ isNavExpanded: !prevState.isNavExpanded })); // Toggle navbar expansion
  };

  render() {
    return (
      <>
        {/* First Navbar Section */}
        <div className="mx-auto text-center date-time">
              <span>{this.state.currentDay}, {this.state.currentDate} - {this.state.currentTime}</span>
            </div>
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
          <div className="container-fluid">
            <a className="navbar-brand animated-brand" href="/">NovaNews</a>
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
            <div className={`collapse navbar-collapse ${this.state.isNavExpanded ? 'show' : ''}`} id="navbarNav">
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
                  <a className="nav-link animated-link" href="/">Latest News</a>
                </li>
              </ul>
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
            </div>
            
          </div>
        </nav>

        {/* Second Navbar Section */}
        <nav className="navbar navbar-expand-lg navbar-light custom-category-navbar">
          <div className="container-fluid">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link animated-link" href="/" onClick={() => this.handleCategoryChange({ target: { value: 'general' } })}>General</a>
              </li>
              <li className="nav-item">
                <a className="nav-link animated-link" href="/" onClick={() => this.handleCategoryChange({ target: { value: 'business' } })}>Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link animated-link" href="/" onClick={() => this.handleCategoryChange({ target: { value: 'entertainment' } })}>Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link animated-link" href="/" onClick={() => this.handleCategoryChange({ target: { value: 'health' } })}>Health</a>
              </li>
              <li className="nav-item">
                <a className="nav-link animated-link" href="/" onClick={() => this.handleCategoryChange({ target: { value: 'science' } })}>Science</a>
              </li>
              <li className="nav-item">
                <a className="nav-link animated-link" href="/" onClick={() => this.handleCategoryChange({ target: { value: 'sports' } })}>Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link animated-link" href="/" onClick={() => this.handleCategoryChange({ target: { value: 'technology' } })}>Technology</a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

// // <div class="language">
// <div id="google_translate_element"></div>
// <script type="text/javascript">
//     function googleTranslateElementInit() {
//         new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
//     }
// </script>
// <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
// </div>

