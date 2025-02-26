import React from "react";
import { motion } from "framer-motion"; // Importing animation library
import "./landingPage.css";

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="landing-page">
      <div className="overlay">
        {/* Animated Welcome Text */}
        <motion.h1 
          className="welcome-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to
        </motion.h1>

        {/* Animated Brand Name */}
        <motion.h1 
          className="news-nexus"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Novanews
        </motion.h1>

        {/* Animated Quote */}
        <motion.blockquote 
          className="blockquote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p>"Empowering You with Knowledge..."</p>
        </motion.blockquote>

        {/* Animated Get Started Button */}
        <motion.button
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onGetStarted}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default LandingPage;
