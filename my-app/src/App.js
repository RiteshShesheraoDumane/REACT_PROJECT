import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import News from './components/news';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = {
    progress: 0,
    category: 'general', // Default category
    country: 'us', // Default country
  };

  // Function to set loading bar progress
  setProgress = (progress) => {
    this.setState({ progress });
  };

  // Function to handle category change
  handleCategoryChange = (newCategory) => {
    this.setState({ category: newCategory });
  };

  // Function to handle country change
  handleCountryChange = (newCountry) => {
    this.setState({ country: newCountry });
  };

  render() {
    return (
      <div>
        {/* Pass the handleCategoryChange and handleCountryChange to Navbar */}
        <Navbar 
          onCategoryChange={this.handleCategoryChange} 
          onCountryChange={this.handleCountryChange} 
        />
        
        {/* Loading bar to show progress */}
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
        />
        
        {/* Pass selected category and country to News component */}
        <News
          setProgress={this.setProgress}
          category={this.state.category} // Pass selected category
          country={this.state.country}   // Pass selected country
        />
      </div>
    );
  }
}
