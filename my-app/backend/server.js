const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS to allow frontend requests
app.use(cors());
app.get("/news", async (req, res) => {
    try {
        const { category = "general", country = "us", page = 1 } = req.query;
        const API_KEY = process.env.NEWS_API_KEY;

        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=3`;

        const response = await axios.get(url, { responseType: "stream" });

        // Set headers for streaming
        res.setHeader("Content-Type", "application/json");

        // Stream the response to the frontend
        response.data.pipe(res);
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
