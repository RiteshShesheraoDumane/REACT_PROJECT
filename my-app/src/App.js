import './App.css';
import React, { Component } from 'react';
import Landing from './components/landing';
import Navbar from './components/navbar';
import News from './components/news';
import About from './components/about'; 

import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/contact';

class App extends Component {
    state = {
        progress: 0,
        category: 'general',
        country: 'us',
        showComponents: false,
        value: true // Track if the landing page should be shown
    };

    componentDidMount() {
        const hasStarted = sessionStorage.getItem('hasStarted');
        if (hasStarted === 'true') {
            this.setState({ showComponents: true, value: false });
        }
    }

    setProgress = (progress) => {
        this.setState({ progress });
    };

    handleCategoryChange = (newCategory) => {
        this.setState({ category: newCategory });
    };

    handleCountryChange = (newCountry) => {
        this.setState({ country: newCountry });
    };

    handleGetStarted = () => {
        this.setState({ showComponents: true, value: false }); 
        sessionStorage.setItem('hasStarted', 'true'); // Store the state only for the current session
    };

    render() {
        return (
            <Router>
                <div>
                    {/* Show Landing page only if value is true */}
                    {this.state.value && (
                        <Landing onGetStarted={this.handleGetStarted} />
                    )}
                    {/* Show main components if showComponents is true */}
                    {this.state.showComponents && (
                        <>
                            <Navbar 
                                onCategoryChange={this.handleCategoryChange} 
                                onCountryChange={this.handleCountryChange} 
                            />
                            <LoadingBar
                                color="#f11946"
                                progress={this.state.progress}
                                onLoaderFinished={() => this.setProgress(0)}
                            />
                            <Routes>
                                {/* Route for Home with News component */}
                                <Route path="/" element={
                                    <News
                                        setProgress={this.setProgress}
                                        category={this.state.category}
                                        country={this.state.country}
                                    />
                                } />
                                {/* Route for About component */}
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </>
                    )}
                </div>
            </Router>
        );
    }
}

export default App;
