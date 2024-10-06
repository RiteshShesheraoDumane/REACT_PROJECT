// Landing.js
import React from 'react';
import './landingPage.css';

const LandingPage = ({ onGetStarted }) => {
    return (
        <div className="landing-page">
            <div className="overlay">
                <h1 className="welcome-text">Welcome to</h1>
                <h1 className="news-nexus">NewsNexus</h1>
                <blockquote className="blockquote">
                    <p>"Empowering You with Knowledge."</p>
                </blockquote>
                <button className="btn" onClick={onGetStarted}>Get Started</button>
              
            </div>
        </div>
    );
};

export default LandingPage;
