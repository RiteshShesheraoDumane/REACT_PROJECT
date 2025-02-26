const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS to allow frontend requests
app.use(cors());

// API Endpoint to fetch news
app.get("/news", async (req, res) => {
    try {
        // Get category, country, and page from query parameters (default values provided)
        const { category = "general", country = "us", page = 1 } = req.query;
        
        // Securely fetch API key from environment variables
        const API_KEY = process.env.NEWS_API_KEY;

        // Construct the NewsAPI URL
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=3`;

        // Fetch data from NewsAPI
        const response = await axios.get(url);

        // Send the data to frontend
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
