import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import News from './components/news';
import LoadingBar from 'react-top-loading-bar'; // Assuming you're using this package for the loading bar

export default class App extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  // Corrected state initialization
  state = {
    progress: 0,
  };

  // Corrected setprogress method
  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <div>
        <Navbar />
        {/* LoadingBar component */}
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
        />
        {/* Pass setProgress as a prop to News */}
        <News setProgress={this.setProgress} />                              
      </div>
    );
  }
}
