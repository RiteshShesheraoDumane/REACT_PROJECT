import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import News from './components/news';

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

  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    );
  }
}
