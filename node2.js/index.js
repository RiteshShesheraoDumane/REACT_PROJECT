const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const blog = require('./models/blog');

const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

const app = express();
const PORT = 8000;

// MongoDB Connect
mongoose.connect('mongodb://localhost:27017/blogify')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve('./public')));

// Set EJS as View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Routes
app.get('/', async (req, res) => {
    const allblogs = await blog.find({});
    res.render("home", {
        user: req.user,
        blogs: allblogs  
    });
});


app.use('/user', userRoute);
app.use('/blog', blogRoute);

// Start Server
app.listen(PORT, () => console.log(`🚀 Server started at PORT: ${PORT}`));
